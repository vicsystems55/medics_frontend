<template>
   <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title text-center">Account Management</h1>
                </div>
                <div class="page-tools">
                    <div class="page-tools__breadcrumbs">
                        <div class="breadcrumbs">
                            <div class="breadcrumbs__container">
                                <ol class="breadcrumbs__list">
                                    <li class="breadcrumbs__item">
                                        <a class="breadcrumbs__link" href="">
                                            <svg class="icon-icon-home breadcrumbs__icon">
                                                <use xlink:href="#icon-home"></use>
                                            </svg>
                                            <svg class="icon-icon-keyboard-right breadcrumbs__arrow">
                                                <use xlink:href="#icon-keyboard-right"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="breadcrumbs__item ">
                                        <router-link class="breadcrumbs__link active" to=""><span>Dashboard</span>
                                            <svg class="icon-icon-keyboard-right breadcrumbs__arrow">
                                            <use xlink:href="#icon-keyboard-right"></use>
                                            </svg>
                                        </router-link>
                                    </li>
                                    <li class="breadcrumbs__item active"><span class="breadcrumbs__link">Account Management</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                 
                </div>


                <div class="container">


                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="input shadow" v-model="fullname" placeholder="Enter fullname">
                        </div>

                        <div class="form-group">
                            <input type="text" class="input shadow" v-model="fullname" placeholder="Enter fullname">
                        </div>

                    </div>

                </div>
    

    </div>


     
</template>



<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

