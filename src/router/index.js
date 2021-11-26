import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/front_page/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EmailOTP from '../views/EmailOTP.vue'


import ComingSoon from '../views/admin/ComingSoon.vue'

import Dashboard from '../views/layouts/Dashboard.vue'
import Fullwidth from '../views/layouts/Fullwidth.vue'

// import LGATaxOfficer from '../router/LGATaxOfficer'
// import BoardTaxOfficer from '../router/BoardTaxOfficer'
// import SystemSupport from '../router/SystemSupport'
// import BoardAdmin from '../router/BoardAdmin'
// import ZonalAdmin from '../router/ZonalAdmin'
// import AreaAdmin from '../router/AreaAdmin'
// import Enumerators from '../router/Enumerator'
import Admin from '../router/Admin'

// import store from '../store'

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
    path: '/verify',
    name: 'EmailOTP',
    component: Fullwidth,
      children: [
        {
          path: '',
          component: EmailOTP,
        }
      ]
  },


  {
    path: '/coming-soon',
    name: 'ComingSoon',
    component: Dashboard,
      children: [
        {
          path: '',
          component: ComingSoon  
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
  },

  // ...LGATaxOfficer,
  // ...BoardTaxOfficer,
  // ...SystemSupport,
  // ...BoardAdmin,
  // ...ZonalAdmin,
  // ...AreaAdmin,
  // ...Enumerators,
  ...Admin
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
