import dayjs from "dayjs";
import Constant from "../constant";
import { Dict } from "../interfaces";

export const formatDate = (
    value?: Date | string | number,
    pattern: string = Constant.PREVIEW_FORMAT_DATE,
    parsePattern: string = Constant.PARSE_FORMAT_DATE,
) => {
    if (!value) {
        return "-";
    }
    if (typeof value === "string") {
        return dayjs(value, parsePattern).format(pattern) || "-";
    }
    if (typeof value === "number") {
        return dayjs(new Date(value)).format(pattern) || "-";
    }

    return dayjs(value).format(pattern) || "-";
}

export const generateUUID = () => {
    let d = new Date().getTime();
    let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16;

        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}