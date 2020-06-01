import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

const whiteList = ['/login'] // 不重定向白名单

function checkLogin() {
  return new Promise((resolve, reject) => {
    if (store.getters.isLogin) {
      resolve(true)
    } else {
      // 进行登录操作
      resolve(false)
      console.log('请进行登录操作')
    }
  })
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    checkLogin()
      .then(
        // 已登陆
        routerChanged => {
          // 不许在登陆状态下进登陆页面
          if (to.path === '/login') {
            next({
              path: '/home'
            })
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
          } else {
            if (routerChanged) {
              next()
            } else {
              next('/login')
              NProgress.done()
            }
          }
        }
      )
      .catch(
        // 未登陆
        () => {
          next('/login')
          NProgress.done()
        }
      )
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
