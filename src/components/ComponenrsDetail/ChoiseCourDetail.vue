<template>
<div class="h-96 w-72  bg-sss">
  <div class="flex justify-center mt-2 w-full">
    <div class="w-full ml-3">
        <h2 class="text-tr font-semibold text-4xl">{{ TitleForm }}</h2>
        <div class="mt-10">
            <div class="flex items-center">
                <img :src="Pl" class="w-10 h-10"   
                      style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) brightness(100%) contrast(98%);"> 
                      <p class="text-tr">{{ AvatageOne }}</p>
            </div>
            <div class="flex items-center">
                <img :src="Pl" class="w-10 h-10"   
                      style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) brightness(100%) contrast(98%);"> 
                <p class="text-tr">{{ AvatageTwo }}</p>
            </div>
            <div class="flex items-center">
               <img :src="Pl" class="w-10 h-10"   
                style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) brightness(100%) contrast(98%);"> 
                <p class="text-tr">{{  AvatageThree }}</p>
            </div> 
            <div class="flex items-center">
               <img :src="Pl" class="w-10 h-10"   
                style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) brightness(100%) contrast(98%);"> 
                <p class="text-tr">{{ AvatageFor }}</p>
            </div>
        </div>
        <div class="w-full flex justify-center">
            <button class="h-10 w-64 bg-by flex justify-center items-center text-white mt-10">Commencer</button>
        </div>
    </div>
   </div>
</div>
</template>

<script>
import Pl from '../../assets/Favicon/okey(1).png'
export default{
 name:'ChoiseCourDetail',
 props:{
  TitleForm:{
    type:String,
    required:true
  },
  AvatageOne:{
    type:String,
    required:true
  },
  AvatageTwo:{
    type:String,
    required:true
  },
  AvatageThree:{
    type:String,
    required:true
  },
  AvatageFor:{
    type:String,
    required:true
  }
 },
data(){
  return{
    Pl 
  }
  
}

}

</script>