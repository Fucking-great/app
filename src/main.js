import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router"
// 引入vuex
import store from '@/store'
// 注册全局组件
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"

// 引入mock
import "@/mock/mockServer";
// 轮播样式
import "swiper/css/swiper.css"
import "swiper/js/swiper.js"

// 全局组件，第一个参：数组件名    第二参数：是组件
Vue.component('TypeNav', TypeNav)
Vue.component(Carousel.name, Carousel)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 配置路由
    router,
    store
}).$mount('#app')
