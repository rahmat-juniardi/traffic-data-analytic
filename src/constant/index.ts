

export default class Constant {
    static PREVIEW_FORMAT_DATE = 'D MMMM YYYY';
    static PREVIEW_FORMAT_DATE_FULL = 'D MMMM YYYY HH:mm';
    static PARSE_FORMAT_DATE = 'DD/MM/YYYY';
    static SEARCH_FORMAT_DATE = 'DD/MM/YYYY';
    static DATEPICKER_FORMAT_ONLY_DATE = 'dd-MM-yyyy';
    static DEFAULT_LIMIT = 20;
    static MAX_LIMIT = 100;
    static MAX_TIMEOUT = 30 * 1000;
    static NUMBER_FORMAT = 'id-ID';


    static BASE_API = 'https://api.npoint.io/0b30c794138f64dde06c/';


    static BASE_API2 = 'http://172.11.12.122:8080/';

    static LOGIN_API = this.BASE_API2 + 'auths/do-login';
    static DASHBOARD_PAJAK_HARIAN_API = this.BASE_API + 'traffics';
    static DASHBOARD_POPULATIONS_API = this.BASE_API + 'report/vehicle-populate';
    static DASHBOARD_PAJAK_MATI_API = this.BASE_API + 'pajakMati';
    static DASHBOARD_POPULATIONS_BY_YEAR_API = this.BASE_API + 'populations'

    static USER_KEY_LS = "user";

}