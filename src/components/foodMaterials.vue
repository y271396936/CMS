<template>
  <section class="food-materials">
    <materials :materials="materials"></materials>
  </section>
</template>

<script>
/* 展示食物配料的组件 */
import Materials from 'modules/materials'

export default {
  name: 'food-materials',
  data() {
    return {
      materials: [
        {
          id: 10,
          imgUrl: require('images/material/slide2-1.jpg'),
          desc: '100%<br/>比利时进口<br/>纯天然巧克力'
        },
        {
          id: 11,
          imgUrl: require('images/material/slide2-2.jpg'),
          desc: '100%<br/>德国 & 新西兰<br/>进口乳脂奶油'
        },
        {
          id: 12,
          imgUrl: require('images/material/slide2-3.jpg'),
          desc: '当季<br/>世界最佳产地<br/>自然成熟蔬果&坚果'
        }
      ]
    }
  },
  components: {
    Materials
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.food-materials {
  padding: 60px 0 40px
  overflow: hidden;
  background: $gray2;
}
</style>
