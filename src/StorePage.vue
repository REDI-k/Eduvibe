     <!-- style="background: radial-gradient(circle, rgba(68, 25, 53, 90) 0%, rgba(28, 6, 44, 0.2) 50%, rgba(37, 8, 52, 0.1) 100%); filter: blur(10px);" -->
<template>
  <div class="relative flex-col min-h-screen  bg-b-main">
    <div class="absolute w-full z-30">
      <div class="w-full  fixed md:absolute z-[999]">
         <BareNav />
      </div>
    </div>
    <div class="w-full z-0 relative ">
      <div class="flex justify-center">
      <div class="w-[900px] h-[900px] rounded-full relative bottom-80 flex justify-center">
        <div class="absolute inset-0 rounded-full" 
          style="background: radial-gradient(circle, rgba(5, 7, 78, 0.9) 0%, rgba(5, 7, 78, 0.1) 50%, rgba(37, 8, 52, 0.1) 100%); filter: blur(10px);">
        </div>
        <div class="absolute z-10 flex items-center justify-center top-96">
          <div>
            <!-- relative w-w-d flex justify-center -->
              <!-- w-24 h-16 -->
            <div class="hidden relative w-wz md:flex justify-center md:w-w-d">
             
              <router-link to="/Store"><img :src="Twitter" class="w-[105px] h-14 md:w-24 md:h-16"></router-link> 
              <router-link to="/Store"><img :src="Figma" class="w-[105px] h-14 md:w-24 md:h-16"></router-link>
              <router-link to="/Store"><img :src="Robot" class="w-[105px] h-16 md:w-24 md:h-16"></router-link>
              <router-link to="/Store"><img :src="Nivela" class="w-[105px] h-14 md:w-24 md:h-16"></router-link>
              <router-link to="/Store"><img :src="Lb" class="w-[105px] h-16 md:w-24 md:h-16"></router-link>
              <router-link to="/Store"><img :src="Chrome" class="w-[105px] h-14 md:w-24 md:h-16"></router-link> 
              <router-link to="/Store"><img :src="Nav" class="w-[105px] h-14 md:w-24 md:h-16"></router-link>
              <router-link to="/Store"><img :src="Camera" class="w-[105px] h-14 md:w-24 md:h-16"></router-link>
            </div>
            <!-- relative top-5 w-w-d flex justify-center -->
            <div class="hidden relative top-5 w-wz md:flex justify-center md:w-w-d">
              <router-link to="/Store"><img :src="Louve" class="w-20 h-12 md:w-24 md:h-16"></router-link>  
              <router-link to="/Store"><img :src="Lb" class="w-20 h-12 md:w-24 md:h-16"></router-link> 
              <router-link to="/Store"><img :src="Android" class="w-20 h-12 md:w-24 md:h-16"></router-link> 
              <router-link to="/Store"><img :src="VisualX" class="w-20 h-12 md:w-24 md:h-16"></router-link> 
              <router-link to="/Store"><img :src="Robote" class="w-20 h-12 md:w-24 md:h-16"></router-link> 
              <router-link to="/Store"><img :src="Chien" class="w-20 h-12 md:w-24 md:h-16"></router-link>
            </div>
            <!-- relative top-10 w-w-d flex justify-center -->
            <div class="relative top-10  w-wz flex justify-center md:w-w-d">
              <router-link to="/Store"><img :src="Audio" class="w-24 h-16"></router-link>
              <router-link to="/Store"><img :src="GitHub" class="w-24 h-16"></router-link>
              <router-link to="/Store"><img :src="Anti" class="w-24 h-16"></router-link> 
              <router-link to="/Store"><img :src="Colp" class="w-24 h-16"></router-link>
            </div>
            <!-- relative top-12 w-w-d flex justify-center -->
            <div class="relative top-12 w-wz flex justify-center md:w-w-d">
              <router-link to="/Store"><img :src="Wordpress" class="w-24 h-16"></router-link>
              <router-link to="/Store"><img :src="Niv" class="w-24 h-16"></router-link>
            </div>
            <div class="relative top-14 w-wz md:w-w-d flex justify-center ">
             <router-link to="/Store"><img :src="Slack" class="w-24 h-16"></router-link>  
            </div>
          </div>
        </div>
     </div>
    </div>

