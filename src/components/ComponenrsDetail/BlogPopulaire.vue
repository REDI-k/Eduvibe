<template>
  <div class="cursor-pointer">
    <img :src="ImageBlogs" alt="" class="w-80 h-64 mt-6 rounded-2xl">
    <p class="text-fg font-semibold text-justify w-56">{{ TitleBlogP }}</p>
    <div class="flex  items-center mt-1 relative right-3">
        <img :src="ImgProfil" alt="" class="w-10 h-10 rounded-full">
        <p class="text-sm text-by mb-2 ml-2">{{  NameProfil }}</p>
        <p class="text-sm text-white mb-2 ml-4">{{ DatePublicP }}</p>
    </div>
  </div>
</template>
<script>

export default{
name:'BlogPopulaire',
props:{
 ImageBlogs:{type:String, required:true},
 TitleBlogP:{type:String, required:true},
 DatePublicP:{type:String, required:true},
 ImgProfil:{type:String, required:true},
 NameProfil:{type:String, required:true}
},
data(){ 
    return {  }
  }
}
</script>