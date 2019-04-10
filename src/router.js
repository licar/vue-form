import Vue from 'vue'
import Router from 'vue-router'
import Add from './views/Add.vue'
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: List
    },
    {
      path: '/add',
      name: 'AddUser',
      component: Add
    }
  ]
})
