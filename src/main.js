import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_GITLAB_URL + process.env.VUE_APP_GITLAB_API;
axios.defaults.headers.get['Accepts'] = 'application/json'

axios.interceptors.request.use(config => {
  config.headers["PRIVATE-TOKEN"] = process.env.VUE_APP_GITLAB_TOKEN;
  //console.log('Req-CONFIG-LOG', config)
  return config
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
