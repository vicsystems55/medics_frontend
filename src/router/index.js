import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Review from '../views/admin/Review.vue'
import Members from '../views/admin/Members.vue'
import AdminDashboard from '../views/admin/Dashboard.vue'
import Dashboard from '../views/layouts/Dashboard.vue'
import Fullwidth from '../views/layouts/Fullwidth.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/register',
    name: 'Register',
    component: Fullwidth,
      children: [
        {
          path: '',
          component: Register,
        }
      ]
  },

  {
    path: '/login',
    name: 'Login',
    component: Fullwidth,
      children: [
        {
          path: '',
          component: Login,
        }
      ]
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
      children: [
        {
          path: '',
          component: AdminDashboard  
        }
      ]
  },

  
  {
    path: '/reviews',
    name: 'Reviews',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Review  
        }
      ]
  },

  {
    path: '/members',
    name: 'Member',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Members  
        }
      ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