<!-- w-full h-full relative bottom-96 -->
     <div class="w-full h-full relative bottom-[600px] md:bottom-96">
      <div class="w-full  h-full flex justify-center">
        <div class="h-full w-full  top-96">
          <div class="mb-72 mt-32 w-full">  
           <h1 class="text-white text-6xl font-bold text-center flex justify-center">Portail </h1>
          <div class="flex justify-center"><p class="text-tr w-96 text-center relative mt-10">Accédez rapidement à toutes les applications de formation pour enrichir votre apprentissage.
          </p></div> 
          <div class=" ">
              <!-- w-wc  rounded h-11 pr-2 pl-1 bg-transparent text-start text-white placeholder-gray-400 focus:outline-none focus:ring-0  -->
               <!-- absolute left-96 top-1/2 transform -translate-y-1/2 w-10 h-5 -->
             <InputSearch 
                styleInput="w-wd md:w-wc  rounded h-11 pr-2 pl-1 bg-transparent text-start text-white placeholder-gray-400 focus:outline-none focus:ring-0" 
                 styleImg="absolute left-64 md:left-96 top-1/2 transform -translate-y-1/2 w-10 h-5"
                />
          </div>
          </div>
          <div class="flex justify-center w-full ">
            <div class=" w-full flex justify-center">
               <div class="w-full">
                 <div class="z-[1000]" ><AppDownloand /></div> 
                  <PremiumActive />
                  <div class="h-44 lg:h-[5px] relative bottom-36">
                    <FooterCompenent />
                  </div>  
                  
               </div>
            </div>
          </div>
        </div>
       </div>
    </div>



  </div>
 </div> 
</template>

<script>
import BareNav from '../src/components/BareNav.vue'
import Twitter from './assets/AppLogo/Twinter.png'
import Camera from './assets/AppLogo/Camera.png'
import Android from './assets/AppLogo/Android.png'
import Anti from './assets/AppLogo/Anti.png'
import Audio from './assets/AppLogo/Audio.png'
import AWS from './assets/AppLogo/AWS.png'
import Bela from './assets/AppLogo/Bela.png'
import Chat from './assets/AppLogo/Chat.png'
import Chat1 from './assets/AppLogo/Chat1.png'
import Chien from './assets/AppLogo/Chien.png'
import Chrome from './assets/AppLogo/Chrome.png'
import Clock from './assets/AppLogo/Clock.png'
import Colp from './assets/AppLogo/colp.png'
import Elipse from './assets/AppLogo/Elipse.png'
import Figma from './assets/AppLogo/Figma.png'
import GitHub from './assets/AppLogo/GitHub.png'
import Google from './assets/AppLogo/Google.png'
import Kijiji from './assets/AppLogo/Kijiji.png'
import Lb from './assets/AppLogo/Lb.png'
import Louve from './assets/AppLogo/Louve.png'
import Nav from './assets/AppLogo/Nav.png'
import Niv from './assets/AppLogo/Niv.png'
import Nivela from './assets/AppLogo/Nivela.png'
import Robot from './assets/AppLogo/Robot.png'
import Slack from './assets/AppLogo/Slack.png'
import Translate from './assets/AppLogo/Translate.png'
import VisualX from './assets/AppLogo/Visual X.png'
import VisualStudio from './assets/AppLogo/VisualStudio.png'
import Vue from './assets/AppLogo/Vue.png'
import Wordpress from './assets/AppLogo/wordpress.png'
import Robote from './assets/AppLogo/Robote.png'
import Commentaire from './assets/Favicon/Commentaire.png'
import Love from './assets/Favicon/Love.png'
import Partage from './assets/Favicon/Partage.png'

import AppDownloand from './components/ComponenrsDetail/AppDownloand.vue';
import FooterCompenent from './components/FooterCompenent.vue';
import PremiumActive from './components/ComponenrsDetail/PremiumActive.vue';
import InputSearch from './components/InputSearch.vue'
export default {
  name: 'HomePage',
    components: {
    BareNav,
    AppDownloand,
    FooterCompenent,
    PremiumActive,
    InputSearch
 

  },
   props: {
   
  },
  data() {
    return {
    Commentaire:Commentaire,
      Love:Love,
      Partage:Partage,
      Twitter:Twitter,
      Robote:Robote,
      Camera:Camera,
      Android:Android,
      Anti:Anti,
      Audio:Audio,
      AWS:AWS,
      Bela:Bela,
      Chat:Chat,
      Chat1:Chat1,
      Chien:Chien,
      Chrome:Chrome,
      Clock:Clock,
      Colp:Colp,
      Elipse:Elipse,
      Figma:Figma,
      GitHub:GitHub,
      Google:Google,
      Kijiji:Kijiji,
      Lb:Lb,
      Louve:Louve,
      Nav:Nav,
      Niv:Niv,
      Nivela:Nivela,
      Robot:Robot,
      Slack:Slack,
      Translate:Translate,
      VisualX :VisualX,
      VisualStudio:VisualStudio,
      Vue:Vue,
      Wordpress:Wordpress,
      isOpen: false,

      selectedOption: 'VisioConférence',
      options: ['VisioConférence', 'Gestion des cours', 'Performence', 'Partage'],

    

    };
  },
  
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    }
  
  },
};
</script>

<style scoped>
/* Masquer la flèche par défaut des navigateurs */
select {
  -webkit-appearance: none; /* Chrome, Safari, Opera */
  -moz-appearance: none;    /* Firefox */
  appearance: none;
}
</style>
