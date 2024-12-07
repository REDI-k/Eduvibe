<template>
  <div class="cursor-pointer">
    <img :src="ImagePost" alt="" class="h-36 w-56 mt-6">
    <p class="text-fg font-semibold text-justify  w-56">{{ titlePost }}</p>
    <div class="flex  items-center mt-1 relative right-3">
        <img :src="Date" alt="" class="w-12 h-12">
        <p class="text-sm text-by mb-2">{{ datePublication }} </p>
    </div>
  </div>
</template>
<script>
import Date from '../../assets/Favicon/Date-Heure.png'
export default{
name:"BlogSection",
props:
 {
  datePublication:{ type:String, required:true},
  titlePost:{type:String, required:true},
  ImagePost:{type:String, required:true}
 },
data(){
  return{ Date:Date }
 }
}
</script>