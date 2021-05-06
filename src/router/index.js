import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Index.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/project',
        name: 'Project',
        component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue')
    },

    {
        path: '/reference',
        name: 'Reference',
        component: () => import(/* webpackChunkName: "blog" */ '../views/Reference.vue')
    },
 
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
