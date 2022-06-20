import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    children:[
      {
        path:'/index',
        name:'index',
        component:()=>import('../views/index.vue')
        
      },
      {
        path:'/menu',
        name:'menu',
        component:()=>import('../views/sys/Menu.vue')
        
      },
      {
        path:'/role',
        name:'role',
        component:()=>import('../views/sys/Role.vue')
        
      },
      {
        path:'/user',
        name:'user',
        component:()=>import('../views/sys/User.vue')
        
      },

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
