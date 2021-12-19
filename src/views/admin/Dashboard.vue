<template>
   <div>
         <div class="container">
                <div class="page-header py-2">
                    <h1 class="page-header__title">Hi, {{userData.userFullName}}</h1>
                    <h6 class="font-italic">Username: {{userData.userName}}</h6>
                    <h6 class="font-italic">Email: {{userData.email}}</h6>
                </div>

                 <div class="row">
                

                 <div class="col-md-4 p-2">
                    <div class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Assessments</h3>
                                <div class="widget__status-title text-grey">Total businesses registered</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">{{businessProfiles.length}}</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details"><router-link class="link-under text-grey" to="/BoardAdmin/BusinessProfiles">Detail</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 p-2">
                    <div class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Demand Notices</h3>
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
                                <div class="widget__details"><a class="link-under text-grey">Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="col-md-4 p-2">
                    <div class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Acknowledgements</h3>
                                <div class="widget__status-title text-grey">Total acknowledgement uploaded</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">0</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details"><a class="link-under text-grey" >Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           

               
            </div>


                
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            businessProfiles: [],
            userData: []
        }
    },
    methods: {
        getUserData(){
            

           this.userData = JSON.parse(localStorage.getItem('user_data'));

        //    alert(this.userData.userFullName)
        },
        getBusinessProfiles(){
            let loader = this.$loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: true,
                onCancel: this.onCancel,
                color: '#6CC3EC',
            });

            this.axios({
                method: 'get',
                url:'https://micro.rtvrs.com.ng/api/BusinessProfiles/KADUNA',

            })
            .then((response)=>{

                this.businessProfiles = response.data
                loader.hide()
            })
            .catch((response)=>{

                console.log(response)
                loader.hide()
            })
        }
    },
    mounted() {
        this.getBusinessProfiles()
        this.getUserData()
    },
}
</script>