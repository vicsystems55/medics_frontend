<template>
            <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Switch State</h1>
                </div>
              
            </div>

                <div class="p-5"></div>

            <div class="container ">
                <div class="row">
                    <div class="col-md-4 p-2">
                        <div class="form-group">

                            <button @click="switchState(18, 'KADUNA')" class="btn btn-primary btn-lg p-5 btn-block shadow">KADUNA</button>
                            
                            </div>
                    </div>

                    <div class="col-md-4 p-2">

                        <div class="form-group">

                            <button @click="switchState(5, 'BAUCHI')" class="btn btn-primary btn-lg p-5 btn-block shadow">BAUCHI</button>
                            
                            </div>
                    </div>

                    <div class="col-md-4 p-2">
                        
                        <div class="form-group">

                            <button @click="switchState(10, 'DELTA')" class="btn btn-primary btn-lg p-5 btn-block shadow">DELTA
                                
                            </button>
                            
                            </div>
                    </div>


                </div>
            </div>

            <div class="container text-center">
                <router-link to='/BoardAdmin/BusinessProfiles' class="btn btn-primary btn-lg">View Business Profiles</router-link>
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

              this.axios({
                      method: 'get',
                      url: 'https://admin.intertradeapps.com/api/UserLogin/'+this.userDatax.userName,
                     
                  })
                  .then((response)=>{
           
                      console.log(response)
    
                        localStorage.setItem('user_data', JSON.stringify(response.data))   
                    })
                  .catch((response)=>{
                      console.log(response)
                  }) 
             this.userDatax = JSON.parse(localStorage.getItem('user_data'));
        },

        switchState(stateId, stateName){

                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                    var bodyFormData = new FormData();

                    bodyFormData.append('UserName', this.userDatax.userName); 

                    bodyFormData.append('SelectedState', stateId); 

                    localStorage.setItem('stateName', stateName)

             this.axios({
                url: 'https://admin.intertradeapps.com/api/Supperadminswap',
                method: 'post',
                data: bodyFormData
            })
            .then((response)=>{
                                  
            
            // localStorage.setItem('user_data', '')
            // localStorage.setItem('stateName', '')
            // localStorage.setItem('businessProfiles', '')

            this.axios({
                      method: 'get',
                      url: 'https://admin.intertradeapps.com/api/UserLogin/'+this.userDatax.userName,
                     
                  })
                  .then((response)=>{
           
                      console.log(response)

                      
                        localStorage.setItem('user_data', JSON.stringify(response.data))   

                        // alert('change data')

                        loader.hide()
                         toast.success('State Switched to ' + localStorage.getItem('stateName'));
                       
                    })
                  .catch((response)=>{
                      console.log(response)
                  }) 
            
    



            

            //  this.$router.push('/BoardAdmin/BusinessProfiles');

             return location.reload();


            })
            .catch((response)=>{

                console.log(response)
            })

        }
        
    },

    mounted() {

        this.getUserData()
        
    },
}
</script>