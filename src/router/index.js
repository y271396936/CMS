import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'

Vue.use(Router)

export default new Router({
  // mode: 'history', // 改变默认 hash 模式
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld
    }
  ]
})
