<template>
<div class="w-full bg-nav  h-[65px] mb-9 overflow-x-hidden md:bg-opacity-1 md:bg-transparent  ">
  <!-- Section supérieure -->
  <div class="md:flex items-center">


  <div 
    class="flex justify-between transition-all duration-[4000ms] ease-out opacity-0 translate-y-1   z-[1000]"
    :class="{'opacity-100 translate-y-0': hasLoaded}">
    <div class="flex justify-start w-[20%] h-14 z-[1000]">
      <router-link to="/">
        <h1 class="text-white font-semibold text-3xl ml-2 italic mt-2 md:ml-5 z-[1000]">
          EduVibe
        </h1>
      </router-link>
    </div>
  </div>

  <div class="absolute right-1 w-full z-[999] bg-b-main overflow-hidden md:bg-opacity-1 md:bg-transparent">
 <button
    class="fixed top-[-22px] z-[1000] right-1 md:hidden text-gray-600 focus:outline-none h-5"
    @click="toggleMenu"
    aria-label="Ouvrir le menu">
    <div class="w-full z-[999]">
        <!-- Si le menu est ouvert, afficher la croix en SVG local, sinon afficher l'icône de menu -->
        <div v-if="menuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6  mr-5 mt-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
        <img v-else :src="Nav" alt="Menu" class="w-24 h-16 mt-5">
    </div>
</button>


    <div 
      :class="{'block': menuOpen, 'hidden': !menuOpen}" 
      class="fixed inset-0 bg-b-main flex z-[999] w-full md:flex md:bg-opacity-1 md:bg-transparent md:relative md:inset-auto">
      <div class="w-full md:flex md:relative">
        <div class="lg:flex md:flex md:justify-end lg:justify-end   md:mb-5 shadow-lg flex-row items-end w-[100%] z-[999]">
          <router-link to="/"><p class="mb-3  text-white sm:text-white hover:text-by md:mr-10 flex border-b-2 pb-3 w-full  border-cr pl-7 mr-12 mt-14 md:border-b-0 md:pl-1 ">Home</p></router-link>
          <router-link to="/Store"><p class="mb-3 text-white sm:text-white hover:text-by md:mr-10 flex border-b-2 pb-3 w-full  border-cr pl-7 mr-12 md:border-b-0 md:pl-1 ">Boutique</p></router-link>
          <div><p class="md:mr-10 mb-3 text-white sm:text-white hover:text-by cursor-pointer flex border-b-2 pb-3 w-full  border-cr pl-7 mr-12 md:pl-1  md:border-b-0" @click="showModal = true">A propos</p></div>
          <p class="md:mr-10 mb-3 text-white sm:text-white hover:text-by cursor-pointer flex border-b-2 pb-3 w-full md:w-auto  border-cr pl-7 mr-12 md:border-b-0 md:pl-1 " @click="showModal = true">Blog</p>
          <p class="md:mr-10 mb-3 text-white sm:text-white hover:text-by cursor-pointer flex border-b-2 pb-3 w-full md:w-auto  border-cr pl-7 md:pl-1 mr-12 md:border-b-0" @click="showModal = true">Contact</p>
        </div>
        <div class=" md:hidden lg:flex lg:mt-3 lg:items-center justify-end w-[45%]">
          <router-link :to="redirect"><p class="w-36 relative left-5 top-5 lg:top-0 lg:left-0 md:bottom-2 md:mr-3 flex justify-center text-black bg-white p-2 rounded ">{{ nameButton }}</p></router-link>
        </div>
      </div>
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
import ModalC from './ModalC.vue';
import searchIcon from '@/assets/search(2).png';
import Illustration from '../../src/assets/Contact/Illustration.gif';
import Nav from '../assets/Favicon/Nav.png'
import Barer from '../assets/Favicon/Baré.png'

export default {
  name: 'BareNavLog',
  components:{
  ModalC
  },

  data() {
    return {
      searchIcon,
      showModal: false,
      Illustration,
      hasLoaded: false, 
      menuOpen: false, 
      Nav,
      Barer
    }
  },props:{
  nameButton: {type:String, required:true},
  redirect:{type:String, required:true}
 },
  mounted() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000); 
  },
  methods: {
    // Méthode pour fermer la modale
    closeModal() {
      this.showModal = false; 
    },toggleMenu() {
    console.log("Menu Open before toggle:", this.menuOpen); 
    this.menuOpen = !this.menuOpen;
    console.log("Menu Open after toggle:", this.menuOpen); 
  }
  }
};
</script>

<style scoped>
</style>
