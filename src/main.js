import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
// 全域載入 jquery
window.$ = $


// bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'

// 引入 cookie 設定
import { setCookie, getCookie, delCookie } from './methods/global/cookie'
// 引入切換 loading
import { switchLoading } from './methods/global/loading'

const app = createApp(App)

app.use(store)
app.use(router)

// 全域使用方法
app.config.globalProperties.$methods = {
    setCookie, getCookie, delCookie, switchLoading
}

app.mount('#app')

