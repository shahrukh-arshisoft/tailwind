
import { createRouter, createWebHistory } from "vue-router";

import Login from '../components/Login.vue';
import Forgotpswrd from "../components/Forgotpswrd.vue";
import Entercode from "../components/Entercode.vue";

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
    {
        path: '/Entercode',
        name: 'shahrukh',
        component: Entercode
    }

]
});
export default router