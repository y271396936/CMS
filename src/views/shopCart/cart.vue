<template>
  <section>
    <mes-header></mes-header>
    <mes-body>
      <no-page></no-page>
      <h3>{{msg}}</h3>
    </mes-body>
    <mes-footer></mes-footer>
  </section>
</template>

<script type="text/ecmascript-6">
import MesHeader from 'components/mesHeader'
import MesBody from 'components/mesBody'
import MesFooter from 'components/mesFooter'
import NoPage from 'modules/noPage'

export default {
  data() {
    return {
      msg: '购物车组件'
    }
  },
  components: {
    MesHeader,
    MesBody,
    MesFooter,
    NoPage
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
</style>
