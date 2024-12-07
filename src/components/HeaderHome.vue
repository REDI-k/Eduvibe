<template>
  <div class="z-2 md:mt-5 relative top-14 mb-24 w-[100%] lg:flex lg:justify-between">
    <div class="flex justify-center w-full">
      <div class="w-full xl:relative lg:relative lg:left-9 xl:left-20">
        <p class="text-by text-center lg:text-start lg:ml-3">VOTRE ALLIE DANS L'APPRENTISSAGE EN LIGNE</p>
        <h1 class="text-white font-bold mt-5 text-5xl md:text-6xl capitalize font-rounded md:text-center lg:text-start lg:ml-3 ml-8">Apprenez avec<br>passion et<br>développez vos <br>talents</h1>
        <p class="text-tr mt-8 md:text-center ml-2 lg:text-start lg:ml-3 lg:w-96 xl:w-full">Transformez votre savoir avec des cours en ligne, progressez à votre rythme,<br> où que vous soyez.</p>
        <div class="flex justify-center mb-8 lg:flex lg:justify-start lg:ml-2">
          <button class="text-white mt-8 bg-by py-2 px-4 custom-shadow cursor-pointer" @click="showModal = true">Commencez maintenant</button>
        </div> 
      </div> 
    </div>
    <div class="w-full flex justify-center bg-b-main">
      <div class="w-full">
        <div class="flex justify-center"><img :src="Image1" alt="Image illustration cours" class="lg:w-w-v w-wc h-96"></div> 
        <div class="flex justify-center relative top-4">
          <p class="text-tr">Apprenez plus avec la nouvelle application</p>
          <span class="text-by cursor-pointer">TéléEduc</span>
        </div>
      </div>
    </div>

   
   <div class="absolute w-full z-[1000]">
    <div @click="showModal = true"></div>
    <ModalC :showModal="showModal" :closeModal="closeModal" :Illustration="Illustration" />
  </div>
  </div> 
</template>

<script>
import Illustration from '../assets/Contact/Illustration.gif';
import ModalC from './ModalC.vue';
import Image1 from '../assets/Header/Live.png';

export default {
  name: 'HeaderHome',
  components: {
    ModalC
  },
  data() {
    return {
      Image1,
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
