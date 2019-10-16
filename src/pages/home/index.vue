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
      data: '',
      text: '123'
    }
  },
  methods: {
    async getData () {
      console.log('start get')
      this.$store.dispatch('setUser')
      this.data = await this.$http.get(this.$config.api_url + '/search', {id: 1})
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
