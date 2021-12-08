<template >
    <div>
 
   
            <!-- <div class="auth-card__shape"></div>
                    <div class="auth-card__shape"></div> -->
        <main  >          
            <div class="container">
               <div class="widget mt-5 col-md-8 mx-auto">
                    <div class=" widget__wrapper">                          
                    <div class="container-fluid">
                        <h4 class="py-5 text-center">Enumeration</h4>
                        <div class="row">
                            <div class="col-md-6">
                                <!-- <div class="form-group">
                                    <label>Username</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="username" placeholder="Enter Username" required>
                                    </div>
                                </div> -->
                                
                                <LGA/>

                                <div class="form-group">
                                    <label>Town</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="town" placeholder="Enter town hotel is located" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Hotel Name:</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="hotel_name" placeholder="Enter name of hotel" required>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>Hotel Address</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="hotel_address" placeholder="Enter address of the hotel" required>
                                    </div>
                                </div>


                            </div>  

                            <div class="col-md-6">

                                <div class="form-group">
                           
                                    <label>Contact Person (MD)</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="contact_person" placeholder="Enter name of contact person " required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Contact Person Phone</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="contact_person_phone" placeholder="Enter name of contact person phone " required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Contact Person Email Address</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="contact_person_email" placeholder="Enter name of contact person email" required>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>Hotel Manager</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="hotel_manager" placeholder="Enter name of hotel managers name " required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Hotel Manager Phone</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="hotel_manager_phone" placeholder="Enter name of hotel managers phone " required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Hotel Manager Email</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="hotel_manager_email" placeholder="Enter name of hotel managers email " required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Enter your email</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="reporters_email" placeholder="Enter the email assigned to you " required>
                                    </div>
                                </div>


                            </div>

    

                          
                        </div>
                     <div class="container py-5">
                            <div class="row">

                                <div class="col-md-6">

                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Number of Rooms:</h6>
                                        </div>
                                        <div class="col">
                                            <input type="number" v-model="number_of_rooms" class="form-control">
                                        </div>
                                    </div>
                                </div>


                                </div>
                              <div class="col-md-6">



                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Swimming Pool</h6>
                                        </div>
                                        <div class="col">
                                            <input type="number" v-model="swimming_pools" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Reception</h6>
                                        </div>
                                        <div class="col">
                                            <input type="number" v-model="reception" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Bar</h6>
                                        </div>
                                        <div class="col">
                                            <input type="number" v-model="bar" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Lounge</h6>
                                        </div>
                                        <div class="col">
                                            <input type="number" v-model="lounge" class="form-control">
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                     </div>
                    </div>
                
                    <div class="text-center" >
                        <button  class="button button--primary col-md-5 mx-auto " @click="submit()">Submit</button>
                        <!-- <div class="auth-card__sign">Already have account? <router-link class="text-blue" to="/login">Login</router-link>  </div>-->
                        
                    </div>
                     </div> 
                </div> 
            </div>              
        </main>

    </div>

</template>

<script>
import LGA from '@/components/LGA.vue'


import { useToast } from 'vue-toastification'

const toast = useToast()

export default {

    components:{
        LGA
    },

    data() {
        return {
            state: '',
            lga: '',
            town: '',

            hotel_name: '',
            hotel_address: '',

            contact_person: '',
            contact_person_phone: '',
            contact_person_email: '',

            hotel_manager: '',
            hotel_manager_phone: '',
            hotel_manager_email: '',

            number_of_rooms: '',

            swimming_pools: '',
            reception: '',
            bar: '',
            lounge:'',

            reporters_email: '',


        
        }
    },

    methods: {

        togglePasswordVisibility(){
       
            if(this.passwordAttribute == 'password'){
                this.passwordAttribute = 'text'
            }else{
                this.passwordAttribute = 'password'
            }

        },
                submit() {



                        let loader = this.$loading.show({
                            // Optional parameters
                            container: this.fullPage ? null : this.$refs.formContainer,
                            canCancel: true,
                            onCancel: this.onCancel,
                            color: '#6CC3EC',
                        });
                        // let self = this;
                                this.axios({
                                method: "post",
                                url: " https://dev.phoenixgn.com/api/create_enumeration",
                                data: {
                                    state : this.state,
                                    lga : this.lga,
                                    town : this.town,
                                    hotel_name : this.hotel_name,
                                    hotel_address : this.hotel_address,
                                    contact_person : this.contact_person,
                                    contact_person_phone : this.contact_person_phone,
                                    contact_person_email : this.contact_person_email,
                                    hotel_manager : this.hotel_manager,
                                    hotel_manager_phone : this.hotel_manager_phone,
                                    hotel_manager_email : this.hotel_manager_email,
                                    number_of_rooms : this.number_of_rooms,
                                    swimming_pools : this.swimming_pools,
                                    reception : this.reception,
                                    bar : this.bar,
                                    lounge : this.lounge,
                                    reporters_email : this.reporters_email,
                                },
                               
                                })
                                .then( (response)=> {
                                    //handle success


                                    console.log(response)

                                      this.$router.push('/enumeration_success')


                                    // localStorage.setItem('user_data', JSON.stringify(response.data)) 

                                    loader.hide()

                                    if(this.UserCategory == '6'){
                                        localStorage.setItem('user_role', '6')
                                        toast.success('Registration Successful');
                                        return this.$router.push('/Admin/Dashboard');
                                    }if(this.UserCategory == '5'){
                                         localStorage.setItem('user_role', '5')
                                        toast.success('Registration Successful');
                                        return this.$router.push('/BoardAdmin/Dashboard')
                                    }if(this.UserCategory == '9'){
                                         localStorage.setItem('user_role', '9')
                                        toast.success('Registration Successful');
                                        return this.$router.push('/LGATaxOfficer/Dashboard')
                                    }


                            

                                    

                                    // this.$router.push('/'+response['data']['UserCategory'])
                                        // alert('stop');
                                    
                                })
                                .catch(function (response) {

                                    alert(response);
                                    //handle error
                                    console.log(response);
                                    toast.error(response);
                                    loader.hide()
                                });

                    //    this.axios.post('http://www.rtvrs.com.ng/api/VistorTests ', {

                    //         StateCode: this.state_code,
                    //         BusinessName: this.business_name

                    //     })
                    //     .then(function (response) {

                    //         console.log(response);
                    //         toast.success('Successful');
                    //         loader.hide()
                    //     })
                    //     .catch(function (error) {

                    //         console.log(error);

                    //         toast.error('error');

                    //         loader.hide()
                    //     });

                  
                    },

                    onCancel() {
                        console.log('User cancelled the loader.')
                    },

               
    },
    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

