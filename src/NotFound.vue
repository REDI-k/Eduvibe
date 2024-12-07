<template>
  <div class="relative flex-col min-h-screen bg-No">
    <div class="w-full z-10 fixed md:absolute">
      <BareNav />
    </div>
    <div class="w-full flex justify-center relative top-10">
      <div>
        <img :src="NoFound" alt="" class="">
        <h1 class="text-white text-center  text-4xl font-bold">404</h1>
        <p class="text-white text-center">La page que vous cherchez n'existe pas.</p>
      </div>
   
    </div>
    
  </div>
</template>

<script>
import NoFound from '../src/assets/404/404.png'
import BareNav from './components/BareNav.vue';
export default {
  name: 'NotFound',
components:{
BareNav
},
data(){
 return{
  NoFound
 }
}
}
</script>


