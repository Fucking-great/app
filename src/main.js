import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router"
// 引入vuex
import store from '@/store'
// 注册全局组件
import TypeNav from "@/components/TypeNav"
// 引入mock
import "@/mock/mockServer";
// 轮播样式
import "swiper/css/swiper.css"
import "swiper/js/swiper.js"

Vue.component('TypeNav', TypeNav)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 配置路由
    router,
    store
}).$mount('#app')
