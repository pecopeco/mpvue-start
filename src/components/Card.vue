<template lang="pug">
  .card
    .text {{text}}
    image(mode="scaleToFill" src="/static/assets/logo.png")
</template>

<script>
export default {
  props: {
    text: ''
  }
}
</script>

<style scoped lang="stylus">
@import "../color"

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  image {
    width: 100px;
    height: 100px;
  }
}
</style>
