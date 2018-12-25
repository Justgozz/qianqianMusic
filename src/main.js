// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Tabs from './components/tabs'


Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/baidu_music_api"
Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})