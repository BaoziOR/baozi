// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../build/polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import fetch from './fetch'

// 引入公用方法库
import Util from './utils'

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

// 将公用方法定义在vue原型
Vue.prototype.Util = Util

Vue.config.productionTip = process.env.NODE_ENV === 'production'

fetch(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
