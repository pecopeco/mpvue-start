<script>
export default {
  watch: {
    missingSkey (missingSkey) {
      // 检测skey是否意外丢失，尝试重新登录
      console.log('skey丢失，重新登录')
      this.doLogin()
    }
  },
  methods: {
    checkSession () {
      // 首次登录
      if (!wx.getStorageSync('token')) {
        console.log('首次登录')
        this.doLogin()
        return
      }
      // 检查 session_key 是否过期
      wx.checkSession({
        success: () => {
          this.setCookie(wx.getStorageSync('token'))
        },
        fail: () => {
          console.log('skey过期，重新登录')
          this.doLogin()
        }
      })
    },
    doLogin () {
      // 获取code，换取skey
      wx.login({
        success: res => {
          this.fetchSkey(res.code)
        },
        fail (err) {
          console.error('login fail: ', err)
        }
      })
    },
    async fetchSkey (code) {
      let data = await this.$http.get(this.config.api_url + '/site/wx', {code: code})
      if (data && data.skey) {
        wx.setStorageSync('token', data.skey)
        this.setCookie(data.skey)
      }
    },
    setCookie (token) {
      this.$http.config.headers = {'cookie': 'PHPSESSION=' + token}
    }
  },
  mounted () {
    this.checkSession()
  }
}
</script>

<style lang="stylus">
@import "./color"

html, body, #app {
  height 100%
  color #555555
}
image {
  width 100%
  height 100%
}
.theme {
  color theme
}
.font-gray {
  color fontGray
}
.bold {
  font-weight bold
}
button {
  display flex
  align-items center
  justify-content center
  width 90%
  height 52px
  padding 0
  margin 0 auto
  line-height 0
  border-radius 8px
  background theme
  color #fff
  &::after {
    border none
  }
}
input {
  background backGray
}
.input-placeholder {
  color fontGray
  font-size 16px
  font-weight normal
}
</style>
