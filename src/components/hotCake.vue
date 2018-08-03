<template>
  <section class="hot-cake">
    <goods :goodsList="cakeList"></goods>
    <a href="/views/cake.html" class="show-more">显示更多</a>
  </section>
</template>

<script>
import Goods from 'modules/goods'

export default {
  name: 'hot-cake',
  data() {
    return {
      cakeList: [
        {
          id: 1,
          imgUrl: require('images/hotCake/32-1.jpg'),
          title: 'LUCKY MAN',
          desc: '芥末和蛋糕，你能抽中哪种味道',
          price: '¥188.00',
          sold: 1
        },
        {
          id: 2,
          imgUrl: require('images/hotCake/10-1.jpg'),
          title: '拔萝卜',
          desc: '拔起小萝卜，分享大欢乐',
          price: '¥188.00',
          sold: 1
        },
        {
          id: 3,
          imgUrl: require('images/hotCake/152-1.jpg'),
          title: 'Mr.Black',
          desc: '开黑吧，兄弟',
          price: '¥268.00',
          sold: 1
        }
      ]
    }
  },
  components: {
    Goods
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.hot-cake {
  padding: 60px 0;
  width: 100%;
  text-align: center;
  background: $gray1;
  .show-more {
    display: inline-block;
    padding: 5px 25px;
    border: 1px solid #292b2a;
    &:hover {
      background: #000;
      color: $white;
    }
  }
}
</style>
