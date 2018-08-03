import Vue from 'vue'
import App from './surround.vue'
import VueLazyload from 'vue-lazyload'
import 'style/index.styl'

Vue.use(VueLazyload, {
  loading: require('images/default.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
