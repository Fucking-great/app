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

// console.log("------",vueRouter.prototype)
// 重写push/replace
let originPush = vueRouter.prototype.push;
let originReplace = vueRouter.prototype.replace

// 第一个参数是，告诉push方法，往哪跳转（传递哪些参数）
vueRouter.prototype.push = function (location, resolve,reject) {
    if (resolve && reject){
        // call/apply区别
        // 相同点，都可以调用一次函数，都可以篡改函数的上下文一次
        // 不同点,call与apple传递参数，call传递用逗号分隔，apply方法执行，传递数组
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,() =>{}, ()=>{})
    }
}
vueRouter.prototype.replace = function (location,resolve, reject) {
    if (resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else {
        originReplace.call(this,location,() => {}, () => {})
    }
}

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
            path: "/search/:keyword",
            component: Search,
            meta: {show: true},
            name: 'search'

        }
    ]
})