export default {
  components: {
  },
  data () {
    return {
    }
  },
  filters: {
  },
  methods: {
    go (url) {
      wx.navigateTo({
        url: url
      })
    },
    goBack (delta = 1) {
      wx.navigateBack({
        delta
      })
    },
    toast (text, delay) {
      setTimeout(function () {
        wx.showToast({title: text, icon: 'none', duration: delay || 2000})
      }, 100)
    },
    formatTime (time, yearKey = '-', monthKey = '-', dayKey = '',
      hasHour, hasMinute) {
      let date = new Date(time * 1000)
      let y = 1900 + date.getYear()
      let m = '0' + (date.getMonth() + 1)
      let d = '0' + date.getDate()
      let hour = '0' + date.getHours()
      let minute = '0' + date.getMinutes()
      let resultTime = y + yearKey + m.substring(m.length - 2, m.length) + monthKey + d.substring(d.length - 2, d.length) + dayKey
      if (hasHour && !hasMinute) {
        return resultTime + ' ' + hour.substring(hour.length - 2, hour.length)
      } else if (hasHour && hasMinute) {
        return resultTime + ' ' + hour.substring(hour.length - 2, hour.length) + ':' + minute.substring(minute.length - 2, minute.length)
      }
      return resultTime
    },
    postUserInfo (userInfo) {
      this.$http.post(this.$config.api_url + '/v1/profile/profile', {
        info: userInfo
      })
    },
    // 非空验证
    validate (key) {
      if (typeof (key) === 'number') {
        key = key.toString()
      }
      return !key || key.match(/^[ ]+$/)
    },
    // 手机号验证
    isPhone (key) {
      return !(key.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(key))
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    missingSkey () {
      return this.$store.state.missingSkey
    }
  },
  watch: {
  },
  mounted () {
  },
  beforeDestory () {
  }
}
