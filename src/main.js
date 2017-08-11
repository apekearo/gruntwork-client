import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './global.css'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCC2bn09ZM8jNrPx2UDsb96a0ql3BTssvs',
   libraries: 'places' //// If you need to use place input 
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
