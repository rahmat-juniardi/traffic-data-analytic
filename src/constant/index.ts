

export default class Constant {
    static PREVIEW_FORMAT_DATE = 'D MMMM YYYY';
    static PREVIEW_FORMAT_DATE_FULL = 'D MMMM YYYY HH:mm';
    static PARSE_FORMAT_DATE = 'DD/MM/YYYY';
    static SEARCH_FORMAT_DATE = 'DD/MM/YYYY';
    static DEFAULT_LIMIT = 20;
    static MAX_LIMIT = 100;
    static MAX_TIMEOUT = 30 * 1000;
    static NUMBER_FORMAT = 'id-ID';


    static BASE_API = 'https://api.npoint.io/0b30c794138f64dde06c/';

    static LOGIN_API = this.BASE_API + 'auths/do-login';
    static DASHBOARD_PAJAK_HARIAN_API = this.BASE_API + 'traffics';
    static DASHBOARD_POPULATIONS_API = this.BASE_API + 'populations';

    static USER_KEY_LS = "user";

}