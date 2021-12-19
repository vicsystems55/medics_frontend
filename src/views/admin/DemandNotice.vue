<template>
   <div class="container">
          <div class="page-header">
                    <h1 class="page-header__title text-center">Demand Notice for {{businessName}}</h1>
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
                                        <router-link class="breadcrumbs__link active" :to="{name:'BoardAdminAssessment',params:{id:this.$route.params.id} }"><span>Assessment.</span>
                                            <svg class="icon-icon-keyboard-right breadcrumbs__arrow">
                                            <use xlink:href="#icon-keyboard-right"></use>
                                            </svg>
                                        </router-link>
                                    </li>
                                    <li class="breadcrumbs__item active"><span class="breadcrumbs__link">Demand Notice</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="page-tools__right">
                        <div class="page-tools__right-row">
                            <div class="page-tools__right-item">
                                <a class="button-icon shadow" @click="print('printMe2')">
                                    <span class="button-icon__icon">
                                        <svg class="icon-icon-print">
                                            <use xlink:href="#icon-print"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                             <div class="page-tools__right-item">
                                <a class="button-icon shadow" @click="email()">
                                    <span class="button-icon__icon">
                                        <svg class="icon-icon-email">
                                            <use xlink:href="#icon-email"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                           
                        </div>
                    </div>
                </div>
    
        <div id="printMe2" 

                style="min-height: 312px; width: 730px; " 
        class="container shadow bg-white py-5">

        <img style="position: absolute; opacity: 0.3; min-height: 700px; margin-left: 20px; min-height: 312px; width: 600px;" src="img/original.png" alt="">
        <div class="container">
                <div class="row">
                <div class="col-3">
                    <img src="state_logo/kaduna.jpg" style="height: 120px;" alt="">
                </div>
                <div class="col-9 pt-3">
                    <h4 class="text-cente">KADUNA STATE INTERNAL REVENUE SERVICE</h4>
                    <h6 class="text-centr">HEAD OFFICE: OBASANJO HOUSE, YAKUBU GOWON WAY, KADUNA</h6>
                </div>
            </div>
        </div>
   
            <div class="container">
                <table class="table ">
                 <tr class="">
                    <td class=" "><span class="font-weight-bold">Name</span></td>
                    <td class=" ">{{businessName}}</td>
                    <td class=" "><span class="font-weight">TIN</span></td>
                    <td class=" "></td>
                </tr>

                     <tr class="">
                    <td class=" "><span class="font-weight-bold">Address</span></td>
                    <td class=" ">{{businessAddress}}</td>
                    <td class=" "><span class="font-weight-bold">Assesment No.</span></td>
                    <td class=" ">{{demandNoticeData}}</td>
                </tr>

                     <tr class="table__row">
                    <td class="table__td "><span class="font-weight-bold">Phone</span></td>
                    <td class="table__td ">{{businessPhoneNo}}</td>
                    <td class="table__td "><span class="font-weight-bold">Date:</span></td>
                    <td class="table__td ">{{dateGenerated}}</td>
                </tr>
            </table>
            </div>
        <p class=" px-5">
            In pursuance of Section 7(4th Schedule of the 1999 constitution), Section 98 and Section 99 (a, b, and c) of the Kaduna State Tax (codification and Consolidation) Law, 2020 which impose a tax on ownership of device or equipment capable of receiving and transmitting   radio and television broadcast content in the state. A notice of assessment is hereby served on you in respect of the device(s) usage for the year(s) stated below;
        </p>

        <div class="container">
        

    
                <table class="table ">
                <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Assessment Period</span> </td>
                     <th v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{formatDate(device.yearsCharged)}}</th>
                     
                    <!-- <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{device.taxItemDescription}}</td> -->
                </tr>
                  <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Device Type</span> </td>
                    <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{device.taxItemDescription}}</td>
                </tr>
                 <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Number of Devices</span> </td>
                    <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{device.totalDeviceCount}}</td>
                </tr>
                <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Annual Rate per Device</span> </td>
                    <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">₦ {{formatDigit(3600)}}</td>
                </tr>
                <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Total Tax Due</span> </td>
                    <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">₦ {{formatDigit((device.totalDeviceCount) * 3600)}}</td>
                </tr>

                
                </table>

        </div>

      
             

        <p class="px-5 pt-3">
            You are kindly requested to pay the tax due totaling ₦ {{formatDigit((TotalDemandedAmount) * 3600)}} to Kaduna State IGR account in any bank using the Payment ID <span class="font-weight-bold">{{demandNoticeData}}</span> within seven (7) days from the date of service of this notice.
        </p>

       <div class="px-5">
            <p>Thank you</p>

        <p>Executive Chairman</p>
       </div>

  
   
    



        
    </div>
   </div>

      <div class="container">
          <div class="page-header pt-5">
                    <h1 class="page-header__title text-center">Acknoledgement for {{businessName}}</h1>
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
                                        <router-link class="breadcrumbs__link active" :to="{name:'BoardAdminAssessment',params:{id:this.$route.params.id} }"><span>Assessment.</span>
                                            <svg class="icon-icon-keyboard-right breadcrumbs__arrow">
                                            <use xlink:href="#icon-keyboard-right"></use>
                                            </svg>
                                        </router-link>
                                    </li>
                                    <li class="breadcrumbs__item active"><span class="breadcrumbs__link">Demand Notice</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="page-tools__right">
                        <div class="page-tools__right-row">
                            <div class="page-tools__right-item">
                                <a class="button-icon shadow" @click="print('printMe3')">
                                    <span class="button-icon__icon">
                                        <svg class="icon-icon-print">
                                            <use xlink:href="#icon-print"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                             <div class="page-tools__right-item">
                                <a class="button-icon shadow" @click="email()">
                                    <span class="button-icon__icon">
                                        <svg class="icon-icon-email">
                                            <use xlink:href="#icon-email"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                           
                        </div>
                    </div>
                </div>
    
        <div id="printMe3" 

                style="min-height: 312px; width: 730px; " 
                class="container shadow bg-white py-5">

      
        <div class="container">
                <div class="row">
                <div class="col-3">
                    <img src="state_logo/kaduna.jpg" style="height: 120px;" alt="">
                </div>
                <div class="col-9 pt-3">
                    <h4 class="text-cente">KADUNA STATE INTERNAL REVENUE SERVICE</h4>
                    <h6 class="text-centr">HEAD OFFICE: OBASANJO HOUSE, YAKUBU GOWON WAY, KADUNA</h6>
                </div>
            </div>
        </div>
   
            <div class="container">
                <table class="table ">
                 <tr class="">
                    <td class=" "><span class="font-weight-bold">Name</span></td>
                    <td class=" ">{{businessName}}</td>
                    <td class=" "><span class="font-weight">TIN</span></td>
                    <td class=" "></td>
                </tr>

                     <tr class="">
                    <td class=" "><span class="font-weight-bold">Address</span></td>
                    <td class=" ">{{businessAddress}}</td>
                    <td class=" "><span class="font-weight-bold">Assesment No.</span></td>
                    <td class=" ">{{demandNoticeData}}</td>
                </tr>

                     <tr class="table__row">
                    <td class="table__td "><span class="font-weight-bold">Phone</span></td>
                    <td class="table__td ">{{businessPhoneNo}}</td>
                    <td class="table__td "><span class="font-weight-bold">Date:</span></td>
                    <td class="table__td ">{{dateGenerated}}</td>
                </tr>
            </table>
            </div>
        <p class=" px-5">
            In pursuance of Section 7(4th Schedule of the 1999 constitution), Section 98 and Section 99 (a, b, and c) of the Kaduna State Tax (codification and Consolidation) Law, 2020 which impose a tax on ownership of device or equipment capable of receiving and transmitting   radio and television broadcast content in the state. A notice of assessment is hereby served on you in respect of the device(s) usage for the year(s) stated below;
        </p>

        <div class="container">
        

    
                <table class="table ">
                <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Assessment Period</span> </td>
                     <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{formatDate(device.yearsCharged)}}</td>
                     
                    <!-- <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{device.taxItemDescription}}</td> -->
                </tr>
                  <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Device Type</span> </td>
                    <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{device.taxItemDescription}}</td>
                </tr>
                 <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Number of Devices</span> </td>
                    <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{device.totalDeviceCount}}</td>
                </tr>
                <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Annual Rate per Device</span> </td>
                    <!-- <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">{{device.applicabeRate}}</td> -->
                     <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">₦ {{formatDigit(3600)}}</td>
                    
                </tr>
                <tr class="table__row">
                    <td class="table__td border"> <span class="font-weight-bold">Total Tax Due</span> </td>
                    <td v-for="device in demandNoticeDetails2020" :key="device.id" class="table__td border">₦ {{formatDigit((device.totalDeviceCount) * 3600)}}</td>
                </tr>

                
                </table>

        </div>

      
             

        <p class="px-5 pt-3">
            You are kindly requested to pay the tax due totaling ₦ {{formatDigit((TotalDemandedAmount) * 3600)}} to Kaduna State IGR account in any bank using the Payment ID <span class="font-weight-bold">{{demandNoticeData}}</span> within seven (7) days from the date of service of this notice.
        </p>

       <div class="px-5">
            <p>Thank you</p>

        <p>Executive Chairman</p>
       </div>

        <div class="container">
           <div class="row">
               <div class="col-md-6">

               </div>
               <div class="col-md-6">
                   <hr class="border border-dark">
                   <h6 class="mb-5">Name</h6>

                   <hr class="border border-dark">
                   <h6>Signature and Date</h6>
               </div>
           </div>
       </div>
   
    



        
    </div>
   </div>

     
