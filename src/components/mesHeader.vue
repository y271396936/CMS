<template>
<section class="mes-header">
  <header class="header container">
    <div class="icon-div">
      <a href="/index.html" class="icon-logo"></a>
    </div>
    <mes-nav class="mes-nav"></mes-nav>
    <ul class="cart-and-login">
      <li class="short-cart">
        <a href="/views/shopCart.html" class="icon-cart"></a>
      </li>
      <li class="logo">
        <a href="/views/login.html">登录</a>
      </li>
    </ul>
  </header>
</section>
</template>

<script>
import MesNav from 'modules/mesNav'

export default {
  name: 'mes-header',
  components: {
    MesNav
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"
.mes-header {
  height: 100px;
  overflow: hidden;
  background: $white;
  .header {
    display: flex;
    line-height: 100px;
    font-size: 16px;
    .icon-div {
      flex: 1;
      padding-top: 34px;
      cursor: pointer;
      .icon-logo {
        display: block;
        width: 88px;
        height: 31px;
        background: url("~images/bg-icon.png") 0 0 no-repeat;
      }
    }
    .mes-nav {
      flex: 8;
    }
    .cart-and-login {
      flex: 1;
      display: flex;
      li {
        flex: 1;
        cursor: pointer;
      }
      .icon-cart {
        display: inline-block;
        width: 19px;
        height: 17px;
        background: url("~images/bg-icon.png") -114px -14px no-repeat;
      }
    }
  }
}
</style>
