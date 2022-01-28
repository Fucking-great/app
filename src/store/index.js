import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入
import home from "./home"
import login from "./login"
import register from "./register"
import search from "./search"

// 向外暴露Store
export default new Vuex.Store({
    modules: {
        home,
        login,
        register,
        search
    }
})