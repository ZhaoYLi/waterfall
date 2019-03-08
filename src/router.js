import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/vertical-waterfall',
      name: 'vertical-waterfall',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/VerticalWaterfall.vue')
    },
    {
      path: '/',
      name: 'horizontal-waterfall',
      component: () => import('./views/HorizontalWaterfall.vue')
    }
  ]
})
