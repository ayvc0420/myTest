import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Demo1111 from '../views/Demo1111.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/Demo1111',
    name:'Demo1111',
    component: () => import(/* webpackChunkName: "Demo1111" */ '../views/Demo1111.vue'),
    children:[
      {
        path:'text',
        name:'Demo1111-text',
        component:() => import(/* webpackChunkName: "Demo1111-text" */ '../views/Demo1111-text.vue')
      },
      {
        path:'web',
        name:'Demo1111-web',
        component:() => import(/* webpackChunkName: "Demo1111-web" */ '../views/Demo1111-web.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
