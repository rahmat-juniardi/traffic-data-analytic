import { get } from "lodash";
import { createStore } from "vuex";
import auth from "./auth";

const store = createStore({
    modules: {
        auth,
    },
    getters: {
        token(state) {
            return get(state, 'auth.user.token', '');
        }
    }
});

export default store;
