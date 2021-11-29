<template>
    <div>
   
<div class="container">
         <h2>Assessment</h2>
        <div class="p-3"></div>
    <div class="row">
    <div class="col-3">
        <h6>Equipment Type:</h6>
        <div class="form-group">
            <input type="text" class="form-control" value="TV" disabled>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" value="Radio" disabled>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" value="Computer" disabled>
        </div>
    </div>

    <div class="col-3">
        <h6>Quantity:</h6>
        <div class="form-group">
            <input type="number" class="form-control" value="1">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" value="1">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" value="1">
        </div>
    </div>

    
    <div class="col-3">
        <h6>Rate</h6>
        <div class="form-group">
            <input type="number" class="form-control" value="1200">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" value="1200">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" value="1200">
        </div>
    </div>

    <div class="col-3">
        <h6>Total</h6>
        <div class="form-group">
            <input type="number" class="form-control" value="">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" value="">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" value="">
        </div>
    </div>
</div>
</div>

<div class="container text-center py-3">
    <button class="btn btn-primary col-md-4"> Submit</button>
</div>
        


        
    </div>
</template>
<script>
    import { useToast } from 'vue-toastification'

    const toast = useToast()
    export default {

        data() {
            return {
                businessProfile: []
            }
        },

        methods: {
            getBusinessProfiles(){
                alert(this.$route.params.id)
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


                                        console.log(response)

                                        this.businessProfile = response.data

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
            }
        },

            mounted() {
                this.getBusinessProfiles()
            },
        
    }
</script>