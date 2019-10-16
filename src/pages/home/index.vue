<template lang="pug">
  section
    .card-wrap(@click="getData")
      card(:text="text")
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },
  data () {
    return {
      text: '123'
    }
  },
  methods: {
    getData () {
      console.log('start get')
      this.$store.dispatch('fetchUserInfo')
      this.$http.get(this.$config.api_url + '/search').then((res) => {
        console.log(res)
      })
    }
  },
  computed: {
  },
  mounted () {
    this.getData()
    console.log(this.formatTime(1566274478, '/', '/', '', true, true))
  }
}
</script>

<style scoped lang="stylus">
@import "~@/color"

.card-wrap {
  padding 10px
}
</style>
