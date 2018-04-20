import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/index',
      // 加载异步组件指在需要的时候，才去下载那个组件而不是无论需要与否，都直接下载到本地。
      // 假如一个页面有100个组件，用户访问这个页面时，显然不需要将所有组件都下载到本地，例如他刚进入这个页面时，只需要访问header、login、footer这3个组件。
      component: resolve => require(['@/components/HelloWorld.vue'], resolve),
      meta: {
        title:'HelloWorld'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/index.vue'], resolve),
      meta: {
        title: '首页'
      }
    }, 
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login.vue'], resolve),
      meta: {
        title: '登录'
      }
    }, 
    {
      path: '/center',
      name: 'center',
      component: resolve => require(['@/components/center.vue'], resolve),
      meta: {
        title:'个人中心',
        requireAuth: true
      },
      children: [
        {
          path: 'center_info',
          name: 'center_info',
          component: resolve => require(['@/components/center_info.vue'], resolve),
          meta: {
            title: '账户管理'
          }
        }
      ]
    }
  ]
})

// 页面刷新时，vuex 的状态就消失了，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit('updateToken', window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
  // console.log(to)
  // 设置title
  if (to.meta.title) {
    store.commit('updateTitle', to.meta.title)
  }

  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {  
      store.commit('updateTitle', '登录')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
  
})




export default router
