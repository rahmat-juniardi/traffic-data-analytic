import { LocationQuery, createRouter, createWebHistory } from 'vue-router';
import routes from "./routes";
import QueryString from "qs";
const vueRouter = createRouter({
    routes,
    history: createWebHistory(),
    parseQuery: function (queryParams) {
        return QueryString.parse(queryParams) as LocationQuery;
    },
    stringifyQuery: function (query) {
        return QueryString.stringify(query);
    },
    scrollBehavior: function () {
        return { left: 0, top: 0 };
    }
});

export default vueRouter;
