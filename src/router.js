import Vue from 'vue'
import Router from 'vue-router'
import Specification from './views/Specification.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'specification',
      component: Specification
    },
    {
      path: '/general',
      name: 'general',
      component: () => import('./views/General.vue')
    },
    {
      path: '/pageHeader',
      name: 'pageHeader',
      component: () => import('./views/PageHeader.vue')
    },
    {
      path: '/html',
      name: 'html',
      component: () => import('./views/HTML.vue')
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('./views/CSS.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('./views/Comment.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    }
  ]
})
