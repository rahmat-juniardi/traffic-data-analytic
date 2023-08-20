import './styles/style.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

import AppConfig from "./AppConfig";
const appConfig = AppConfig.getInstance();
appConfig.mount('#app');