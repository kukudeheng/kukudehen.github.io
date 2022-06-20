import Vue from 'vue'
import VueRouter from 'vue-router'
//导入
import {getToken} from '../jieshou/token'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  },

  {
    path: '/',
    name: 'layout',
    component: () => import('../views/Layout/index.vue'),
    children:[
      {
        path:'',
        redirect:'home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Layout/Home/index.vue'),
      },
      {
        path: 'hero',
        name: 'hero',
        component: () => import('../views/Layout/Hero/index.vue'),

      },
      {
        path: 'joke',
        name: 'joke',
        component: () => import('../views/Layout/Joke/index.vue'),
      },
      {
        path: 'HeroDetail/:id?',
        name: 'HeroDetail',
        component: () => import('../views/Layout/HeroDetail/index.vue'),
      },
    ]
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: () => import('../views/NotFound/index.vue')
  },
  {
    path: '*',
    redirect: '/notfound'
  },
  {
    path:'/login',
    component: () => import('../views/NotFound/index.vue')
  }
]

const router = new VueRouter({
  routes
})

//添加白名单

const  Whitelist=['/login','/notdound']

router.beforeEach((to,from,next)=>{
    if(Whitelist.includes(to.path)===true){
      //如果有就放行
      next()
    }else{
      //判断是否有token值
      // if(localStorage.getItem('token')){
        if(getToken()){
        //有就放行
        next()
      }else{
        //没有就重新登录
        alert('请先登录')
        //回到登录页面
        next('/login')
      }
    }
}) 

export default router
