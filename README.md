# my-vue-cli

> my vue cli

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 脚手架功能

>> 本脚手架在vue-cli 的基础上扩展了一些功能

1. 结合axios 拦截器 做到的接口授权验证功能，没有token或token不正确则跳转登录页
2. 结合vue-router 实现前台页面间未登录状态的拦截 
3. 使用vuex 保存token方便存取（使用localstorage持久化）
4. 使用Hmacsha256 做参数 摘要验证，识别请求伪造
5. 结合mint-ui 做UI框架，适用快速开发
6. 提供一些工具方法 saveAsFile（文件流保存为文件）downloadImg（下载图片）myBrowser（判断当前浏览器）isMobile（判断手机端）formatDate（格式化时间）