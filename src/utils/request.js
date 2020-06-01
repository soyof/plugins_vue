import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '../store'
import qs from 'qs'

axios.defaults.withCredentials = true
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15e3 // 请求超时时间
})

// // request拦截器
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config;
//   },
//   error => {
//     // Do something with request error
//     console.log(error); // for debug
//     Promise.reject(error);
//   }
// );

// response拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 3e3
      })

      if (Number(res.code) === 412) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          // 处理逻辑
        })
      }
      return Promise.reject('error')
    }
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5e3
    })
    return Promise.reject(error)
  }
)

export function get(api, data) {
  return service({
    url: api,
    method: 'GET',
    params: data
  })
}

export function post(api, params, data) {
  return service({
    url: api,
    method: 'POST',
    params: params,
    data: data
  })
}

export function upload(api, params, data) {
  return service({
    url: api,
    method: 'POST',
    params: params,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function post_form(api, data) {
  return service({
    url: api,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  })
}

export function wait(t) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve()
    }, t)
  })
}

export default service
