/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: require('@/components/Index')
    // },
    {
      path: '/',
      name: 'login',
      component: require('@/components/Login')
    },
    // {
    //   path: '/calendar',
    //   name: 'calendar-index',
    //   component: require('@/pages/calendar/index.vue')
    // },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
