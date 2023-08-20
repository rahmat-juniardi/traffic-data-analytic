import Constant from "../../constant";
import { LoginState, UserLoginResponse } from "../../interfaces";
import SecureStorage from "../../utils/Storage";

function resetState(): LoginState {
    return {
        user: { username: "", role: "", token: "", email: "" },
        loggedIn: false,
        loadingInit: true,
    }
}

export default {
    state: resetState(),
    mutations: {
        setLoginSucceed(state: LoginState, userData: UserLoginResponse) {
            state.user = userData;
            state.loggedIn = true;
            state.loadingInit = false;

            SecureStorage.getInstance().setByKey(Constant.USER_KEY_LS, userData);
        },
        setLoggedOut(state: LoginState) {
            try {
                SecureStorage.getInstance().removeByKey(Constant.USER_KEY_LS);
                state = resetState();
                window.location.href = "/";
            } catch (e) {
                console.log(e);
            }
        }
    },
    actions: {
        initAuth({ commit }: any) {
            try {
                const user = SecureStorage.getInstance().getByKey(Constant.USER_KEY_LS);
                if (!user) {
                    return;
                }

                commit('setLoginSucceed', user);
            } catch (e) {
                console.log(e);
            }
        }
    }
}
