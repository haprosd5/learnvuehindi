import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* components */
import Login from "./components/Login";
import Admin from "./components/Admin";
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: "/login",
        component: Login,
        name: 'login'
    },
    {
        path: "/admin",
        component: Admin,
        name: 'admin'
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});
export default router;
