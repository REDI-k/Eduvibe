<template>
<div class="w-80 h-96 rounded-md  bg-sss relative mb-14">
  <div class="absolute top-2 left-1/2 transform -translate-x-1/2">
    <img :src="ImgCours" alt="Logo Cours" class="w-32">
  </div>
  <div class="absolute top-20 left-1/2 transform -translate-x-1/2">
    <p class="text-white">{{ NameCours }}</p>
  </div>
  <div class="absolute top-32 w-full px-4">
    <p class="text-tr text-2xl font-semibold ">{{ TitleCours }}</p>
    <p class="text-tr w-ww md:w-ws mt-5">{{ Description }}</p>
  </div>
  <div class="absolute bottom-2 w-full bg-by">
    <p class="flex justify-center py-2 text-white cursor-pointer">Lire plus</p>
  </div>
</div>


</template>

<script>

export default{
 name:"CourseDetaille",
 props:{
    ImgCours:{
     type:String,
     required:true
    },
    NameCours:{
        type:String,
        required:true
    },
    TitleCours:{
      type:String,
      required:true
    },
    Description:{
     type:String,
     required:true
    }
    },data(){
      return{
     
      }
    }
  
  }




</script>