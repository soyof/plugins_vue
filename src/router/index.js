import Vue from 'vue'
import Router from 'vue-router'
import permission from './permission'
import layout from './layout'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login.vue')
  },
  { path: '/404', component: () => import('@/views/404') },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/Layout')
  },
  ...permission,
  ...layout,
  { path: '*', redirect: '/404' }
]

const router = new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes
})

export default router
