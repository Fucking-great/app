#初始化项目

vue create 项目名称 

public 放置静态资源（图片），打包是原封不动打包到dist文件中

#scr 组件文件夹
```
    assets： 放置一些静态资源，放共用的文件
    components： 放置非路由组件
    views/pages： 路由组件
    router:      路由
    store:       vuex状态管理
    babel.config.js: 配置文件
    package.json:   项目的依赖文件
``` 
###package.json 配置自动打开浏览器
```
"scripts": {
    
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

```
###关闭Eslint
```
创建vue.config.js文件
    module.exports = {
        // 关闭eslint
        lintOnSave: false
    }
```
###配置src别名 @===src
```
创建jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules","dist"]
}
```
###路由组件搭建 vue-router
```
Home、Search、Login、Register
    components: 非路由组件
    views/pages： 路由组件
```
####路由组件与非路由组件区别
```
1、路由组件一般放在pages/views文件之下,非路由组件放在components之下
2、路由组件一般需要在router文件之下index进行注册,然后在main.js引用,非路由引用方式是以标签方式使用
3、注册玩路由，不管路由与非路由组件身上都有$route、$router属性

$route：一般是获取路由[路径,query,parms等]
$router: 一般进行编程式导航进行路由跳转[push/replace]
```
####路由的跳转
```
两种形式：
    1、声明式导航router-link
    2、编程式导航push/replace，进行路由跳转
        -声明式导航能做的，编程式导航都能做
            但是编程式导航除了可以进行路由跳转，还可以做一些其他业务逻辑
```
###Footer组件显示与隐藏
```
Footer组件：在Home、Search显示，在Login、Register不显示
显示或隐藏组件： v-if/v-show
```
####根据组件上的$route
```
$route获取当前路由的信息，通过路由路径判断显示或者隐藏
```
####配置路由是可以添加路由元信息
```
配置路由是可以添加路由元信息,mate,路由需要配置对象，key不能乱写
```
###路由传参
####路由跳转的几种方式
```
比如A-B
申明式导航：router-link (to="/xxx")
编程式导航: 利用组件的实例$router.push/replace方法，可以实现路由跳转（可以书写一些自己的业务）
params参数：属于路径当中的一部分，需要注意，在配置路由时，需要占位
query参数：不属于路径中的一部分，类属于ajax中的quertString /home?k=v&kv=,不需要占位
```
###axios二次封装
```
XMLHttprequest,fatch,JQ,axios
   -为什么二次封装axios
    请求拦截器、响应拦截器，请求拦截器可以在发请求之前可以处理一些业务、当服务器数据响应返回以后，可以处理一些业务
```
###接口同意管理
```
项目很小可以在组件的生命周期函数中发起请求
```
###跨域
```
    // 代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
                // pathRewrite: { '^/api': '' },
            },
        },
    },
```

###进度条
```
:nprogress进度条使用

```