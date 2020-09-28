import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// axios相关
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$http = axios
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

Vue.prototype.GlobalUrl = function(url){
  return "http://localhost:80"+url
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



