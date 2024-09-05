import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/Makanan',
            name: 'makanan',
            component: () => import('../views/Makanan.vue')
        },
        {
            path: '/Minum',
            name: 'minuman',
            component: () => import('../views/Minuman.vue')
        },
    ]
})

export default router