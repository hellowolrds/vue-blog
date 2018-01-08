import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Detail from '../components/Detail.vue'
import Blog from '../components/Blog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
