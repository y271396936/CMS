<template>
  <section class="title-desc container">
    <div class="title-and-line">
      <div class="line"></div>
      <div class="title">{{title}}</div>
      <div class="line"></div>
    </div>
    <div class="paragraph">
      <p class="text" :class="{'red': item.isRed===1}" v-for="(item, index) in textArr" :key="index">{{item.text}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'title-desc',
  props: {
    title: {
      type: String,
      default: ''
    },
    textArr: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.title-desc {
  padding: 30px 0 50px;
  background: $white;
  .title-and-line {
    display: flex;
    margin-bottom: 20px;
    heigth: 22px;
    .line {
      flex: 1;
      height: 0;
      margin-top: 11px;
      border-bottom: 1px solid #adaeaf;
    }
    .title {
      padding: 0 20px;
      height: 22px;
      line-height: 22px;
      font-size: 20px;
      color: #5a5858;
    }
  }
  .paragraph {
    .text {
      text-align: center;
      font-size: 15px;
      &.red {
        color: #d6184e;
      }
    }
  }
}
</style>
