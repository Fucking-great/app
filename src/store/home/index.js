import {reqCategoryList} from "@/api"
// Home模块仓库
const state = {
    //state中数据默认初始值不能乱写，服务器返回对象，根据服务器返回初始值啦定
    categoryList: {},
}

const mutations = {
    CATEGORYLIST (state, categoryList) {
        state.categoryList = categoryList
    }
}

const actions = {
    // 通过api接口里面的接口函数，向服务器发请求，获取服务器的数据
    async categoryList ({commit}) {
        let result = await reqCategoryList();
        if (result.code === 200){
            commit("CATEGORYLIST",result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}