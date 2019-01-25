/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: require('@/pages/calendar/index.vue')
    },
    {
      path: '/calendar',
      name: 'calendar-index',
      component: require('@/pages/calendar/index.vue')
    },
    {
      path: '*',
      redirect: '/calendar'
    }
  ]
})
