<template>
  <section class="cake-block">
    <section v-for="(item, index) in cakeData" :key="index">
      <title-line :title="item.title"></title-line>
      <goods :goodsList="item.cakeList"></goods>
    </section>
  </section>
</template>

<script>
import TitleLine from 'modules/titleLine'
import Goods from 'modules/goods'
import {cake} from 'api'
import config from '@/config'

export default {
  name: 'cake-block',
  data() {
    return {
      cakeData: [],
      cakeArr: [
        {
          title: {
            parentTitle: '情感系列',
            subTitle: 'emotiona'
          },
          cakeList: [
            {
              id: 1,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/152-1.jpg',
              title: 'Mr.Black',
              desc: '开黑吧，兄弟',
              price: '¥268.00'
            },
            {
              id: 2,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/26-1.jpg',
              title: '许愿',
              desc: '玫瑰花中烛，点燃爱的期许',
              price: '¥298.00'
            }
          ]
        },
        {
          title: {
            parentTitle: '极致系列',
            subTitle: 'ultimate'
          },
          cakeList: [
            {
              id: 101,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/9-1.jpg',
              title: '爱的箴言',
              desc: '我轻轻的咬一口，你说的爱我',
              price: '¥188.00'
            }
          ]
        },
        {
          title: {
            parentTitle: '趣味系列',
            subTitle: 'interesting'
          },
          cakeList: [
            {
              id: 201,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/32-1.jpg',
              title: 'LUCKY MAN',
              desc: '芥末和蛋糕，你能抽中哪种味道',
              price: '¥188.00'
            },
            {
              id: 202,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/10-1.jpg',
              title: '拔萝卜',
              desc: '拔起小萝卜，分享大欢乐',
              price: '¥188.00'
            },
            {
              id: 201,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/22-1.jpg',
              title: '小爪',
              desc: '拍拍手，做我一辈子的小可爱',
              price: '¥188.00'
            }
          ]
        },
        {
          title: {
            parentTitle: '口味系列',
            subTitle: 'taste'
          },
          cakeList: [
            {
              id: 301,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/83-1.jpg',
              title: '最佳拍档',
              desc: '天生的灵魂伴侣',
              price: '¥188.00'
            },
            {
              id: 302,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/15-1.jpg',
              title: '千与千薰',
              desc: '淡淡的熏香，浅浅的甜味',
              price: '¥188.00'
            },
            {
              id: 303,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/21-1.jpg',
              title: '英雄本色',
              desc: '戒不掉的男人味',
              price: '¥188.00'
            },
            {
              id: 304,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/36-1.jpg',
              title: 'Happy Hour',
              desc: '欢乐相聚时光，怎能少了你',
              price: '¥298.00'
            },
            {
              id: 305,
              imgUrl: 'http://static1.mescake.com/mobile/goods/list/125-1.jpg',
              title: '树莓夏朵',
              desc: '寻找那一颗颗酸甜的法国树莓',
              price: '¥188.00'
            }
          ]
        }
      ]
    }
  },
  created() {
    this.getCakeData()
  },
  methods: {
    async getCakeData() {
      let res = await cake.inquire()
      if (res.code === config.status_code) {
        this.cakeData = res.data
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

.cake-block {
  padding: 20px 0 50px;
  background: $gray1;
}
</style>
