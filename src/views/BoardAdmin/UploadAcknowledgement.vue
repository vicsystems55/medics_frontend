<template>
   <div>
         <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Upload Acknowledgement</h1>
                </div>
              
            </div>

            <div class="container">
                    <div class="form-group mx-auto text-center">
                        <img 
                        onclick="document.getElementById('customFile').click()" 
                        id="previewImg" 
                        style="height: 250px; width: 200px; object-fit: cover; border-radius: 20px;" 
                        class="shadow" 
                        src="https://www.lifewire.com/thmb/8MhWKwi4GEGiYRT6P56TBvyrkYA=/1326x1326/smart/filters:no_upscale()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg" >

                    </div> 
                    <div class="form-group d-none">
                        <select v-model="document_type" id=""></select>
                    </div>
                    <div class="form-group text-center d-none">
                        <input type="date" name="" class="col-md-4 mx-auto shadow input" id="">
                    </div>   
                    <div class="text-center d-none">
                        <input @change="previewFile4" ref="file" type="file" id="customFile"  > 
                    </div>
                    <div class="form-group text-center">
                        <button @click="uploadFile" class="btn btn-primary">
                            Upload
                        </button>
                    </div>

            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            file: ''
        }
    },
    methods: {
         previewFile4(event){


            console.log(event)

               if(event.target.files.length > 0){
                var src = URL.createObjectURL(event.target.files[0]);
                var preview = document.getElementById("previewImg");
                preview.src = src;
                // preview.style.display = "block";
            }

             this.file = this.$refs.file.files[0];

        },
        uploadFile(){

            let formData = new FormData();
            formData.append('BusinessID', this.$route.params.id);
            formData.append('BusinessDemandNoticeID', this.$route.params.id);
            formData.append('DateIssued', Date.now());
            formData.append('PictureData','kkkkk');
            formData.append('PictureCategory', 1);

            this.axios.post('https://admin.intertradeapps.com/api/ManageBusinessDemandNotices',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(data){
              console.log(data.data);
            })
            .catch(function(){
              console.log('FAILURE!!');
            });

        }
    },
    
}
</script>
