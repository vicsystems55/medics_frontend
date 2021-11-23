<template >
    <div>
         <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Resources</h1>
                </div>

                <div class="col-md-6">
                      <div class="form-group">
                          <label for="">State Code</label>
                        <input type="text" class="form-control" v-model="state_code">
                    </div>
                    <div class="form-group">
                        <label for="">Business Name</label>
                        <input type="text" class="form-control" v-model="business_name">
                    </div>
                    <div class="form-group text-center">
                        <button class="btn btn-primary col-md-4 " @click="submit()">Submit</button>
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
             fullPage: false,
             state_code: '',
             business_name: '',
        }
    },

    methods: {
                submit() {

                     

                        let loader = this.$loading.show({
                            // Optional parameters
                            container: this.fullPage ? null : this.$refs.formContainer,
                            canCancel: true,
                            onCancel: this.onCancel,
                            color: '#6CC3EC',
                        });

                       this.axios.post('/user', {

                            StateCode: this.state_code,
                            BusinessName: this.business_name

                        })
                        .then(function (response) {

                            console.log(response);

                            loader.hide()
                        })
                        .catch(function (error) {

                            console.log(error);

                            toast.error('error');

                            loader.hide()
                        });

                  
                    },

                    onCancel() {
                        console.log('User cancelled the loader.')
                    }

 
    },
    
}
</script>