import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/front_page/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EmailOTP from '../views/EmailOTP.vue'
import Review from '../views/admin/Review.vue'
import Members from '../views/admin/Members.vue'

import Messages from '../views/admin/Messages.vue'
import Notifications from '../views/admin/Notifications.vue'
import Packages from '../views/admin/Packages.vue'
import Payouts from '../views/admin/Payouts.vue'
import Resources from '../views/admin/Resources.vue'
import Settings from '../views/admin/Settings.vue'
import Subscriptions from '../views/admin/Subscriptions.vue'
import Leads from '../views/admin/Leads.vue'

import UserDashboard from '../views/users/Dashboard.vue'
import UserMessages from '../views/users/Messages.vue'
import UserLeads from '../views/users/MyLeads.vue'
import UserSubscriptions from '../views/users/MySubscriptions.vue'
import UserNotifications from '../views/users/Notifications.vue'
import UserProfile from '../views/users/Profile.vue'
import UserResources from '../views/users/Resources.vue'
import UserTransactions from '../views/users/Transactions.vue'
import UserWallets from '../views/users/Wallets.vue'



import ComingSoon from '../views/admin/ComingSoon.vue'
import AdminDashboard from '../views/admin/Dashboard.vue'
import Dashboard from '../views/layouts/Dashboard.vue'
import Fullwidth from '../views/layouts/Fullwidth.vue'

import store from '../store'

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
    path: '/state_officer',
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
    path: '/leads',
    name: 'Leads',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Leads  
        }
      ]
  },

  {
    path: '/messages',
    name: 'Messages',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Messages  
        }
      ]
  },

  {
    path: '/notifications',
    name: 'Notifications',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Notifications  
        }
      ]
  },

  {
    path: '/packages',
    name: 'Packages',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Packages  
        }
      ]
  },

  {
    path: '/payouts',
    name: 'Payouts',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Payouts  
        }
      ]
  },

  {
    path: '/resources',
    name: 'Resources',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Resources  
        }
      ]
  },

  {
    path: '/settings',
    name: 'Settings',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Settings,
         
          beforeEnter: () => {
            // ...
            if (store.state.auth.token) {
              console.log('you can go')
            }else{

              router.push('/login')

            }
      

          }  
        }
      ]
  },

  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: Dashboard,
      children: [
        {
          path: '',
          component: Subscriptions  
        }
      ]
  },



  {
    path: '/userx',
    name: 'UserDashboard',
    component: Dashboard,
      children: [
        {
          path: '',
          component: UserDashboard  
        }
      ]
  },

  {
    path: '/user/',
    name: 'UserMessages',
    component: Dashboard,
      children: [
        {
          path: 'messages',
          component: UserMessages  
        }
      ]
  },

  {
    path: '/user/',
    name: 'UserLeads',
    component: Dashboard,
      children: [
        {
          path: 'leads',
          component: UserLeads  
        }
      ]
  },

  {
    path: '/user/',
    name: 'UserSubscriptions',
    component: Dashboard,
      children: [
        {
          path: 'subscriptions',
          component: UserSubscriptions  
        }
      ]
  },

  {
    path: '/user/',
    name: 'UserNotifications',
    component: Dashboard,
      children: [
        {
          path: 'notifications',
          component: UserNotifications  
        }
      ]
  },

  {
    path: '/user/',
    name: 'UserProfile',
    component: Dashboard,
      children: [
        {
          path: 'profile',
          component: UserProfile  
        }
      ]
  },

  {
    path: '/user/',
    name: 'UserResources',
    component: Dashboard,
      children: [
        {
          path: 'resources',
          component: UserResources  
        }
      ]
  },

  {
    path: '/user/',
    name: 'UserTransactions',
    component: Dashboard,
      children: [
        {
          path: 'transactions',
          component: UserTransactions  
        }
      ]
  },

  {
    path: '/user/',
    name: 'UserWallet',
    component: Dashboard,
      children: [
        {
          path: 'wallet',
          component: UserWallets  
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
