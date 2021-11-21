<template lang="">
    <div>
         <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Messages</h1>
                </div>

        
            <div class="">
                <div class="col-md-12">

                </div>
                <h3>DELTA RTVRS VEHICLE INTEGRATION API</h3>

                <div class="">
                    <div class="row">
                        <div class="col-md-6">
                            <input id="CollectionAgentKey" style="font-size:large;text-align:center" v-model="CollectionAgentKey" readonly="readonly" class="input shadow" type="text" >

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label" for="VehicleRegNo">Vehicle Reg No</label>
                                <input id="VehicleRegNo" class="input shadow" type="text" v-model="VehicleRegNo">
                                <span class="text-danger field-validation-valid" data-valmsg-for="VehicleRegNo" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="VehicleChassesNo">Vehicle Chasses No</label>
                                <input id="VehicleChassesNo" class="input shadow" type="text" v-model="VehicleChassesNo">
                                <span class="text-danger field-validation-valid" data-valmsg-for="VehicleChassesNo" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="PaymentRefNo">Payment Ref No</label>
                                <input id="PaymentRefNo" class="input shadow" type="text" v-model="PaymentRefNo" >
                                <span class="text-danger field-validation-valid" data-valmsg-for="PaymentRefNo" data-valmsg-replace="true"></span>
                            </div>
                        
                            <div class="form-group">
                                 <label class="control-label" for="AmountPaid"> Amount Paid</label>
                                 <input type="number" id="AmountPaid" class="input shadow"  data-val="true" data-val-number="The field AmountPaid must be a number." data-val-required="The AmountPaid field is required." v-model="AmountPaid" >
                                 <span class="text-danger field-validation-valid" data-valmsg-for="AmountPaid" data-valmsg-replace="true"></span>
                             </div>



                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label" for="DatePaid">Date Paid</label>
                                <input type="date" id="DatePaid" class="input shadow" v-model="DatePaid" >
                                <span class="text-danger field-validation-valid" data-valmsg-for="DatePaid" data-valmsg-replace="true"></span>
                            </div>

                            <div class="form-group">
                                <label class="control-label" for="PaymentModeChanel">Payment Mode Chanel</label>

                                <select id="PaymentModeChanel" class="input shadow" v-model="PaymentModeChanel">
                                    <option value="">Payment Mode/Chanel </option>
                                    <option value="Cash">Cash</option>
                                    <option value="Bank">Bank</option>
                                    <option value="Card">Card</option>
                                    <option value="Others">Others</option>

                                </select>
                                <span class="text-danger field-validation-valid" data-valmsg-for="PaymentModeChanel" data-valmsg-replace="true"></span>
                            </div>

                            <div class="form-group">
                                <label class="control-label" for="OwnerAddressLGA">Car Owner Address LGA</label>

                                <select id="OwnerAddressLGA" class="input shadow" v-model="OwnerAddressLGA">
                                    <option value="">Select Car Owner Address LGA </option>
                                    <option value="ANIOCHA NORTH">ANIOCHA NORTH</option>
                                    <option value="ANIOCHA-SOUTH">ANIOCHA-SOUTH</option>
                                    <option value="BOMADI">BOMADI</option>
                                    <option value="BURUTU">BURUTU</option>
                                    <option value="ETHIOPE  EAST">ETHIOPE  EAST</option>
                                    <option value="ETHIOPE  WEST">ETHIOPE  WEST</option>
                                    <option value="IKA NORTH- EAST">IKA NORTH- EAST</option>
                                    <option value="IKA-SOUTH">IKA-SOUTH</option>
                                    <option value="ISOKO NORTH">ISOKO NORTH</option>
                                    <option value="ISOKO SOUTH">ISOKO SOUTH</option>
                                    <option value="NDOKWA EAST">NDOKWA EAST</option>
                                    <option value="NDOKWA WEST">NDOKWA WEST</option>
                                    <option value="OKPE">OKPE</option>
                                    <option value="OSHIMILI-NORTH">OSHIMILI-NORTH</option>
                                    <option value="OSHIMILI-SOUTH">OSHIMILI-SOUTH</option>
                                    <option value="PATANI">PATANI</option>
                                    <option value="SAPELE">SAPELE</option>
                                    <option value="UDU">UDU</option>
                                    <option value="UGHELLI NORTH">UGHELLI NORTH</option>
                                    <option value="UGHELLI SOUTH">UGHELLI SOUTH</option>
                                    <option value="UKWUANI">UKWUANI</option>
                                    <option value="UVWIE">UVWIE</option>
                                    <option value="WARRI  NORTH">WARRI  NORTH</option>
                                    <option value="WARRI SOUTH">WARRI SOUTH</option>
                                    <option value="WARRI SOUTH  WEST">WARRI SOUTH  WEST</option>


                                </select>

                                <span class="text-danger field-validation-valid" data-valmsg-for="OwnerAddressLGA" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="NextRenewalDate">Next Renewal Date</label>
                                <input type="date" id="NextRenewalDate" class="input shadow" v-model="NextRenewalDate" >
                                <span class="text-danger field-validation-valid" data-valmsg-for="NextRenewalDate" data-valmsg-replace="true"></span>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div class="row">
    <input v-model="RequestVerificationToken" type="hidden">
                <div class="col-md-4 mx-auto">
                    <div class="form-group tex-center py-2">
                        <button class="btn btn-primary btn-block btn-lg shadow" @click="PostTransaction()">Submit</button>
                        <br />
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-md-5">
                    <div class="form-group">
                        <div id="Server_response" style="background-color:lightblue;height:60px;color:black;font-size:smaller">

                        </div>
                    </div>
                </div>
            </div>
        

        
                
            </div>
    </div>
