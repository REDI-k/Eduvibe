<template>
  <!-- w-full z-0  relative bottom-44 flex justify-evenly -->
  <div class="w-full z-0  relative bottom-44 lg:flex lg:justify-center">
    <div class="lg:w-[100%] z-0  lg:flex lg:justify-between">
    <div class="flex justify-center lg:w-[50%] lg:relative lg:left-12">
      <!-- absolute top-12 left-16 w-[500px] h-[500px] rounded-full opacity-50 z-0 -->
        <div class="hidden lg:absolute lg:top-12 lg:left-16 lg:w-[500px] lg:h-[500px] lg:rounded-full lg:opacity-50 z-0"
         style="background: radial-gradient(circle, rgba(54,211,245,0.1) 0%, rgba(54,211,245,0.1) 40%, transparent 70%); filter: blur(10px);"></div>
         <div class="flex justify-center w-[1000px]">
           <div class="w-[%]"> 
              <p><img :src="Google" class="h-10 z-0 relative left-24" alt="Logo Google"></p> 
              <p class=""><img :src="Facebook" class="h-10 z-0 relative top-48 left-16" alt="Logo Facebook"></p>
            </div>
            <div class="">
              <img :src="Homme" class="h-h-v w-[100%] flex justify-center" alt="Image Personne" >
            </div>
            <div class="w-[10%] relative">
              <p><img :src="Instagram" class="z-0 h-14 relative right-10 top-24 lg:relative lg:right-14" alt="Logo Instagram"></p>
              <p><img :src="Youtube" class="h-10 z-0 relative top-64 right-6 lg:right-12"  alt="Logo Youtube"></p>
            </div>
         </div>
    </div>

    <div class="relative top-20 w-full lg:w-[50%]">
       <div class="hidden z-0 lg:flex justify-between w-full">
        <p class="relative"><img :src="Linkedln" class="h-10 z-0 relative bottom-10 left-5" alt="Logo Linkedln"></p>
        <p class="relative"><img :src="Pinterest" class="h-10 z-0 relative right-5 lg:relative lg:right-36 top-80" alt="Logo Pinterest"></p>
       </div>

       
      <div>
        <p class="text-by text-center lg:text-start">APPRENEZ ENCORE PLUS</p>
        <h1 class="text-white relative top-6 font-bold text-4xl text-center lg:text-start lg:w-96">Explorez de nouveaux savoirs pour aller<br> plus loin</h1>
        <div class="ml-2"><p class="text-tr text-justify relative top-10  mr-3  lg:w-96">Découvrez des ressources et des outils avancés pour approfondir vos connaissances, renforcer vos compétences et
          progresser à votre rythme vers de nouveau objectifs.</p></div>
        <!-- <div class="absolute top-96 left-16 w-[300px] h-[300px] rounded-full opacity-90 z-0"
         style="background: radial-gradient(circle, rgba(6,94,17,1) 0%, rgba(6,94,17,1) 40%, transparent 70%); filter: blur(200px);"></div>  -->
        <div class="flex justify-center lg:flex lg:justify-start  relative top-12">
          <button class="text-white mt-8 bg-by py-2 px-4 custom-shadow"  @click="showModal = true">Commencez</button>
          <button class="text-white mt-8 border-2 border-by py-2 px-4 custom-shadow"  @click="showModal = true">Plus d'infos</button>
       </div>
     </div>
    </div>

   </div>

  </div>
     <div class="absolute w-full z-[1000]">
      <div @click="showModal = true"></div>
      <ModalC :showModal="showModal" :closeModal="closeModal" :Illustration="Illustration" />
  </div>
</template>

<script>
import ModalC from './ModalC.vue'
import Homme from '../assets/Other/1.png'
import Google from '../assets/Network/Google(2).png'
import Instagram from '../assets/Network/Instagram(1).png'
import Linkedln from '../assets/Network/Linkedln(2).png'
import Youtube from '../assets/Network/Youtube(2).png'
import Facebook from '../assets/Network/Facebook(2).png'
import Pinterest from '../assets/Network/Pinterest(1).png'
import Illustration from '../assets/Contact/Illustration.gif';
export default {
 name: 'WebSite',
  components: {
    ModalC
  },
  data() {
    return {
      Homme,
      Google,
      Linkedln,
      Instagram,
      Youtube,
      Facebook,
      Pinterest,
      Illustration,
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false; 
    }
  }
};
</script>






<style scoped>
</style>
