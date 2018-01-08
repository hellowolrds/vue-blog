// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import './assets/icomoon.css'
import './assets/base.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import moment from 'moment'


// 注册全局过滤器
Vue.filter('dateFmt', (value, formatString)=>{
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment(value).format(formatString);
})


Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(MintUI);

var store = new Vuex.Store({
  state: {
    load: '/'
  },
  mutations: {
    // 加载状态的改变
    change (state, value) {
      state.load = value;
    }
  },
  actions: {
    change: ( {commit}, value )=>commit('change')
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
