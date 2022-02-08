import {reqGetSearchInfo} from "@/api";

// Search小仓库

const state = {
    // 仓库初始状态
    searchList: {}
}
const mutations = {
    GETSEARCHLIST (state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList ({commit},params= {}){
        let result = await reqGetSearchInfo(params)
        if (result.code == 200){
            commit("GETSEARCHLIST", result.data)
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