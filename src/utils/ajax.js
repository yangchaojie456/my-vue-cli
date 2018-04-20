/**
 * @author yangCJ
 * @description 通用请求配置，添加状态拦截
 */
import axios from 'axios'
import Interface from '@/utils/interface'
import store from '@/store/store'
import router from '@/router/router'
import tool from '@/utils/tool'
// axios 配置
axios.defaults.timeout = 10000

let baseURL = ''
// let baseURL = 'http://localhost:3000'
axios.defaults.baseURL = baseURL

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.status == 401 || response.data.status == 403) {
      // 401 清除token信息并跳转到登录页面
      store.commit('deleteToken')
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
    }
    return response
  },
  // 我们接口规定的所有状态都是200 在里面新加status 用于判断状态
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit('deleteToken')
          router.replace({
            path: 'login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  })
// type 为blob 可以请求文件流
function _ajax(url, params, type) {
  var requestUrl = Interface.map[url];
  return axios({
    method: 'post',
    url: requestUrl,
    data: tool.encryption(params),
    responseType: type || 'json',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
}
export default _ajax
