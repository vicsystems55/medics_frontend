<template>
   <div class="container">
       <div class="container p-5">
           <button class="btn btn-primary shadow float-right" @click="print()">Print</button>
       </div>
        <div id="printMe" style="min-height: 312px; width: 730px;" class="container shadow bg-white py-5">
            <h4 class="text-center">KADUNA STATE INTERNAL REVENUE SERVICE</h4>
            <h6 class="text-center">HEAD OFFICE: OBASANJO HOUSE, YAKUBU GOWON WAY, KADUNA</h6>
       <table class="table">
           <tr>
               <td>Name</td>
               <td>{{businessName}}</td>
               <td>TIN</td>
               <td></td>
           </tr>

            <tr>
               <td>Address</td>
               <td>{{businessAddress}}</td>
               <td>Assesment No.</td>
               <td></td>
           </tr>

            <tr>
               <td>Phone</td>
               <td>{{businessPhoneNo}}</td>
               <td>Date:</td>
               <td></td>
           </tr>
       </table>
        <p class="px-5">
            In pursuance of Section 7(4th Schedule of the 1999 constitution), Section 98 and Section 99 (a, b, and c) of the Kaduna State Tax (codification and Consolidation) Law, 2020 which impose a tax on ownership of device or equipment capable of receiving and transmitting   radio and television broadcast content in the state. A notice of assessment is hereby served on you in respect of the device(s) usage for the year(s) stated below;
        </p>
        <table class="table">
            <tr>
                <td>ASSESSMENT PERIOD</td>
                <td>2020</td>
                <td>2021</td>
            </tr>

              <tr>
                <td>Device Type</td>
                <td>TV SET</td>
                <td>TV SET</td>
            </tr>

              <tr>
                <td>Number of Devices</td>
                <td>92</td>
                <td>92</td>
            </tr>

              <tr>
                <td>Annual Rate per Device</td>
                <td>N3,600 </td>
                <td>N3,600 </td>
            </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <p class="px-5">
            You are kindly requested to pay the tax due totaling ₦662,400 to Kaduna State IGR account in any bank using the Payment ID 100001 within seven (7) days from the date of service of this notice.
        </p>

        <p>Thank you</p>

        <p>Executive Chairman</p>
         
    



        
    </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            demandNoticeData: [],
            businessName: '',
            businessAddress: '',
            businessPhoneNo: '',
            output: null
        }
    },
    methods: {
        print(){
            alert('print doc');
          
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
                this.demandNoticeData = response.data
                this.businessName = response.data.businessDetails.businessName
                this.businessAddress = response.data.businessDetails.businessAddress
                this.businessPhoneNo = response.data.businessDetails.businessPhoneNo
                console.log(response.data)
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