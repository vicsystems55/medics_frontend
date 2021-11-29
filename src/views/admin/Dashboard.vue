<template >
    <div class="container">
            <div class="row">
                <div class="col-md-4 p-2 mx-auto">
                    <div style="min-width:330px;" class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">States</h3>
                                <div class="widget__status-title text-grey">Total states registered</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">3</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details">
                                    <router-link class="link-under text-grey" to="/Admin/States">Detail</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="col-md-4 p-2 mx-auto">
                    <div style="min-width: 330px;" class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Businesses</h3>
                                <div class="widget__status-title text-grey">Total businesses onboarded</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">{{businessProfiles.length}}</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details">
                                    <router-link class="link-under text-grey" to="/Admin/Businesses">Detail</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="col-md-4 p-2 mx-auto">
                    <div style="min-width: 330px;" class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Demand Notices</h3>
                                <div class="widget__status-title text-grey">Total demand notices raised</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">13</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details">
                                    <router-link class="link-under text-grey" to="/Admin/DemandNotices">Detail</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           

               
            </div>
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'

    const toast = useToast()
    export default {

        data() {
            return {
                businessProfiles: []
            }
        },

        methods: {
            getBusinessProfiles(){
                
                            let loader = this.$loading.show({
                                // Optional parameters
                                container: this.fullPage ? null : this.$refs.formContainer,
                                canCancel: true,
                                onCancel: this.onCancel,
                                color: '#6CC3EC',
                            });
                            // let self = this;
                                    this.axios({
                                    method: "get",
                                    url: " https://micro.rtvrs.com.ng/api/BusinessProfiles",
                        
                                    })
                                    .then( (response)=> {
                                        //handle success


                                        console.log(response)
                                        this.businessProfiles = response.data

                                        localStorage.setItem('businessProfiles', JSON.stringify(response.data)) 

                                        loader.hide()


                                        
                                        // toast.success('Registration Successful');

                                        // this.$router.push('/'+response['data']['UserCategory'])
                                        
                                        
                                    })
                                    .catch(function (response) {

                                    
                                        //handle error
                                        console.log(response);
                                        toast.error(response);
                                        loader.hide()
                                    });
            }
        },

            mounted() {
                this.getBusinessProfiles()
            },
        
    }
</script>