<template>
    <div>
   
<div class="container">
        

          <div class="page-header">
                    <h1 class="page-header__title">Assessment for {{businessProfile.businessName}}</h1>
                </div>
                <div class="page-tools">
                    <div class="page-tools__breadcrumbs">
                        <div class="breadcrumbs">
                            <div class="breadcrumbs__container">
                                <ol class="breadcrumbs__list">
                                    <li class="breadcrumbs__item">
                                        <a class="breadcrumbs__link" href="index.html">
                                            <svg class="icon-icon-home breadcrumbs__icon">
                                                <use xlink:href="#icon-home"></use>
                                            </svg>
                                            <svg class="icon-icon-keyboard-right breadcrumbs__arrow">
                                                <use xlink:href="#icon-keyboard-right"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="breadcrumbs__item disabled"><a class="breadcrumbs__link" href="#"><span>Assessment</span>
                        <svg class="icon-icon-keyboard-right breadcrumbs__arrow">
                          <use xlink:href="#icon-keyboard-right"></use>
                        </svg></a>
                                    </li>
                                    <!-- <li class="breadcrumbs__item active"><span class="breadcrumbs__link">Orders</span>
                                    </li> -->
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="page-tools__right">
                        <div class="page-tools__right-row">
                            <div class="page-tools__right-item"><a class="button-icon" href="#"><span class="button-icon__icon">
                      <svg class="icon-icon-print">
                        <use xlink:href="#icon-print"></use>
                      </svg></span></a>
                            </div>
                           
                        </div>
                    </div>
                </div>

        <div class="contianer table-responsive">
             <table class="table table-striped hover">
             <tr>
                 <th>Business Name:</th>
                 <td>{{businessProfile.businessName}}</td>

                <th></th>
                 <td></td>
             </tr>
              <tr>
                 <th>Address</th>
                 <td>{{businessProfile.businessAddress}}</td>

                  <th></th>
                 <td></td>
             </tr>
             <tr>
                 <th>Phone</th>
                 <td>{{businessProfile.businessPhoneNo}}</td>

                  <th>TIN:</th>
                 <td></td>
             </tr>
         </table>
        </div>

        <div class="p-3"></div>
         
    <div class="row">

        <div class="col-3">
            <h6>Equipment:</h6>
            <div class="form-group d-none">
                <input type="text" class="form-control" value="Radio" disabled>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value="Commercial TV" disabled>
            </div>
            <div class="form-group d-none">
                <input type="text" class="form-control" value="Computer" disabled>
            </div>
        </div>

        <div class="col-3">
            <h6>Quantity:</h6>
            <div class="form-group d-none">
                <input type="number" class="form-control" @keyup="calculate_radio_total(radio,radio_rate)" v-model="radio">
            </div>
            <div class="form-group">
                <input type="number" class="form-control" @keyup="calculate_tv_total(tv,tv_rate)" v-model="tv">
            </div>
            <div class="form-group d-none">
                <input type="number" class="form-control" @keyup="calculate_computer_total(computer,computer_rate)" v-model="computer">
            </div>
        </div>

        
        <div class="col-3">
            <h6>Rate</h6>
            <div class="form-group d-none">
                <input type="number" class="form-control" v-model="radio_rate" disabled>
            </div>
            <div class="form-group">
                <input type="number" class="form-control" v-model="tv_rate" disabled>
            </div>
            <div class="form-group d-none">
                <input type="number" class="form-control" v-model="computer_rate" disabled>
            </div>
        </div>

        <div class="col-3">
            <h6>Total</h6>
            <div class="form-group d-none">
                <input type="number" class="form-control" v-model="radio_total">
            </div>
            <div class="form-group">
                <input type="number" class="form-control" v-model="tv_total">
            </div>
            <div class="form-group d-none">
                <input type="number" class="form-control" v-model="computer_total">
            </div>
        </div>
    </div>

     <div class="c">
            <h4 class="text-right">Total Bill: N {{formatDigit(total_bill)}} </h4>
        </div>

   
</div>

