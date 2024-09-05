import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import('../components/Dashboard.vue')
        },
        {
            path: '/Makanan',
            name: 'makanan',
            component: () => import('../components/Makanan.vue')
        },
        {
            path: '/Minum',
            name: 'minuman',
            component: () => import('../components/Minuman.vue')
        },
    ]
})

export default router