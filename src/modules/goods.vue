<template>
  <ul class="goods-wrapper container">
    <li class="goods" v-for="(item, index) in goodsList" :key="index">
      <a href="javascript:;" class="goods-img">
        <img width="380" height="380" v-lazy="item.imgUrl">
      </a>
      <a href="javascript:;" class="goods-desc">
        <span class="title">{{item.title}}</span>
        <span class="desc">{{item.desc}}</span>
      </a>
      <div class="price-cart">
        <span class="price">{{item.price}}</span>
        <a href="javascript:;" class="cart" :class="{'sold': cartClass(item.sold)}">{{cartName(item.sold)}}</a>
      </div>
    </li>
  </ul>
</template>

<script>
import config from '@/config'

export default {
  name: 'goods',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      imgUrl: require('images/hotCake/32-1.jpg')
    }
  },
  methods: {
    cartName(falg) {
      if (falg === config.sold) {
        // 该商品有货，可以加入购物车
        return '加入购物车'
      } else {
        return '该商品已售罄'
      }
    },
    cartClass(falg) {
      if (falg === config.sold) {
        return 'sold'
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.goods-wrapper {
  overflow: hidden;
  .goods {
    float: left;
    margin-right: 30px;
    margin-bottom: 30px;
    width: 380px;
    height: 580px;
    background: $white;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    .goods-desc {
      display: block;
      padding: 30px 0 0 30px;
      span {
        display: block;
        text-align: left;
      }
      .title {
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: 800;
      }
      .desc {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        color: #7c7c7d;
      }
    }
    .price-cart {
      margin-top: 30px;
      padding: 0 30px;
      height: 40px;
      line-height: 40px;
      .price {
        float: left;
        font-size: 24px;
        color: $priceColor;
      }
      .cart {
        float: right;
        width: 156px;
        height: 40px;
        text-align: center;
        font-size: 16px;
        background: $gray1;
        &.sold:hover {
          background: $buyColor;
          color: $white;
        }
      }
    }
  }
}
</style>
