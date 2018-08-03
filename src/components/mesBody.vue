<template>
  <section class="mes-body">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'mes-body'
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.mes-body {
  overflow: hidden;
}
</style>
