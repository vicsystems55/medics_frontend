import AdminDashboard from '../views/admin/Dashboard'
import AdminNotifications from '../views/admin/Notifications'
import AdminAccountManagement from '../views/admin/AccountManagement.vue'
import AdminBusinessProfiles from '../views/admin/BusinessProfiles'
import AdminDemandNotices from '../views/admin/DemandNotices'
import AdminStates from '../views/admin/States'
import Dashboard from '../views/layouts/Dashboard.vue'


import router from '../router'

import { useToast } from 'vue-toastification'

const toast = useToast()





export default [
 {
   path: '/Admin/',
   name: 'Admin',
   component: Dashboard,
    children: [
        {
            path: 'Dashboard',
            component: AdminDashboard
        },

        {
            path: 'Notifications',
            component: AdminNotifications
        },

        {
            path: 'AccountManagement',
            component: AdminAccountManagement
        },

        
        {
            path: 'BusinessProfiles',
            component: AdminBusinessProfiles
        },

        
        {
            path: 'DemandNotices',
            component: AdminDemandNotices
        },

        
        {
            path: 'States',
            component: AdminStates
        },
    ],
    beforeEnter: () => {
        // ...
        if (localStorage.getItem('user_role') == '6') {
            console.log('yes')
           
        }else{
            console.log('no board')
            router.push({
                path: '/login',
                replace: true
              });
            toast.warning('Session Expired');

        }
      }

 },



]