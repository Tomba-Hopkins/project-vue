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
            path: '/home',
            redirect: '/'
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
            path: '/menu/:type/:id',
            name: 'menu',
            component: () => import('../views/Menu.vue'),
            children: [
                {
                    path: 'bonus',
                    name: 'bonus',
                    component: () => import('../components/Bonus.vue')
                }
            ]
        },
        {
            path: '/:type',
            name: 'type',
            component: () => import('../views/Tipe.vue')
        },
        {
            path:'/:catchall(.*)*',
            name: 'notfound',
            component: () => import('../views/error/Notfound.vue'),
        },
      
    ]
})

export default router