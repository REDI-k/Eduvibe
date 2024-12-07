<template>
   <div class="h-48 w-80 ml-4" 
    style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%);">
    
      <p class="text-white ml-5 relative top-8 font-normal">{{ title }} </p>
      <p class="text-tr ml-5 relative top-9 text-justify w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis cum 
        quae commodi tenetur</p>
          
    </div>
</template>

<script>
export default{
name:"OurServices",
props:{
    title:{
        type:String,
        required:true
    }

}
}

</script>