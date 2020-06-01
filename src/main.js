import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// global filter
import * as filters from './plugins/filters'
Object.keys(filters).forEach(key => {
  Vue.config(key, filters[key])
})

import 'normalize.css' // resets css
import '@/styles/index.scss' // global style

import '@/permission' // permission control
Vue.use(element)
Vue.config.productionTip = false

// import Plugin from '@/utils/axios'
// Vue.use(Plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
