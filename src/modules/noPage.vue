<template>
  <section class="no-page-404">
    <img class="Img404" :src="imgUrl" height="500">
  </section>
</template>

<script>
export default {
  name: 'no-page',
  data() {
    return {
      imgUrl: require('images/404.jpg')
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.no-page-404 {
  padding: 20px 0;
  overflow: hidden;
  border: 1px solid #b6bab8;
  .Img404 {
    display: block;
    margin: 0 auto;
  }
}
</style>
