import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/home'
import Category from '@/container/category'
import List from '@/container/list'
import Mine from '@/container/mine'
import Search from '@/container/search'
import Singer from '@/container/search'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:"active",
  routes: [
    {
      path:'*',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    }
  ]
})
