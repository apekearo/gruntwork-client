import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import './global.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
