import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/front_page/Home.vue'
import Login from '../views/Login.vue'
import EmailReset from '../views/EmailReset.vue'
import Register from '../views/Register.vue'
import EmailOTP from '../views/EmailOTP.vue'
import Enumeration from '../views/Enumeration.vue'
import EnumerationSuccess from '../views/EnumerationSuccess.vue'


import ComingSoon from '../views/admin/ComingSoon.vue'

import Dashboard from '../views/layouts/Dashboard.vue'
import Fullwidth from '../views/layouts/Fullwidth.vue'

import LGATaxOfficer from '../router/LGATaxOfficer'
// import BoardTaxOfficer from '../router/BoardTaxOfficer'
// import SystemSupport from '../router/SystemSupport'
import BoardAdmin from '../router/BoardAdmin'
// import ZonalAdmin from '../router/ZonalAdmin'
// import AreaAdmin from '../router/AreaAdmin'
// import Enumerators from '../router/Enumerator'
import Admin from '../router/Admin'

// import store from '../store'

const routes = [

  ...LGATaxOfficer,
  // ...BoardTaxOfficer,
  // ...SystemSupport,
  ...BoardAdmin,
  // ...ZonalAdmin,
  // ...AreaAdmin,
  // ...Enumerators,
  ...Admin,

  {
    path: '/',
    name: 'Home',
    component: Fullwidth,
      children: [
        {
          path: '',
          component: Login,
        }
      ]
  },

  {
    path: '/enumeration',
    name: 'Enumeration',
    component: Fullwidth,
      children: [
        {
          path: '',
          component: Enumeration,
        }
      ]
  },

  {
    path: '/enumeration_success',
    name: 'EnumerationSuccess',
    component: Fullwidth,
      children: [
        {
          path: '',
          component: EnumerationSuccess,
        }
      ]
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
    path: '/EmailReset',
    name: 'EmailReset',
    component: Fullwidth,
      children: [
        {
          path: '',
          component: EmailReset,
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


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
