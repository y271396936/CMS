<template>
  <section class="coffee-block">
    <section v-for="(item, index) in coffeeData" :key="index">
      <title-line :title="item.title"></title-line>
      <goods :goodsList="item.cakeList"></goods>
    </section>
  </section>
</template>

<script>
import TitleLine from 'modules/titleLine'
import Goods from 'modules/goods'
import {coffee} from 'api'
import config from '@/config'

export default {
  name: 'coffee-block',
  data() {
    return {
      coffeeData: []
    }
  },
  created() {
    this.getCoffeeData()
  },
  methods: {
    async getCoffeeData() {
      let res = await coffee.inquire()
      if (res.code === config.status_code) {
        this.coffeeData = res.data
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
