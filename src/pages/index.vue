<template lang="pug">
  section
    .card-wrap(@click="getData")
      card(:text="text")
</template>

<script>
import mixin from '../mixin.js'
import Card from '@/components/Card'

export default {
  mixins: [mixin],
  components: {
    Card
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
      this.$http.get(this.$config.api_url + '/search').then((response) => {
        console.log(response)
      })
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus">
@import "../color"

.card-wrap {
  padding: 10px;
}
</style>
