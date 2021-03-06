import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import VueMeta from 'vue-meta'
import BackToTop from 'vue-backtotop'
import { VLazyImagePlugin } from "v-lazy-image";
import ProgressBar from 'vue-simple-progress'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(ProgressBar)
Vue.use(VLazyImagePlugin);
Vue.use(BackToTop)
Vue.use(VueAwesomeSwiper)
Vue.use(VueMeta)

import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/font-awesome.min.css'
import 'swiper/css/swiper.min.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
