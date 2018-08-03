<template>
  <div id="app">
    <mes-header></mes-header>
    <mes-body>
      <!-- 展示图 -->
      <banner :imgUrl="imgUrl"></banner>
      <!-- 热销蛋糕 -->
      <hot-cake></hot-cake>
      <!-- 食物配料 -->
      <food-materials></food-materials>
      <!-- MES 日志 -->
      <log-area></log-area>
    </mes-body>
    <mes-footer></mes-footer>
    <!--<router-view/>-->
  </div>
</template>

<script>
import MesHeader from 'components/mesHeader'
import MesBody from 'components/mesBody'
import MesFooter from 'components/mesFooter'
import Banner from 'modules/banner'
import HotCake from 'components/hotCake'
import FoodMaterials from 'components/foodMaterials'
import LogArea from 'components/logArea'

export default {
  name: 'App',
  data() {
    return {
      imgUrl: require('images/banner0.jpg')
    }
  },
  components: {
    MesHeader,
    MesBody,
    MesFooter,
    Banner,
    HotCake,
    FoodMaterials,
    LogArea
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
