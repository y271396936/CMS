<template>
  <section class="coffee-block">
    <section v-for="(item, index) in surroundData" :key="index">
      <title-line :title="item.title"></title-line>
      <goods :goodsList="item.cakeList"></goods>
    </section>
  </section>
</template>

<script>
import TitleLine from 'modules/titleLine'
import Goods from 'modules/goods'
import {surround} from 'api'
import config from '@/config'

export default {
  name: 'surround-block',
  data() {
    return {
      surroundData: []
    }
  },
  created() {
    this.getCoffeeData()
  },
  methods: {
    async getCoffeeData() {
      let res = await surround.inquire()
      if (res.code === config.status_code) {
        console.log(res)
        this.surroundData = res.data
      }
    }
  },
  components: {
    TitleLine,
    Goods
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.coffee-block {
  padding: 20px 0 50px;
  background: $gray1;
}
</style>
