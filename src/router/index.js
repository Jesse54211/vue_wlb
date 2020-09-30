import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Activities from '../views/Activities.vue'
import Publish from '../views/Publish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Activities',
    name:'Activities',
    component: Activities
  },
  {
    path:'/publish',
    name:'Publish',
    component: Publish
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
