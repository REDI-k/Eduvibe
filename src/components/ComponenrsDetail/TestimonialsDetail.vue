<template>
 <div class="w-72 h-48 rounded-ml flex justify-center" style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)" >
    <div class="mt-2">
       <div class="w-full flex justify-center"><img :src="ImageUser" alt="Image Ancien Apprenant" srcset="" class="rounded-full w-10 h-10" ></div>
         <p class="flex justify-center text-fg text-xs">{{ NamePost }}</p>
         <p class="text-by flex justify-center">{{ NameUser }}</p>
         <p class="text-fg text-center mt-3">{{ Testimonial }}</p>
    </div>
 </div> 
</template>

<script>
export default{
name:'TestimonialsDetail',
props:{
NamePost:{
 type:String,
 required:true
},
NameUser:{
type:String,
required:true
},
Testimonial:{
type:String,
required:true
},
ImageUser:{
 type:String,
 required:true
}
}
}
</script>