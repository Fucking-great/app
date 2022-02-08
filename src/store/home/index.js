import {reqCategoryList, reqBannerList, reqFloorList} from "@/api"
// Home模块仓库
const state = {
    //state中数据默认初始值不能乱写，服务器返回对象，根据服务器返回初始值啦定
    categoryList: [],
    // 轮播图
    bannerList: [],
    floorList: []
}

const mutations = {
    CATEGORYLIST (state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNER (state, bannerList) {
        state.bannerList = bannerList
    },
    FLOOR (state, floorList) {
        state.floorList = floorList
    }
}

const actions = {
    // 通过api接口里面的接口函数，向服务器发请求，获取服务器的数据
    async categoryList ({commit}) {
        let result = await reqCategoryList();
        if (result.code === 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    // 获取首页轮播图
    async getBannerList ({commit}){
        let result = await reqBannerList();
        if(result.code == 200){
            commit("GETBANNER", result.data)
        }
    },
    // 获取floor数据
    async getFloorList ({commit}) {
        let result = await reqFloorList()
        if(result.code == 200){
            commit("FLOOR", result.data)
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