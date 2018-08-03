<template>
  <div class="banner">
    <img :src="imgUrl" width="100%">
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    imgUrl: {
      type: String,
      default: require('images/banner0.jpg')
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.banner {
  width: 100%;
  overflow: hidden;
  img {
    display: block;
  }
}
</style>
