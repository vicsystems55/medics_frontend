import AdminDashboard from '../views/admin/Dashboard'
import AdminNotifications from '../views/admin/Notifications'
import Dashboard from '../views/layouts/Dashboard.vue'



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
    ]

 },

]