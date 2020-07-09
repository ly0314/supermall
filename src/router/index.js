import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
     {
      path:'',
        redirect:'/home'
     },
    { 
      path: '/home',
      component: () => import('@/views/home/Home.vue')
    },
    { 
      path: '/partition',
      component: () => import('@/views/partition/Partition.vue')
    },
    { 
      path: '/shopcar',
      component: () => import('@/views/shopcar/Shopcar.vue')
    },
    { 
      path: '/mine',
      component: () => import('@/views/mine/Mine.vue')
    }

  ]
const router = new VueRouter({
 // mode: 'history',
  routes
})


export default router