</template>

<script>
// import axios from 'axios'
import { useToast } from "vue-toastification";

export default {
        setup() {
      // Get toast interface
      const toast = useToast();

      return { toast }
    },
    data() {
        return {
            VehicleRegNo : '',
            VehicleChassesNo : '',
            PaymentRefNo : '',
            AmountPaid : '',
            DatePaid : '',
            PaymentModeChanel : '',
            OwnerAddressLGA : '',
            NextRenewalDate : '',
            RequestVerificationToken : 'CfDJ8ImqtKLov5tCsiYEf-FC5ZLlM1HZPJ0oFdM8-aFvfikEnWFr5ZiuT6Db8d96rlUxq3w-uYYVaX_aC9vrWSg-bnGkMb24rqdYh6h1etParOiTvDIS8nbzyiWirI3Le8zUwBW2OR3NCwkZyQmpvDfJPvEWgE3NUcEBuBMToYfrgUf6PsylqZDgNTYgKCVxUwDlpQ',
            CollectionAgentKey: '72348933D3764E128BA46E24B8E1090B',
        }
    },
    methods: {
        PostTransaction(){

            alert(this.RequestVerificationToken);


                let url = 'https://www.rtvrs.com.ng/api/rtvrsvehicle';
       

            var VehicleRegNo =  this.VehicleRegNo;
            var VehicleChassesNo = this.VehicleChassesNo;
            var OwnerAddressLGA = this.OwnerAddressLGA;
            var AmountPaid = this.AmountPaid;
            var DatePaid = this.DatePaid;
            var NextRenewalDate = this.NextRenewalDate;
            var PaymentModeChanel =   this.PaymentModeChanel;
            var PaymentRefNo =   this.PaymentRefNo;
            var CollectionAgentKey =   this.CollectionAgentKey; 
             
            var formdata = new FormData();
            formdata.append("VehicleRegNo", VehicleRegNo);
            formdata.append("VehicleChassesNo", VehicleChassesNo);
            formdata.append("OwnerAddressLGA", OwnerAddressLGA);
            formdata.append("AmountPaid", AmountPaid);
            formdata.append("DatePaid", DatePaid);
            formdata.append("NextRenewalDate", NextRenewalDate);
            formdata.append("PaymentModeChanel", PaymentModeChanel);
            formdata.append("PaymentRefNo", PaymentRefNo);
            formdata.append("CollectionAgentKey", CollectionAgentKey);

            var request = new XMLHttpRequest(); 
            request.open("POST", url, true);
            request.send(formdata); 
            request.onloadend = function ()
            {
                if (request.status == 200)
                {

                    
                alert('Successfull');
                  
                }
            }


        }
    },
}
</script>