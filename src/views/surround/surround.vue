<template>
  <section>
    <mes-header></mes-header>
    <mes-body>
      <banner :imgUrl="imgUrl"></banner>
      <surround-block></surround-block>
    </mes-body>
    <mes-footer></mes-footer>
  </section>
</template>

<script type="text/ecmascript-6">
import MesHeader from 'components/mesHeader'
import MesBody from 'components/mesBody'
import MesFooter from 'components/mesFooter'
import Banner from 'modules/banner'
import SurroundBlock from 'components/surroundBlock'

export default {
  data() {
    return {
      imgUrl: require('images/banner1.jpg')
    }
  },
  components: {
    MesHeader,
    MesBody,
    MesFooter,
    Banner,
    SurroundBlock
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
</style>
