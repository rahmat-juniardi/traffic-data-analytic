export default [
    {
        path: '/',
        component: () => import("../pages/Dashboard.vue"),
        meta: {
            name: 'Dashboard',
            breadcrumb: [
                { name: 'Beranda', link: '/' },
            ]
        }
    },

];