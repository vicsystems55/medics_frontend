import BoardAdminDashboard from '../views/BoardAdmin/Dashboard'
import BoardAdminNotifications from '../views/BoardAdmin/Notifications'

import BoardAdminAccountManagement from '../views/BoardAdmin/AccountManagement'
import BoardAdminAssessements from '../views/BoardAdmin/Assessments'
import BoardAdminBusinessProfiles from '../views/BoardAdmin/BusinessProfiles'
import BoardAdminDemandNotices from '../views/BoardAdmin/DemandNotices'
import BoardAdminSettings from '../views/BoardAdmin/Settings'

import BoardAdminAssessment from '../views/BoardAdmin/Assessment'
import BoardAdminDemandNotice from '../views/BoardAdmin/DemandNotice'



import xDashboard from '../views/layouts/Dashboard.vue'
import { useToast } from 'vue-toastification'

import router from '../router'

const toast = useToast()




export default [
 {
   path: '/BoardAdmin/',
   name: 'BoardAdmin',
   component: xDashboard,
    children: [
        {
            path: 'Dashboard',
            component: BoardAdminDashboard
        },


        {
            path: 'Notifications',
            component: BoardAdminNotifications
        },

        {
            path: 'AccountManagement',
            component: BoardAdminAccountManagement
        },

        {
            path: 'Assessements',
            component: BoardAdminAssessements
        },

        {
            name: 'BoardAdminAssessment',
            path: 'Accessment/:id',
            component: BoardAdminAssessment
        },

        {
            name: 'BoardAdminDemandNotice',
            path: 'DemandNotice/:id',
            component: BoardAdminDemandNotice
        },

        {
            path: 'BusinessProfiles',
            component: BoardAdminBusinessProfiles
        },

        {
            path: 'DemandNotices',
            component: BoardAdminDemandNotices
        },

        {
            path: 'Settings',
            component: BoardAdminSettings
        },
    ],
    beforeEnter: () => {
        // ...
        if (localStorage.getItem('user_role') == '5') {
            console.log('yes')
            // alert('yes board')
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