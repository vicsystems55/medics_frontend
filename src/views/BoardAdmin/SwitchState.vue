<template>
            <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Switch State</h1>
                </div>
              
            </div>


            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">

                            <button @click="switchState(18)" class="btn btn-primary btn-lg">KADUNA</button>
                            
                            </div>
                    </div>

                    <div class="col-md-4">

                        <div class="form-group">

                            <button @click="switchState(5)" class="btn btn-primary btn-lg">BAUCHI</button>
                            
                            </div>
                    </div>

                    <div class="col-md-4">
                        
                        <div class="form-group">

                            <button @click="switchState(10)" class="btn btn-primary btn-lg">DELTA
                                
                            </button>
                            
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
            currentStateId: '',
            userDatax: []
        }
    },

    methods: {

        getUserData(){
             this.userDatax = JSON.parse(localStorage.getItem('user_data'));
        },

        switchState(stateId){
                    var bodyFormData = new FormData();

                    bodyFormData.append('UserName', this.userDatax.userName); 

                    bodyFormData.append('SelectedState', stateId); 

             this.axios({
                url: 'https://micro.rtvrs.com.ng/api/Supperadminswap',
                method: 'post',
                data: bodyFormData
            })
            .then((response)=>{

            localStorage.setItem('user_role', '')
            localStorage.setItem('user_data', '')
            localStorage.setItem('stateName', '')
            localStorage.setItem('businessProfiles', '')

            toast.success('State Switched');

            
                this.packages = response.data

                console.log(response)

            

             this.$router.push('/login');

            this.packages = response.data

                console.log(response)
            })
            .catch((response)=>{

                console.log(Response)
            })

        }
        
    },

    mounted() {

        this.getUserData()
        
    },
}
</script>