import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '@/components/Movie'
import SearchMovie from '@/components/SearchMovie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/movies/:id',
    name:'Movie',
    props:true,
    component:Movie
  },
  {
    path:'/search/:moviename',
    name:'Search',
    props:true,
    component:SearchMovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router
