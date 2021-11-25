
<template lang="">
    <div>
            <nav class="sidebar__nav">
            <div class="p-5"></div>
                        <ul class="sidebar__menu">
                            <li class="sidebar__menu-item active">
                            <router-link class="sidebar__link active" to="/user" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-person">
                                            <use xlink:href="#icon-person"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">STATE OFFICER</span>
                            </router-link>
                            </li>

                            <li class="sidebar__menu-item">
                            <router-link class="sidebar__link " to="/userx" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-dashboard">
                                            <use xlink:href="#icon-dashboard"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">Dashboard</span>
                            </router-link>
                            </li>

                             <li class="sidebar__menu-item">
                             <router-link class="sidebar__link " to="/user/resources" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-dashboard">
                                            <use xlink:href="#icon-dashboard"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">Business Profile</span>
                            </router-link>
                            </li>

                            
                        

                                                        
                             <li class="sidebar__menu-item">
                             <router-link class="sidebar__link " to="/user/notifications" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-bell">
                                            <use xlink:href="#icon-bell"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">Notifications</span>
                            </router-link>
                            </li>

                                                                                    
                             <li class="sidebar__menu-item">
                             <router-link class="sidebar__link " to="/user/messages" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-message">
                                            <use xlink:href="#icon-message"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">Messages</span>
                            </router-link>
                            </li>

                                                                                    
                        
                                                                                    
                             <li class="sidebar__menu-item">
                             <router-link class="sidebar__link " to="/user/subscriptions" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-dashboard">
                                            <use xlink:href="#icon-dashboard"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">My Subscription</span>
                            </router-link>
                            </li>

                                                                                    
                             <li class="sidebar__menu-item">
                             <router-link class="sidebar__link " to="/user/profile" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-dashboard">
                                            <use xlink:href="#icon-dashboard"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">My Profile</span>
                            </router-link>
                            </li>

                            <div class="p-3"></div>

                            <li class="sidebar__menu-item">
                            <router-link class="sidebar__link " to="/user" aria-expanded="true">
                                <span class="sidebar__link-icon">
                                        <svg class="icon-icon-logout">
                                            <use xlink:href="#icon-logout"></use>
                                        </svg>
                                </span>
                                <span class="sidebar__link-text">Logout</span>
                            </router-link>
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
                            
                           




                        </ul>
                    </nav>
    </div>
</template>

<script>
export default {
    name: 'UserSidebar'
}
</script>