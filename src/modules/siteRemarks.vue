<template>
  <section class="site-remarks">
    <div class="back-top" @click="scrollTop()">
      <i class="icon"></i>
      <p class="text">
        返回顶部<br/>
        BACK TO TOP
      </p>
    </div>
    <div class="footer-record-logo">
      <i class="icon"></i>
      <p class="text">京ICP备XXXXXXXXXX号 该网站为个人练习的，若有侵犯版权请联系QQ：2458767808 删掉。</p>
    </div>
  </section>
</template>

<script>
import {scrollToEle} from 'assets/js/domOperate'
import {slowAnimate} from 'assets/js/util'

export default {
  name: 'site-remarks',
  methods: {
    scrollTop() {
      slowAnimate(0, scrollToEle().top, (step) => {
        if (document.compatMode === 'CSS1Compat' && document.documentElement.scrollTop !== 0) {
          // QQ浏览器值等于0
          document.documentElement.scrollTop = step
        } else if (document.body.scrollTop && document.body.scrollTop !== 0) {
          // google等于0
          document.body.scrollTop = step
        }
      }, 10)
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.site-remarks {
  width: 100%;
  padding: 20px 0 60px;
  text-align: center;
  .back-top {
    cursor: pointer;
    .icon {
      display: inline-block;
      width: 31px;
      height: 10px;
      font-size: 36px;
      background: url("~images/bg-icon.png") -138px -21px no-repeat;
    }
    .text {
      font-size: 12px;
      color: #5a5858;
    }
  }
  .footer-record-logo {
    .icon {
      display: block;
      width: 125px;
      height: 44px;
      margin: 50px auto 0;
      font-size: 36px;
      background: url("~images/bg-icon.png") 0 -35px no-repeat;
    }
    .text {
      margin-top: 35px;
      padding-top: 20px;
      color: #434544;
      border-top: 1px solid #ccc;
    }
  }
}
</style>
