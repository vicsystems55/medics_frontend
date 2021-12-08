<template >
    <div>
 
   
            <!-- <div class="auth-card__shape"></div>
                    <div class="auth-card__shape"></div> -->
        <main style="height: 100vh" class="d-flex align-items-center" >          
            <div class="container">
               <div class="widget mt-5 col-md-8 mx-auto">
                    <div class=" widget__wrapper">    


                        <h4 class="text-center">Enumeration Submitted Successfully</h4>  


                        <div class="text-center">
                                <router-link class="button button--primary col-md-5 mx-auto" to="/login">Return to Dashboard</router-link>
                            </div>                    
                   
                
              
                     </div> 
                </div> 
            </div>              
        </main>

    </div>

</template>

<script>



import { useToast } from 'vue-toastification'

const toast = useToast()

export default {


     



    methods: {

        togglePasswordVisibility(){
       
            if(this.passwordAttribute == 'password'){
                this.passwordAttribute = 'text'
            }else{
                this.passwordAttribute = 'password'
            }

        }
     

               
    },
    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

