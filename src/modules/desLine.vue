<template>
  <section class="des-line">
    <div class="text first">北京五环内免费配送</div>
    <div class="flag">|</div>
    <div class="text">请至少提前5小时订购</div>
  </section>
</template>

<script>
export default {
  name: 'des-line'
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.des-line {
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #e5e5e6;
  font-size: 16px;
  .text {
    flex: 1;
    font-weight: 600;
    &.first {
      text-align: right;
    }
  }
  .flag {
    padding: 0 20px;
    text-align: center;
    font-weight: 600;
  }
}
</style>
