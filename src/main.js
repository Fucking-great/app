import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router"
// 注册全局组件
import TypeNav from "@/pages/Home/TypeNav"

Vue.component('TypeNav', TypeNav)
Vue.config.productionTip = false

//测试
import {reqCategoryList} from "@/api";
reqCategoryList();

new Vue({
    render: h => h(App),
    // 配置路由
    router
}).$mount('#app')
