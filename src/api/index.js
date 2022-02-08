// 统一管理api接口
import requests from "./request";

import mockRequests from "./mockAjax"

// 三级分类接口
// /api/product/getBaseCategoryList     get     无参数
// 发送请求axios返回Promise对象
export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',method: 'get'})

// 获取轮播图
export const reqBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')


