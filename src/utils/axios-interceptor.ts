import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import AppConfig from "../AppConfig";
import ResponseStatus from "../configs/ResponseStatus";
import Constant from "../constant";
import store from "../stores";

type ResponseWithDescriptionAndStatus = {
    description?: ResponseDescription | ResponseDescription[]
    status?: string
}

type ResponseDescription = {
    field: string
    message: string
}

export default function setup() {
    axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        const token = store.getters.token;
        if (token) {
            config.headers = Object.assign({
                'Authorization': token
            }, config.headers);
        }

        if (config.data && config.data instanceof FormData) {
            config.headers = Object.assign({
                "Content-Type": "multipart/form-data"
            }, config.headers);
        } else {
            config.headers = Object.assign({
                "Content-Type": "application/json"
            }, config.headers);
        }

        return {
            ...config,
            baseURL: Constant.BASE_API,
            timeout: Constant.MAX_TIMEOUT,
        };
    }, (error: AxiosError) => Promise.reject(error));

    axios.interceptors.response.use((response: AxiosResponse) => {
        if (response.config.method?.toUpperCase() !== 'GET') {
            const notifParam = getNotifParam(response)
            if (notifParam) AppConfig.getInstance().notify(notifParam)
        }

        return response
    }, (error: AxiosError) => {
        const notifParam = getNotifParam(error.response as any)
        if (notifParam) AppConfig.getInstance().notify({ ...notifParam, type: "error" })

        if (error?.response?.status === 401) {
            store.commit('setLoggedOut');
            return;
        }


        return Promise.reject(error);
    });
}



function getNotifParam(resp?: AxiosResponse<ResponseWithDescriptionAndStatus>, type: string = "info") {
    if (!resp) return

    let message = ""
    let status = resp.data.status || "";

    let description = resp.data.description
    if (Array.isArray(description) && description.length) {
        message = description.map((item) => item.message).join(", ")
    } else if (description) {
        message = (description as ResponseDescription).message
    }

    if (message && status) {
        return {
            text: message, type, title: ResponseStatus.getStatusMessage(status),
        }
    } else if (message && !status) {
        return {
            text: message, title: "Info", type
        }
    } else if (!message && status) {
        return {
            text: ResponseStatus.getStatusMessage(status), title: "Info", type
        }
    }

    return
}