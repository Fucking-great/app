import axios from "axios";
//  引入进度条 start开始、done结束
import nprogress from "nprogress"
// 进度条样式
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: '/api',
    timeout:  5000,
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    // config: 配置对象，对象里面有一个很重要属性，header请求头
    // 进度条开始
    nprogress.start()
    return config;
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数，服务器响应数据接收后，响应拦截器可以监测到
    // 进度条结束
    nprogress.done()
    return res.data
}, (error) => {
    // 失败的回调函数
    console.log(error)
    // return Promise.object(new Error('faile'))
})

// 向外暴露
export default requests;