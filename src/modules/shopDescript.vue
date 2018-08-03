<template>
  <section class="shop-descript">
    <div class="content-wrapper container">
      <div class="left-wrapper">
        <p class="title">加入MES微商城<br/>随享便捷</p>
        <img v-lazy="QRCodeUrl" width="233" height="233">
      </div>
      <div class="right-wrapper">
        <h3 class="title">MES每实 ︱ 用爱与热情重新定义蛋糕</h3>
        <p class="text">
          纵使温室技术与培植技术再怎么发达，也无法取代食物所在地的原汁原味。<br/>
          MES每实在全世界挑选大自然最本真、最质朴的美味食材。所有原材料均来自其最佳产地。<br/>
          这不仅是一种因地制宜，更是顺应，尊重自然的健康之道。土耳其的榛子、新西兰的奇异果、泰国的金枕榴莲、牙买加的摩根船长朗姆酒、还有上品的白兰地……<br/>
          食材在MES每实的意义，不仅是味蕾的满足，更是一种心灵的邂逅。
        </p>
        <p class="support-hotline">订购咨询热线：</p>
        <div class="tel">4000-600-700</div>
        <div class="server-time">服务时间：08:30—20:00 / 至少提前5小时订购 / 北京五环内免费配送</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'shop-descript',
  data() {
    return {
      QRCodeUrl: require('images/ewm.png')
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.shop-descript {
  width: 100%;
  background: $gray2;
  .content-wrapper {
    display: flex;
    width: 100%;
    padding: 70px 0;
    .left-wrapper {
      flex: 1;
      text-align: center;
      .title {
        font-size: 20px;
        margin-bottom: 20px;
      }
    }
    .right-wrapper {
      flex: 1;
      .title {
        font-size: 28px;
      }
      .text {
        margin: 30px 0 25px;
        text-align: left;
        font-size: 14px;
        /*white-space: normal;
        word-break: break-all;*/
      }
      .support-hotline {
        font-size: 14px;
        margin-bottom: 10px;
      }
      .tel {
        padding: 5px 15px;
        width: 300px;
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        border: 1px solid #000;
      }
      .server-time {
        margin-top: 13px;
        font-size: 15px;
      }
    }
  }
}
</style>
