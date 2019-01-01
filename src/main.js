import Vue from 'vue'
import App from './App'
import store from './store'
import config from './config'
import Fly from 'flyio/dist/npm/wx'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$config = config
Vue.prototype.$http = new Fly()

const app = new Vue(App)
app.$mount()
