<template>
  <nav class="mes-nav" ref="mesNav">
    <a href="/index.html">首&nbsp;页</a>
    <a href="/views/cake.html">蛋&nbsp;糕</a>
    <a href="/views/coffee.html">下午茶</a>
    <a href="/views/surround.html">生日周边</a>
    <a href="/views/about.html">关于MES</a>
  </nav>
</template>

<script>
import {mapMutations} from 'vuex'
import {domAttribute} from 'assets/js/domOperate'

export default {
  name: 'mes-nav',
  mounted() {
    this.setNavClass()
  },
  methods: {
    setNavClass() {
      let currentPath = window.location.pathname
      let navArr = this.$refs.mesNav.children
      if (currentPath === '/') {
        domAttribute(navArr[0], 'class', 'active')
      }
      for (let item of navArr) {
        if (item.pathname === currentPath) {
          domAttribute(item, 'class', 'active')
        }
      }
    },
    ...mapMutations({
      // setNavPathname: 'SET_NAV_PATHNAME'
    })
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .mes-nav{
    margin-left: 200px;
    height: 100%;
    font-size: 0;
    a {
      display: inline-block;
      padding: 0 38px;
      font-size: 16px;
      &.active {
        font-weight: 700;
        color: #d83a91;
        background: #f9fafb;
      }
      &:hover {
        background: #f9fafb;
      }
    }
  }
</style>
