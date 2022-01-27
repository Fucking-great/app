// 配置路由 引入vue Or vur-router
import Vue from 'vue'
import vueRouter from 'vue-router'

// 使用插件
Vue.use(vueRouter)

// 引入路由组件
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
// 配置路由
export default new vueRouter({
    routes: [
        // 项目启动打开定向页面
        {
            path: "*",
            redirect: "/home",
        },
        {
            path: "/home",
            component: Home,
            meta: {show: true}
        },
        {
            path: "/login",
            component: Login,
            meta: {show: false}
        },
        {
            path: "/register",
            component: Register,
            meta: {show: false}
        },
        {
            path: "/search",
            component: Search,
            meta: {show: true}

        }
    ]
})