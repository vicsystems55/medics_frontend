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
                                <div class="form-group">
                                    <label>Category</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <select v-model="category" id="" @change="applicable(category)" class="input shadow">
                                            <option value="">- Select Type -</option>
                                            <option value="Hotel">Hotel</option>
                                            <option value="Banks">Banks</option>
                                            <option value="Offices">Offices</option>
                                            <option value="Recreation Centers">Recreation Center</option>
                                        </select>
                                      
                                    </div>
                                </div>
                                
                                <LGA @state="getState"  @lga="getLga" />

                                <div class="form-group">
                                    <label>Town</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="town" placeholder="Town/Location (Optional)" required>
                                    </div>
                                </div>

                                  <div class="form-group">
                                    <label>Area Tax Offfice: *</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>

                                        <select v-model="AreaOffice" id="" class="input shadow">
                                            <!-- <option value="-Select0-">--Select Area Tax Office--</option> -->
                                            <option v-for="area_tax_office in tax_area_offices" :key="area_tax_office.index" >{{area_tax_office.zonalTaxAreaName}}</option>
                                            <!-- <option value="DOKA WEST">DOKA WEST</option>
                                            <option value="KAKURI EAST">KAKURI EAST</option>
                                            <option value="KAKURI WEST">KAKURI WEST</option>
                                            <option value="KAWO">KAWO</option>
                                            
                                            <option value="RIGASA">RIGASA</option>
                                            <option value="SABO">SABO</option>
                                           
                                            <option value="KADUNA NORTH">KADUNA NORTH</option> -->
                                            
                                        </select>
                                        <!-- <input class="input shadow" type="text" v-model="AreaOffice" placeholder="Enter Area Office Name" required> -->
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Business Name:</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="BusinessName" placeholder="Enter Business Name" required>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>Business Address</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="BusinessAddress" placeholder="Enter organization address" required>
                                    </div>
                                </div>


                            </div>  

                            <div class="col-md-6">

                                <div class="form-group">
                                    <label>Business Owner Name:</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="BusinessOwnerName" placeholder="Enter Business Owner Name" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Business Owner Email:</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="BusinessOwnerEmail" placeholder="Enter Business Owner Email" required>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>Business Owner Phone:</label>
                                    <div class="input-group input-group--prepend">
                                        <span class="input-group__prepend">
                                            <svg class="icon-icon-user">
                                            <use xlink:href="#icon-user"></use>
                                            </svg>
                                        </span>
                                        <input class="input shadow" type="text" v-model="BusinessOwnerPhone" placeholder="Enter Business Owner Phone" required>
                                    </div>
                                </div>


                                <div class="form-group">
                           
                                    <label>Contact Person </label>
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


                                <div class="form-group d-none">
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

                                <div class="form-group d-none">
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

                                <div class="form-group d-none">
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

                                <div class="form-group d-none">
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
                              <!-- <div class="col-md-12 py-5">
                                    <h6>Supply Where Applicable:</h6>
                                </div> -->
                     <div v-if="others" class="container-fluid py-5">

                      
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


                                </div>
                              <div class="col-md-6">



                               

                               

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
                    <div v-else class="container-fluid py-5">

                      
                            <div class="row">

                          

                                <div class="col-md-6">

                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col">
                                                <h6>Number of Devices:</h6>
                                            </div>
                                            <div class="col">
                                                <input type="number" v-model="number_of_rooms" class="form-control">
                                            </div>
                                        </div>
                                    </div>

                                     <div class="mb-3 d-none">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Swimming Pool</h6>
                                        </div>
                                        <div class="col">
                                            <input type="number" v-model="swimming_pools" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                 <div class="mb-3 d-none">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Reception</h6>
                                        </div>
                                        <div class="col">
                                            <input type="number" v-model="reception" class="form-control">
                                        </div>
                                    </div>
                                </div>


                                </div>
                              <div class="col-md-6">



                               

                               

                                <div class="mb-3 d-none">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Bar</h6>
                                        </div>
                                        <div class="col">
                                            <input type="number" v-model="bar" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3 d-none">
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

            others: true,

            state: '',
            lga: '',
            town: '',

            tax_area_offices : [],

            AreaRevenueOffice:'lagos',
            BusinessName: '', 
            BusinessOwnerEmail : '',
            BusinessOwnerName: '', 
            BusinessOwnerPhoneNo : '',
            BusinessAddress: '',

            category: '',

            hotel_name: '',
            hotel_address: '',

            contact_person: '',
            contact_person_phone: '',
            contact_person_email: '',

            hotel_manager: '',
            hotel_manager_phone: '',
            hotel_manager_email: '',

            number_of_rooms: '1',

            swimming_pools: '0',
            reception: '0',
            bar: '0',
            lounge:'0',

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

                    // alert(this.lga)
                    //    alert(this.state)

                     var bodyFormData = new FormData();

                    bodyFormData.append('state', this.state );
                    bodyFormData.append('lga', this.lga );
                    bodyFormData.append('AreaRevenueOffice', this.AreaRevenueOffice );
                    bodyFormData.append('BusinessName', this.BusinessName );
                    bodyFormData.append('BusinessOwnerEmail', this.BusinessOwnerEmail );
                    bodyFormData.append('BusinessOwnerName', this.BusinessOwnerName );
                    bodyFormData.append('BusinessOwnerPhoneNo', this.BusinessOwnerPhoneNo );
                    bodyFormData.append('BusinessAddress', this.BusinessAddress );
                    bodyFormData.append('town', this.town );
                    bodyFormData.append('category', this.category );
                    bodyFormData.append('contact_person', this.contact_person );
                    bodyFormData.append('contact_person_phone', this.contact_person_phone );
                    bodyFormData.append('contact_person_email', this.contact_person_email );
                    bodyFormData.append('number_of_rooms', this.number_of_rooms );
                    bodyFormData.append('swimming_pools', this.swimming_pools );
                    bodyFormData.append('reception', this.reception );
                    bodyFormData.append('bar', this.bar );
                    bodyFormData.append('lounge', this.lounge );
                    bodyFormData.append('reporters_email', this.reporters_email);





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
                                url: "https://micro.rtvrs.com.ng/api/Enumerations",

                                data: bodyFormData,
                               
                                })
                                .then( (response)=> {
                                    //handle success


                                    console.log(response)

                                       loader.hide()

                                     return  this.$router.push('/enumeration_success')


                                    
                                })
                                .catch(function (response) {

                                    alert(response);
                                    //handle error
                                    console.log(response);
                                    toast.error(response);
                                    loader.hide()
                                });


                  
                    },

                    getState(value) {
                            this.state = value
                        console.log(this.state); // Raja Tamil
                    },
                      getLga(value) {
                          this.lga = value
                      
                        console.log(this.lga); // Raja Tamil

                        
     
                    },

                    applicable(category){

                        // alert('yes');

                       if(category == 'Banks'){
                           this.others = false
                       }

                        if(category == 'Offices'){
                           this.others = false
                       }
                    },

                    onCancel() {
                        console.log('User cancelled the loader.')
                    },

               
    },

    mounted() {


        var stateID = JSON.parse(localStorage.getItem('user_data'))
        alert(stateID.stateID)

        this.axios({
            url: 'https://micro.rtvrs.com.ng/api/ZonalTaxAreas/'+stateID.stateID,
            method: 'GET'
        })
        .then((response)=>{
            this.tax_area_offices = response.data
            console.log(this.tax_area_offices)
        })
        .catch((response)=>{
            console.log(response)
        })
    },
    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

