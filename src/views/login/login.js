import Vue from 'vue'
import App from './login.vue'
import VueLazyload from 'vue-lazyload'
// import router from 'router'
import 'style/index.styl'

Vue.use(VueLazyload, {
  loading: require('images/default.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
