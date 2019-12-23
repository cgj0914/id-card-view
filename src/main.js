import Vue from 'vue'
import App from './App.vue'
import IdCardView from './lib'
import ConvenienceImage from 'convenience-image'

Vue.config.productionTip = false

Vue.use(IdCardView)
Vue.use(ConvenienceImage)
new Vue({
  render: h => h(App)
}).$mount('#app')
