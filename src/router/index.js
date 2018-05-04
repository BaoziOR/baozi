import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Signin from '../pages/Signin'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
