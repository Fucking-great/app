// 统一管理api接口
import requests from "./request";

import mockRequests from "./mockAjax"
// 三级分类接口
// /api/product/getBaseCategoryList     get     无参数
// 发送请求axios返回Promise对象
export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',method: 'get'})

export const reqBannerList = () => mockRequests.get('/banner')
