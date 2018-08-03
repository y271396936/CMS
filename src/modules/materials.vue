<template>
  <ul class="materials container">
    <li class="item" v-for="(item, index) in materials" :key="index">
      <img v-lazy="item.imgUrl" width="376" height="262">
      <p class="desc" v-html="item.desc"></p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'materials',
  props: {
    materials: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.materials {
  font-size: 0;
  .item {
    display: inline-block;
    margin-right: 36px;
    width: 376px;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  .desc {
    text-align: center;
    font-size: 18px;
    color: $fontColor1;
  }
}
</style>
