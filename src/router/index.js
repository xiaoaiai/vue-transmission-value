import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/views/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parent',
      component: Parent
    }
  ]
})