</template>

<script>
import moment from 'moment'

export default {
    data() {
        return {
            demandNoticeData: '',
            demandNoticeDetails2020: [],
            demandNoticeDetails2021: [],
            demandNoticeDetails: [],
            businessName: '',
            businessAddress: '',
            businessPhoneNo: '',
            output: null,
            dateGenerated:'',
            TotalDemandedAmount: ''
         
        }
    },
    methods: {

        formatDate(rawDate){
        //  console.log(new Intl.NumberFormat('en-IN',{
        //     minimumFractionDigits: 2,
        //     maximumFractionDigits: 2,
        //     } ).format(32313234));
         return moment(rawDate).format('YYYY');
        },

        formatDigit(digits){
     
            return new Intl.NumberFormat('en-US',{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            } ).format(digits)
        },
        print(id){
            alert('print doc');

            var printContents = document.getElementById(id).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;
          
        },
        getDemandNotice(){
            let loader = this.$loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: true,
                onCancel: this.onCancel,
                color: '#6CC3EC',
            });
            this.axios({
                method: 'get',
                url: 'https://micro.rtvrs.com.ng/api/BusinessDemandNotices/'+this.$route.params.id
            })
            .then((response)=>{
                this.demandNoticeDetails = response.data.demandNoticeDetails
                this.demandNoticeData = (response.data.currentDemandNotice.businessDemandNoticeCode)
                this.dateGenerated = response.data.currentDemandNotice.dateGenerated


                this.dateGenerated = moment(this.dateGenerated).format('YYYY-MM-DD')



                console.log(moment(this.dateGenerated).format('YYYY-MM-DD'))
                this.businessName = response.data.businessDetails.businessName
                this.businessAddress = response.data.businessDetails.businessAddress
                this.businessPhoneNo = response.data.businessDetails.businessPhoneNo
                // alert('demand details')

               
                    // this.demandNoticeDetails2020 = this.demandNoticeDetails
                    // .filter(element => 
                    // (new Date(element.yearsCharged))
                    // .getFullYear() =='2020')

                    this.demandNoticeDetails2020 = this.demandNoticeDetails
                    .filter(element => 
                    (element.taxItemDescription
                    =='Commercial TV'))

                    this.TotalDemandedAmount = this.demandNoticeDetails2020[0].totalDeviceCount + this.demandNoticeDetails2020[1].totalDeviceCount
        
                    // alert(this.TotalDemandedAmount)


           
                    this.demandNoticeDetails2021 = this.demandNoticeDetails
                    .filter(element2 => 
                    (new Date(element2.yearsCharged))
                    .getFullYear() =='2021')
               



                //  console.log(this.demandNoticeDetails)
                loader.hide()
            })
            .catch((response)=>{
                console.log(response)
            })
        }
    },
    mounted() {
        this.getDemandNotice()
    },
}
</script>

