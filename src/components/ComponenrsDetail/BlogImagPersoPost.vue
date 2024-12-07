<template>
    <div class="">
        <div class="flex justify-center"><img :src="PostProfilImage" alt=""  class="rounded-full w-14 h-14"></div> 
        <div class="flex justify-center">
           <p class="text-white justify-center">{{  NamePersoPoste }}</p>
        </div>
    </div>
</template>

<script>
export default{
 name:"BlogImagPersoPost",
 props:{
     PostProfilImage:{type:String, required:true},
     NamePersoPoste:{type:String, required:true}
 }
}
</script>