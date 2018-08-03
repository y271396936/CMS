<template>
  <section class="mes-footer">
    <slot></slot>
    <des-line></des-line>
    <shop-descript></shop-descript>
    <site-remarks></site-remarks>
  </section>
</template>

<script>
import DesLine from 'modules/desLine'
import ShopDescript from 'modules/shopDescript'
import SiteRemarks from 'modules/siteRemarks'

export default {
  name: 'mes-footer',
  components: {
    DesLine,
    ShopDescript,
    SiteRemarks
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">

</style>