<div class="container text-center py-3">
    <div class="row">
        <div class="col-md-6">
             <button class="btn btn-primary col-md-4"  @click="updateAssessment()"> Update Assessment</button>
        </div>
        <div  class="col-md-6 ">

            <router-link :class="button_class" :to="{ name: 'AdminDemandNotice',params:{id: this.$route.params.id}}"> View Demand Notice</router-link>
             
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
                businessProfile: [],
                businessID: '',
                enumeration: [],
                button_class:'btn btn-warning col-md-4',
                radio: '',
                tv: '',
                computer:'',

                radio_rate: '',
                tv_rate: '',
                computer_rate:'',

                radio_total: '',
                tv_total: '',
                computer_total:'',

                total_bill: ''
            }
        },

        methods: {

            
        formatDigit(digits){
     
            return new Intl.NumberFormat('en-US',{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            } ).format(digits)
        },
            calculate_radio_total(radio, radio_rate){

                this.radio_total = parseInt(radio) * parseInt(radio_rate)


                // alert(this.radio_rate)

            },
            calculate_tv_total(tv, tv_rate){
                this.tv_total = parseInt(tv) * parseInt(tv_rate)
            },
            calculate_computer_total(computer, computer_rate){
                   this.computer_total = parseInt(computer) * parseInt(computer_rate)
            },
            getBusinessProfiles(){
                // console.log(this.businessProfile.businessEnumerations)
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
                                    url: " https://micro.rtvrs.com.ng/api/Assessment/"+this.$route.params.id,
                        
                                    })
                                    .then( (response)=> {
                                        //handle success


                                        console.log(response.data['businessEnumerations'])

                                        this.businessProfile = response.data
                                        this.businessID = response.data.businessID


                                        this.enumeration = response.data['businessEnumerations']

                                        this.radio = response.data['businessEnumerations'][0].totalItemCount
                                        this.radio_rate = response.data['businessEnumerations'][0].taxRate
                                        this.radio_enumeration_id = response.data['businessEnumerations'][0].businessEnumerationID
                                        

                                        this.tv = response.data['businessEnumerations'][0].totalItemCount
                                        this.tv_rate = response.data['businessEnumerations'][0].taxRate
                                        // alert(this.tv_rate)
                                        this.tv_enumeration_id = response.data['businessEnumerations'][0].businessEnumerationID

                                        this.computer = response.data['businessEnumerations'][0].totalItemCount
                                        this.computer_rate = response.data['businessEnumerations'][0].taxRate
                                        this.computer_enumeration_id = response.data['businessEnumerations'][0].businessEnumerationID

                                        this.radio_total = this.radio * this.radio_rate
                                        this.tv_total = this.tv * this.tv_rate
                                        this.computer_total = this.computer * this.computer_rate

                                        this.total_bill =  this.tv_total

                                          if(this.total_bill == 0){
                                                this.button_class = 'btn btn-warning col-md-4 d-none'
                                            }

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
            },

            updateAssessment(){


                    var bodyFormData = new FormData();

                    bodyFormData.append('Qty_'+this.radio_enumeration_id, this.radio); 

                    bodyFormData.append('Qty_'+this.tv_enumeration_id, this.tv); 

                    bodyFormData.append('Qty_'+this.computer_enumeration_id, this.computer); 

                    bodyFormData.append('Rate_'+this.radio_enumeration_id, this.radio_rate); 

                    bodyFormData.append('Rate_'+this.tv_enumeration_id, this.tv_rate); 

                    bodyFormData.append('Rate_'+this.computer_enumeration_id, this.computer_rate);
                    
            
                    console.log(bodyFormData)

                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: true,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                this.axios({
                    method: 'post',
                    url: 'https://micro.rtvrs.com.ng/api/Assessment',
                    data: bodyFormData,
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((response)=>{
                     this.total_bill = this.radio_total + this.tv_total + this.computer_total
                    toast.success('Assessment Updated');
                    
                      if(this.total_bill){
                        this.button_class = 'btn btn-warning col-md-4'
                    }
                    console.log(response)
                    loader.hide()
                })
                .catch((response)=>{
                    console.log(response)
                })

            },
          
        },

            mounted() {
                this.getBusinessProfiles()

              
                // this.calculate_radio_total(this.tv, this.tv_rate)
                // this.calculate_tv_total(this.tv, this.tv_rate)
                // this.calculate_computer_total(this.tv, this.tv_rate)
            
            },
        
    }
</script>