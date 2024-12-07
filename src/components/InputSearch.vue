<template>
  <div class="flex justify-center relative top-10">
    <div class=" mt-2 relative">
      <input type="search" placeholder="Faites vos recherche ici..." :class="styleInput" 
      style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%);">
        <img :src="searchIcon" alt="Search Icon" :class="styleImg" />
    </div>
  </div>
</template>
<script>
import searchIcon from '@/assets/search(2).png';
export default{
name:'InputSearch',
props:{
     styleInput:{
        type:String,
        required:true
     },
     styleImg:{
        type:String,
        required:true
     }
    },
data(){
    return{
   searchIcon:searchIcon
    }
}
}
</script>