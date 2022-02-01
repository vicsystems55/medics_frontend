

<template lang="">
    <div>
            <nav class="sidebar__nav">
                <div class="p-5"></div>
                        <ul class="sidebar__menu">
                            <li class="sidebar__menu-item active">
                            <span class="sidebar__link active" to="/user" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-person">
                                            <use xlink:href="#icon-person"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">State Board Admin</span>

                                <span class="sidebar__link-text d-none">Admin</span>
                                
                            </span>
                            </li>

                            <li class="sidebar__menu-item"><router-link class="sidebar__link " to='/BoardAdmin/Dashboard' aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-dashboard">
                                            <use xlink:href="#icon-dashboard"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">Dashboard</span></router-link>
                            </li>
          
                               <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/enumeration' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Enumeration</span>
                                </router-link>
                            </li>


                               <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/BoardAdmin/BusinessProfiles' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Business Profiles</span>
                                </router-link>
                            </li>

                            
                            <li class="sidebar__menu-item d-none">
                                <router-link class="sidebar__link" to='/BoardAdmin/Upload' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Upload <br> Acknowledgement</span>
                                </router-link>
                            </li>

                            <li v-if="timothy" class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/BoardAdmin/SwitchState' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Switch State</span>
                                </router-link>
                            </li>

                            <!-- <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/BoardAdmin/Assessments' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Assessments</span>
                                </router-link>
                            </li> -->

                            <!-- <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/BoardAdmin/DemandNotices' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Demand Notices</span>
                                </router-link>
                            </li> -->
                            
                            <!-- <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/BoardAdmin/AccountManagement' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Staff Management</span>
                                </router-link>
                            </li> -->

                           
                     
<!-- 
                            <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/BoardAdmin/Notifications' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Notifications</span>
                                </router-link>
                            </li> -->

                    
<!-- 
                            <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/BoardAdmin/Settings' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Settings</span>
                                </router-link>
                            </li> -->




                        </ul>
            </nav>
    </div>
</template>

<script>
export default {
    name: 'BoardAdminSidebar',

        data() {
            return {
                userDatax: [],
                timothy: false
            }
        },

        methods: {
            getUserData(){
                this.userDatax = JSON.parse(localStorage.getItem('user_data'));


                // alert(this.userDatax.email)

                if(this.userDatax.userEmail == 'timothy@rtvrs.com.ng'){

                   this.timothy = true;

                //    alert(this.timothy)

                }
            },
        },

        mounted() {
            this.getUserData()
        },
}
</script>