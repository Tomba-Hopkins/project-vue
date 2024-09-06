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
            path: '/menu/:id',
            name: 'menu',
            component: () => import('../views/Menu.vue')
        },
        {
            path: '/:type',
            name: 'type',
            component: () => import('../views/Tipe.vue')
        },
    ]
})

export default router