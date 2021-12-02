<template>
   <div class="container">
          <div class="page-header">
                    <h1 class="page-header__title">Demand Notice for {{businessName}}</h1>
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
                                    <li class="breadcrumbs__item active"><span class="breadcrumbs__link">Demand Notice</span>
                                    </li>
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
    
        <div id="printMe" style="min-height: 312px; width: 730px;" class="container shadow bg-white py-5">
            <h4 class="text-center">KADUNA STATE INTERNAL REVENUE SERVICE</h4>
            <h6 class="text-center">HEAD OFFICE: OBASANJO HOUSE, YAKUBU GOWON WAY, KADUNA</h6>
            <div class="container">
                <table class="table">
                 <tr class="table__row">
                    <td class="table__td">Name</td>
                    <td class="table__td">{{businessName}}</td>
                    <td class="table__td">TIN</td>
                    <td class="table__td"></td>
                </tr>

                     <tr class="table__row">
                    <td class="table__td">Address</td>
                    <td class="table__td">{{businessAddress}}</td>
                    <td class="table__td">Assesment No.</td>
                    <td class="table__td"></td>
                </tr>

                     <tr class="table__row">
                    <td class="table__td">Phone</td>
                    <td class="table__td">{{businessPhoneNo}}</td>
                    <td class="table__td">Date:</td>
                    <td class="table__td"></td>
                </tr>
            </table>
            </div>
        <p class="px-5">
            In pursuance of Section 7(4th Schedule of the 1999 constitution), Section 98 and Section 99 (a, b, and c) of the Kaduna State Tax (codification and Consolidation) Law, 2020 which impose a tax on ownership of device or equipment capable of receiving and transmitting   radio and television broadcast content in the state. A notice of assessment is hereby served on you in respect of the device(s) usage for the year(s) stated below;
        </p>
        <div class="container">
            <h6 class="px-5">RADIO</h6>
                <table class="table table--lines">
                 <tr class="table__row">
                    <td class="table__td">ASSESSMENT PERIOD</td>
                    <td class="table__td">2020</td>
                    <td class="table__td">2021</td>
                </tr>

                 <tr class="table__row">
                    <td class="table__td">Number of Devices</td>
                    <td class="table__td">92</td>
                    <td class="table__td">92</td>
                </tr>

                 <tr class="table__row">
                    <td class="table__td">Annual Rate per Device</td>
                    <td class="table__td">N3,600 </td>
                    <td class="table__td">N3,600 </td>
                </tr>

                 <tr class="table__row">
                    <td class="table__td"></td>
                    <td class="table__td"></td>
                    <td class="table__td"></td>
                </tr>
            </table>
        </div>

        <div class="container">
                 <h6 class="px-5">TELEVISION</h6>
                <table class="table table--lines">
                 <tr class="table__row">
                    <td class="table__td">ASSESSMENT PERIOD</td>
                    <td class="table__td">2020</td>
                    <td class="table__td">2021</td>
                </tr>

          

                 <tr class="table__row">
                    <td class="table__td">Number of Devices</td>
                    <td class="table__td">92</td>
                    <td class="table__td">92</td>
                </tr>

                 <tr class="table__row">
                    <td class="table__td">Annual Rate per Device</td>
                    <td class="table__td">N3,600 </td>
                    <td class="table__td">N3,600 </td>
                </tr>

                 <tr class="table__row">
                    <td class="table__td"></td>
                    <td class="table__td"></td>
                    <td class="table__td"></td>
                </tr>
            </table>
        </div>

            <div class="container">
                 <h6 class="px-5">COMPUTERS</h6>
                <table class="table table--lines">
                 <tr class="table__row">
                    <td class="table__td">ASSESSMENT PERIOD</td>
                    <td class="table__td">2020</td>
                    <td class="table__td">2021</td>
                </tr>


                 <tr class="table__row">
                    <td class="table__td">Number of Devices</td>
                    <td class="table__td">92</td>
                    <td class="table__td">92</td>
                </tr>

                 <tr class="table__row">
                    <td class="table__td">Annual Rate per Device</td>
                    <td class="table__td">N3,600 </td>
                    <td class="table__td">N3,600 </td>
                </tr>

                 <tr class="table__row">
                    <td class="table__td"></td>
                    <td class="table__td"></td>
                    <td class="table__td"></td>
                </tr>
            </table>
        </div>

             

        <p class="px-5">
            You are kindly requested to pay the tax due totaling ₦662,400 to Kaduna State IGR account in any bank using the Payment ID 100001 within seven (7) days from the date of service of this notice.
        </p>

       <div class="px-5">
            <p>Thank you</p>

        <p>Executive Chairman</p>
       </div>
         
    



        
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