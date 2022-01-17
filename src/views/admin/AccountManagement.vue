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
                            <input type="text" class="input shadow" v-model="userFullName" placeholder="Enter fullname">
                        </div>

                        <div class="form-group">
                            <input type="text" class="input shadow" v-model="userEmail" placeholder="Enter email">
                        </div>
                        
                        <div class="form-group">
                            <input type="text" class="input shadow" v-model="userPhoneNumber" placeholder="Enter phone number">
                        </div>

                        <div class="form-group">
                            <input type="text" class="input shadow" v-model="userName" placeholder="Enter username">
                        </div>

                        <div class="form-group">
                            <input type="text" class="input shadow" v-model="userPassword" placeholder="Create a password">
                        </div>



                        <div class="form-group">
                            <select v-model="userCategory" id="" class="input shadow">
                                 <option value="" selected="selected">- Select Account Type -</option>
                                <option value="9">LGA Tax Officer</option>
                                <option value="8">Board Tax Officer</option>
                                <option value="7">System Support</option>
                                <option value="6">Super Admin</option>
                                <option value="5">Board Admin</option>
                                <option value="4">Zonal Admin</option>
                                <option value="3">Area Admin</option>
                                <option value="2">Enumerator</option>
                                <option value="1">TaxPayer</option>
                                <option value="0">NewStaff</option>
  

                            </select>
                        </div>

                        <div class="form-group">
                             <select v-model="userState"  class="input shadow">
                                 <option value="" selected="selected">- Select -</option>
                                <option value="Abuja FCT">Abuja FCT</option>
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
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
                                <option value="Nassarawa">Nassarawa</option>
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

                        <div class="form-group">

                            <button @click="create_account()" class="btn btn-primary">Create Account</button>

                        </div>

                    </div>

                </div>

                <div class="container">

                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Assigned State</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="account in accounts" :key="account.index">
                                <td>*</td>
                                <td>{{account.userFullName}}</td>
                                <td>{{account.userEmail}}</td>
                                <td>{{account.userCategory}}</td>
                                <td>
                                    <div class="form-group">
                                        
                             <select v-model="userState"  id="" class="input shadow">
                                 <option value="" selected="selected">- Select State -</option>
                                <option value="Abuja FCT">Abuja FCT</option>
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
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
                                <option value="Nassarawa">Nassarawa</option>
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
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
    

    </div>


     
</template>



<script>
import { useToast } from 'vue-toastification'

const toast = useToast()

export default {
    data() {
        return {

            accounts : [],
            userPhoneNumber: '',
            userPassword: '',
            userCategory: '',
            userEmail: '',
            userState: '',
            userFullName: '',
            userName: '',

            
        }
    },

    methods: {
        get_accounts(){

            this.axios({
                url: 'https://micro.rtvrs.com.ng/api/UserRegister',
                method: 'get'
            })
            .then((response)=>{

                this.accounts = response.data

            })

        },
        create_account(){

       

                  var bodyFormData = new FormData();

                    bodyFormData.append('UserState', this.userState); 

                    bodyFormData.append('UserPhoneNumber', this.userPhoneNumber); 

                    bodyFormData.append('UserPassword', this.userPassword); 

                    bodyFormData.append('UserName', this.userName); 

                    bodyFormData.append('UserFullName', this.userFullName); 

                    bodyFormData.append('UserCategory', this.userCategory);
                    
                    bodyFormData.append('UserEmail', this.userEmail);


             let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });
              
            this.axios({
                url: 'https://micro.rtvrs.com.ng/api/UserRegister',
                method: 'post',
                data: bodyFormData

            })
            .then((response)=>{

                console.log(response)

                loader.hide()
                toast.success('Account created successfully');


                console.log(response.data)
                this.get_accounts()
                

            })
            .catch((e)=>{
                 loader.hide()
                console.log(e)

            })
        }
    },

    mounted() {
        this.get_accounts()
    },
}
</script>

