<template>
  <div class="">
    <div class="rounded flex justify-center  h-52 w-52 pr-2 pl-1 bg-transparent text-start text-white  focus:outline-none focus:ring-0"
      style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)">
      <div class="w-11 h-10 rounded flex justify-center mt-2 ">
        <img :src="ImgS" class="" alt="Favicon Illustration Service">
      </div>
    </div>
    <div>
      <div class="flex justify-center relative bottom-36">
        <h2 class="text-white font-medium">{{ TitleS }}</h2>
      </div>
      <div class="flex justify-center relative bottom-32">
        <p class="text-wx w-44 text-center">{{ Description }}</p>
      </div>
    </div>
  </div>
</template>
<script>


export default{
 name:'ServiceC',
 props:{
  ImgS:{
    type:String,
    required:true,
  },
  TitleS:{
   type:String,
   required:true,
  },
  Description:{
   type:String,
   required:true,
  }

 }

}
</script>