
import { createRouter, createWebHistory } from "vue-router";

import Login from '../components/Login.vue';
import Forgotpswrd from "../components/Forgotpswrd.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'TERMS',
        component: Login,
    },
    {
        path: '/Forgotpswrd',
        name: 'con',
        component: Forgotpswrd
    },


]
});
export default router