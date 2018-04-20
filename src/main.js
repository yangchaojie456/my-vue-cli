// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from '@/store/store'
import ajax from '@/utils/ajax'

import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

Vue.prototype.$ajax = ajax
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
