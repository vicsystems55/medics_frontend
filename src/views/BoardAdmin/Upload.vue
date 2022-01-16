<template>
   <div>
         <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Upload Acknowledgement</h1>
                </div>




                
                
            </div>

            <div class="container">

               <div class="form-group mx-auto text-center">
                        <img id="previewImg" style="height: 200px; width: 200px; object-fit: cover; border-radius: 20px;" class="shadow" src="{{asset('featured_images/2.jpg')}}" >

                    </div> 

                    <div class="c text-center">
                        <button class="btn btn-primary">Select File</button>
                    </div>
                        
                    <div class="custom-file mb-5 mt-3 text-center ">
                        <input onchange="previewFile4(this.id);" type="file" name="file" class="custom-file-input col-md-4" id="customFile">
                        <label class="custom-file-label" for="customFile">Book cover</label>
                    </div>





            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
