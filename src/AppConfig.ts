import { App, ComponentPublicInstance, createApp } from 'vue';
import Notifications from '@kyvg/vue3-notification';
import VueRouter from 'vue-router';
import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
    HiMenu, MdPermmediaOutlined, MdBookmarkadd,
    RiSearchLine, RiCloseCircleLine, MdFormatalignright,
    MdManagesearchOutlined, FaCircleNotch, CoSend,
    FaRegularEye, FaPlus, FaMinus, FcOpenedFolder,
    FaEdit, FaTrashAlt, MdSaveRound, BiBox,
    MdKeyboardarrowleft, MdKeyboardarrowright,
    MdArrowdropdown, MdArrowdropup, MdTimerOutlined,
    HiSolidDotsHorizontal, MdBackhandOutlined,
    MdDoneoutlineRound, MdCancelOutlined, MdPausecircleoutline,
    BiArrowLeft, MdAreachartTwotone, HiClipboardList
} from "oh-vue-icons/icons";
import { formatDate } from './utils';
import { capitalize, startCase } from 'lodash';

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

        // init icon
        addIcons(HiMenu);
        addIcons(RiSearchLine);
        addIcons(MdBookmarkadd);
        addIcons(MdFormatalignright);
        addIcons(RiCloseCircleLine);
        addIcons(MdPermmediaOutlined);
        addIcons(MdPermmediaOutlined);
        addIcons(MdManagesearchOutlined);
        addIcons(FaRegularEye);
        addIcons(FaEdit);
        addIcons(FaCircleNotch);
        addIcons(CoSend);
        addIcons(FaPlus);
        addIcons(FaMinus);
        addIcons(FcOpenedFolder);
        addIcons(FaTrashAlt);
        addIcons(MdSaveRound);
        addIcons(BiBox);
        addIcons(MdKeyboardarrowleft);
        addIcons(MdKeyboardarrowright);
        addIcons(MdArrowdropdown);
        addIcons(BiArrowLeft);
        addIcons(MdAreachartTwotone);
        addIcons(MdArrowdropup);
        addIcons(MdTimerOutlined);
        addIcons(HiSolidDotsHorizontal);
        addIcons(MdBackhandOutlined);
        addIcons(MdDoneoutlineRound);
        addIcons(MdCancelOutlined);
        addIcons(MdPausecircleoutline);
        addIcons(HiClipboardList);

        axiosInterceptor();
    }

    // in case its noisy
    setDisableWarn() {
        this.app.config.warnHandler = () => {
        };
    }

    setFilters() {
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