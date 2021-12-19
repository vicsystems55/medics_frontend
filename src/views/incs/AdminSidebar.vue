

<template lang="">
    <div>
            <nav class="sidebar__nav">
                <div class="p-5"></div>
                        <ul class="sidebar__menu">
                            <li class="sidebar__menu-item active">
                            <a class="sidebar__link active" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-person">
                                            <use xlink:href="#icon-person"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">SUPER ADMIN</span>
                            </a>
                            </li>

                            <li class="sidebar__menu-item"><router-link class="sidebar__link " to='/Admin/Dashboard' aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-dashboard">
                                            <use xlink:href="#icon-dashboard"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">Dashboard</span></router-link>
                            </li>
                            
                         
                                        <!-- <li class="sidebar__menu-item"><a class="sidebar__link" href="#" data-toggle="collapse" data-target="#Auth" aria-expanded="false"><span class="sidebar__link-icon">
                                <svg class="icon-icon-password">
                                    <use xlink:href="#icon-password"></use>
                                </svg></span><span class="sidebar__link-text">Authentication</span><span class="sidebar__link-arrow">
                                <svg class="icon-icon-keyboard-down">
                                    <use xlink:href="#icon-keyboard-down"></use>
                                </svg></span></a>
                                            <div class="collapse" id="Auth">
                                                <ul class="sidebar__collapse-menu">
                                                    <li class="sidebar__menu-item"><a class="sidebar__link" href="auth-login.html"><span class="sidebar__link-signal"></span><span class="sidebar__link-text">Login</span></a>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </li> -->

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
                            
                                <!-- <li class="sidebar__menu-item">
                                    <router-link class="sidebar__link" to='/Admin/States' aria-expanded="false">
                                        <span class="sidebar__link-icon">
                                            <svg class="icon-icon-settings">
                                                <use xlink:href="#icon-settings"></use>
                                            </svg>
                                        </span>
                                        <span class="sidebar__link-text">States</span>
                                    </router-link>
                                </li> -->

                            <!-- <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/Admin/BusinessProfiles' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Business Profiles</span>
                                </router-link>
                            </li> -->

                            <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/Admin/DemandNotices' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Demand Notices</span>
                                </router-link>
                            </li>

                                <li class="sidebar__menu-item">
                                <router-link class="sidebar__link" to='/Admin/Acknowledgements' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Acknowledgements</span>
                                </router-link>
                            </li>
                            
                            <!-- <li class="sidebar__menu-item">
                                <a class="sidebar__link" to='/Admin/AccountManagement' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Account Management</span>
                                </a>
                            </li> -->

                           
                     

                            <!-- <li class="sidebar__menu-item">
                                <a class="sidebar__link" to='/Admin/Notifications' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Notifications</span>
                                </a>
                            </li> -->

                    

                            <!-- <li class="sidebar__menu-item">
                                <a class="sidebar__link" to='/Admin/Settings' aria-expanded="false">
                                    <span class="sidebar__link-icon">
                                        <svg class="icon-icon-settings">
                                            <use xlink:href="#icon-settings"></use>
                                        </svg>
                                    </span>
                                    <span class="sidebar__link-text">Settings</span>
                                </a>
                            </li> -->




                        </ul>
            </nav>
    </div>
</template>

<script>
export default {
    name: 'AdminSidebar'
}
</script>