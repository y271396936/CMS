<template>
  <section class="title-line-wrapper">
    <div class="line"></div>
    <div class="title-wrapper">
      <div class="parent-title">{{title.parentTitle}}</div>
      <div class="sub-title">{{title.subTitle}}</div>
    </div>
    <div class="line"></div>
  </section>
</template>

<script>
export default {
  name: 'title-line',
  props: {
    title: {
      type: Object,
      default() {
        return {
          parentTitle: '情感系列',
          subTitle: 'emotional'
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.title-line-wrapper {
  margin: 0 auto;
  padding: 40px 0 30px;
  width: 500px;
  height: 60px;
  text-align: center;
  .line {
    display: inline-block;
    margin-bottom: 30px;
    width: 100px;
    height: 0px;
    border-bottom 1px solid $lineColor;
  }
  .title-wrapper {
    display: inline-block;
    padding: 0 16px;
    .parent-title {
      font-size: 30px;
    }
    .sub-title {
      font-size: 18px;
      color: #999;
    }
  }
}
</style>
