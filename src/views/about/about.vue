<template>
  <section>
    <mes-header></mes-header>
    <mes-body>
      <banner :imgUrl="imgUrl"></banner>
      <about-block></about-block>
    </mes-body>
    <mes-footer></mes-footer>
  </section>
</template>

<script type="text/ecmascript-6">
import MesHeader from 'components/mesHeader'
import MesBody from 'components/mesBody'
import MesFooter from 'components/mesFooter'
import Banner from 'modules/banner'
import AboutBlock from 'components/aboutBlock'

export default {
  data() {
    return {
      imgUrl: require('images/banner2.jpg')
    }
  },
  components: {
    MesHeader,
    MesBody,
    MesFooter,
    Banner,
    AboutBlock
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
</style>
