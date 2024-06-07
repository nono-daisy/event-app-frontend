import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "../views/guestsView/LandingView.vue";
import LoginView from "../views/authenticateViews/LoginView.vue";
import RegistrationFormView from "../views/guestsView/RegistrationFormView.vue";
import ScannedView from "../views/authenticateViews/ScannedView.vue";
import AboutView from "../views/guestsView/AboutView.vue";
import ApprovedListView from "../views/authenticateViews/ApprovedListView.vue";
import RegistrationListView from "../views/authenticateViews/RegistrationListView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/welcome'
        },
        {
            path: '/welcome',
            component: LandingView
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/registrationForm',
            component: RegistrationFormView
        },
        {
            path: '/events/:event',
            component: RegistrationFormView
        },
        {
            path: '/qrCodeScanned',
            component: ScannedView
        },
        {
            path: '/about',
            component: AboutView
        },
        {
            path: '/approvedList',
            component: ApprovedListView
        },
        {
            path: '/registrationList',
            component: RegistrationListView
        },
    ]
})

export default router
