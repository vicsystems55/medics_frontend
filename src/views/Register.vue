<template >
    <div>
 
    <div class="page-wrapper">
        <main class="page-auth">
            <div class="page-auth__center">
                <div class="page-auth__gradient">
                    <div class="page-auth__gradient-shape"></div>
                    <div class="page-auth__gradient-shape"></div>
                    <div class="auth-logo">
                        <img class="auth-logo__icon" src="img/content/logotype.svg" width="44" alt="#" />
                        <div class="auth-logo__text">RTVRS</div>
                    </div>
                    <div class="page-auth__gradient-column"></div>
                </div>
                <div class="auth-card card">
                    <div class="auth-card__shape"></div>
                    <div class="auth-card__shape"></div>
                    <div class="card__wrapper">
                        <div class="auth-card__left">
                            <div class="auth-card__logo">
                                <div class="auth-logo">
                                    <img class="auth-logo__icon" src="img/content/logotype.svg" width="44" alt="#" />
                                    <div class="auth-logo__text">RTVRS</div>
                                </div>
                            </div>
                            <img class="auth-card__bg auth-bg-image-light" src="img/content/auth-bg.jpg" alt="#">
                            <img class="auth-card__bg auth-bg-image-dark" src="img/content/auth-bg-dark.jpg" alt="#">
                        </div>
                        <div class="auth-card__right" method="POST">
                            <div class="auth-card__top">
                                <h1 class="auth-card__title">Create an Account</h1>
                            </div>
                            <div class="auth-card__body">
                                <div class="form-group">
                                    <label>Fullname:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-email-2">
                                            <use xlink:href="#icon-email-2"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="text" v-model="UserFullName" required placeholder="Enter fullname">
                                    </div>
                                </div>
                                <div class="form-group">
                                     <label>Username:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-email-2">
                                            <use xlink:href="#icon-email-2"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="text" placeholder="Create a username" v-model="UserName" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                     <label>Email:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-email-2">
                                            <use xlink:href="#icon-email-2"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="email" placeholder="Supply a valid email" v-model="UserEmail" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                     <label>Password:</label>
                                    <label @click="togglePasswordVisibility()" class="float-right" style="margin-left: 250px; margin-top: 36px; position: absolute; z-index: 999"> <img height="20" width="20" src="https://cdn-icons-png.flaticon.com/128/709/709612.png" style="z-index:999"></label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <input ref="pass" :type="passwordAttribute" class="input shadow"  placeholder="Create a password" v-model="UserPassword" required>
                                    </div>
                                </div>
                               
                                <div class="form-group">
                                     <label>Confirm Password:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="password" placeholder="Password (Confirm)"  required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Phone Number:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="text" placeholder="+234 " v-model="UserPhoneNumber"  required>
                                    </div>
                                </div>

                                 <!-- <div class="form-group">
                                     <label for="">Account Type</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <select v-model="UserCategory" class="input shadow" >
                                            <option value="">--Account Type--</option>
                                            <option value="9">LGA Tax Officer</option>
                                            <option value="8">Board Tax Officer</option>
                                            <option value="7">System Support</option>
                                            <option value="5">Board Admin</option>
                                            <option value="4">Zonal Admin</option>
                                            <option value="3">Area Admin</option>
                                            <option value="2">Enumerator</option>
                                        </select>
                                    </div>
                                </div> -->

                                <LGA/>

                                    <!-- <div class="form-group">
                                        <label for="">State</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <select class="input shadow" v-model="UserState">
                                            <option value="">--Select State--</option>
                                            <option value="Abia">Abia</option>
                                            <option value="Adamawa">Adamawa</option>
                                            <option value="Akwa Ibom">Akwa Ibom</option>
                                            <option value="Anambra">Anambra</option>
                                            <option value="Bauchi">Bauchi</option>
                                            <option value="Bayelsa">Bayelsa</option>
                                            <option value="Benue">Benue</option>
                                            <option value="Borno">Borno</option>
                                            <option value="Cross Rive">Cross River</option>
                                            <option value="Delta">Delta</option>
                                            <option value="Ebonyi">Ebonyi</option>
                                            <option value="Edo">Edo</option>
                                            <option value="Ekiti">Ekiti</option>
                                            <option value="Enugu">Enugu</option>
                                            <option value="FCT">Federal Capital Territory</option>
                                            <option value="Gombe">Gombe</option>
                                            <option value="Imo">Imo</option>
                                            <option value="Jigawa">Jigawa</option>
                                            <option value="Kaduna">Kaduna</option>
                                            <option value="Kano">Kano</option>
                                            <option value="Katsina">Katsina</option>
                                            <option value="Kebbi">Kebbi</option>
                                            <option value="Kogi">Kogi</option>
                                            <option value="Kwara">Kwara</option>
                                            <option value="Lagos">Lagos</option>
                                            <option value="Nasarawa">Nasarawa</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Ogun">Ogun</option>
                                            <option value="Ondo">Ondo</option>
                                            <option value="Osun">Osun</option>
                                            <option value="Oyo">Oyo</option>
                                            <option value="Plateau">Plateau</option>
                                            <option value="Rivers">Rivers</option>
                                            <option value="Sokoto">Sokoto</option>
                                            <option value="Taraba">Taraba</option>
                                            <option value="Yobe">Yobe</option>
                                            <option value="Zamfara">Zamfara</option>
                                        </select>
                                    </div>
                                    </div> -->

                                <div class="form-group">
                                    <label class="checkbox">
                                        <input type="checkbox" checked><span class="checkbox__marker"><span class="checkbox__marker-icon">
                                    <svg class="icon-icon-checked">
                                        <use xlink:href="#icon-checked"></use>
                                    </svg></span></span><span class="ml-2">I accept the <a class="text-blue" href="#">terms & conditions</a></span>
                                    </label>
                                </div>
                                <div class="auth-card__submit">
                                    <button class="button button--primary button--block" type="button" @click="submit()"><span class="button__text">Create account</span>
                                    </button>
                                </div>
                            </div>
                            <div class="auth-card__bottom">
                                <div class="auth-card__sign">Already have account? <router-link class="text-blue" to="/login">Login</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
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
             fullPage: false,
             UserState: '',
             UserPhoneNumber: '',
             UserPassword: '',
             UserName: '',
             UserFullName: '',
             UserCategory: 5,
             UserEmail: '',
            passwordAttribute: 'password'
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



                    var bodyFormData = new FormData();

                    bodyFormData.append('UserState', this.UserState); 

                    bodyFormData.append('UserPhoneNumber', this.UserPhoneNumber); 

                    bodyFormData.append('UserPassword', this.UserPassword); 

                    bodyFormData.append('UserName', this.UserName); 

                    bodyFormData.append('UserFullName', this.UserFullName); 

                    bodyFormData.append('UserCategory', this.UserCategory);
                    
                    bodyFormData.append('UserEmail', this.UserEmail);

                    // var userRole = this.UserCategory;


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
                                url: " https://micro.rtvrs.com.ng/api/UserRegister",
                                data: bodyFormData,
                                headers: { "Content-Type": "multipart/form-data" },
                                })
                                .then( (response)=> {
                                    //handle success

                                    alert('successful')
                                   
                                    console.log(response.data)
                                    console.log(this.UserCategory)

                                    //   this.$router.push('/BoardAdmin')


                                    localStorage.setItem('user_data', JSON.stringify(response.data)) 

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

                    makepayment(){
                        var samplePaymentRequest = {
                             merchant_code: "MX007",          
                            pay_item_id: "101007",
                            txn_ref: "sample_txn_ref_123",
                            amount: 10000, 
                            currency: 566, // ISO 4217 numeric code of the currency used
                            // onComplete: paymentCallback,
                            mode: 'TEST'
                        };
                        window.webpayCheckout(samplePaymentRequest);
                    }
    },
    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

