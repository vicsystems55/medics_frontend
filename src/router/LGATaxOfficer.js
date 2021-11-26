import LGATaxOfficerDashboard from '../views/LGATaxOfficer/Dashboard'
import LGATaxOfficerNotifications from '../views/LGATaxOfficer/Notifications'
import Dashboard from '../views/layouts/Dashboard.vue'



export default [
 {
   path: '/LGATaxOfficer/',
   name: 'LGATaxOfficer',
   component: Dashboard,
    children: [
        {
            path: 'Dashboard',
            component: LGATaxOfficerDashboard
        },

        {
            path: 'Notifications',
            component: LGATaxOfficerNotifications
        },
    ]

 },

]