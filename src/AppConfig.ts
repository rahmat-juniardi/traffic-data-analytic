import { App, ComponentPublicInstance, createApp } from 'vue';
import Notifications from '@kyvg/vue3-notification';
import VueRouter from 'vue-router';

import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
    FaCircleNotch
} from "oh-vue-icons/icons";

import { formatDate } from './utils';
import { capitalize, startCase} from 'lodash';

import axiosInterceptor from "./utils/axios-interceptor";

import router from './router';
import stores from './stores';

import VueApp from './App.vue';

export default class AppConfig {
    private router: VueRouter.Router;

    private app: App;

    private appInstance?: VueApp | ComponentPublicInstance;

    static instance: AppConfig;

    static getInstance() {
        if (!this.instance) {
            this.instance = new AppConfig();
        }

        return this.instance;
    }

    constructor() {
        this.router = router;
        this.app = createApp(VueApp);
        this.useLibs();
        this.setFilters();
        this.setGlobalComponents();
        this.setDisableWarn();
    }

    useLibs() {
        this.app.use(this.router);
        this.app.use(stores);
        this.app.use(Notifications);

        // init vue icons
        addIcons(FaCircleNotch);


        axiosInterceptor();
    }

    // in case its noisy
    setDisableWarn() {
        this.app.config.warnHandler = () => {
        };
    }

    setFilters() {
        axiosInterceptor();
        this.app.config.globalProperties.$filters = {formatDate, capitalize, startCase};
    }

    setGlobalComponents() {
        this.app.component('v-icon', OhVueIcon);

    }

    mount(element: string) {
        this.appInstance = this.app.mount(element);
    }

    notify({title = "Info", type = "info", text, duration }: {title?: string, type?: string, text: string, duration?: number}) {
        (this.appInstance as VueApp)?.notify(title, text, type, duration);
    }
}