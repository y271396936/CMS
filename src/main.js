import Vue from 'vue'
import App from './App'
import store from './store'
import VueLazyload from 'vue-lazyload'
// import router from 'router'
import 'style/index.styl'

Vue.use(VueLazyload, {
  loading: require('images/default.jpg')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  store,
  render: h => h(App)
})
