<template>
  <div class="flex justify-center w-full bg-b-main relative  bottom-48 z-10 lg:relative  lg:bottom-48 md:relative md:bottom-[600px]">
    <div class="xl:flex w-full relative top-10 bg-b-main">
      <div class="hidden w-full relative bottom-36 xl:flex justify-center">
        <div class="w-full  flex flex-col items-center">
         <div class="flex justify-center items-center">
            <div class="relative left-5"><img :src="Pig1" class="w-72 h-80"></div>
            <div class="relative top-24 right-5"><img :src="Pig2" class="w-72 h-80"></div>
         </div>
         <div class="hidden md:flex justify-center items-center md:relative bottom-5 space-x-8">
            <div><img :src="Pig3" class="w-72 h-80"></div>
            <div class="relative top-24"><img :src="Pig4" class="w-72 h-80"></div>
          </div>
        </div>
      </div>
      <div class="relative  w-full">
      <div class="flex w-full">
        <div class="w-full "><h1 class="text-white md:text-center lg:text-center xl:text-start text-5xl font-bold mr-1 md:text-5xl">Nous favorisons un <span class="text-by">savoir 
          </span><br><span class="text-by">collaboratif </span>  à travers des <br> études de cas et 
           des <span class="text-by">projets <br>personnalisés</span>.
        </h1></div>
      </div>
      <div class="mb-28 md:flex">
        <div class=" w-full s relative top-10 rounded-md">
           <div class="relative flex justify-center top-3">
            <div>
               <div class="w-full flex justify-center"><img :src=" Teacher" alt="" srcset="" class="rounded-full w-28 h-28"></div>
              <div>
                <p class="text-white relative text-center mt-2 text-2xl">Paul Kalala</p>
                <p class="text-by  mt-2 text-center">Directeur du département de projets et innovations</p>
             </div>
            </div>
           </div>
           <div class="w-full mb-16">
              <div class="w-full flex justify-center items-center relative top-1">
               <div><img :src="Rt" alt="" class="w-44 h-36"></div>
              </div>
              <div class="flex w-full justify-center">
                <button class="bg-by flex justify-center items-center w-52 h-8 text-white font-semibold cursor-pointer" @click="showModal = true">En savoir plus</button>
              </div>
           </div>
        </div>
        <div class="h-48 w-full  relative  rounded-md flex justify-center items-center md:flex-col md:relative md:top-28">
          <div class="w-full flex justify-center md:relative md:right-10">
            <div>
              <div class="h-32 w-32 border-2 rounded-full ">
                <div class="rounded-full w-14 h-14 bg-bt flex justify-center items-center cursor-pointer" @click="showModal = true">
                   <img :src="Play" alt="" srcset="" class="">
                 </div>
              
              </div>
            <div class="flex justify-center text-center">
              <p class="text-white font-semibold relative  top-3">Voir nos réalisation<br> en vidéo</p>
            </div>
           </div>
          </div>
          
          <div class="hidden md:w-full md:flex md:justify-center md:relative md:top-10 xl:w-[500px]">
            <div class="flex justify-center w-full  xl:relative xl:left-6">
              <div class="relative mr-5  md:w-[100%]">
                <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                    brightness(100%) contrast(98%);">
                  <p class="text-white relative">Digital Soft</p>
                </div> 
                <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                  brightness(100%) contrast(98%);">
                  <p class="text-white relative">Nivela</p>
                </div> 
                <div class="hidden lg:hidden md:flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                  brightness(100%) contrast(98%);">
                  <p class="text-white relative">Electron +</p>     
                </div> 
             </div>     
             <div class="relative right-6 md:w-full">
               <div>
                  <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                     brightness(100%) contrast(98%);">
                    <p class="text-white relative">Stremaing Chat</p>   
                  </div> 
                  <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                    brightness(100%) contrast(98%);">
                     <p class="text-white relative">VabTech DIgit</p>  
                  </div> 
                  <div class="hidden lg:hidden md:flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                     brightness(100%) contrast(98%);">
                     <p class="text-white relative">Moovi</p>
                  </div> 
               </div>
             </div>
           </div>
          <div class="hidden lg:flex lg:w-[50%]  lg:relative">
            <div class="xl:relative xl:left-3">
              <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                brightness(100%) contrast(98%);">
                 <p class="text-white relative">Electron +</p>     
              </div> 
              <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                brightness(100%) contrast(98%);">
               <p class="text-white relative">Moovi</p>
              </div>
            </div>
          </div>
      </div> 
    </div>
  </div> 
  <div class="md:hidden relative bottom-16 flex justify-center">
    <div class="w-full flex justify-center">
      <div class="flex justify-center w-full">
        <div class="relative mr-5">
          <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                brightness(100%) contrast(98%);">
                <p class="text-white relative">Digital Soft</p>
          </div> 
          <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
              brightness(100%) contrast(98%);">
               <p class="text-white relative">Nivela</p>
          </div> 
          <div class="md:hidden flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
              brightness(100%) contrast(98%);">
               <p class="text-white relative">Electron +</p>     
          </div> 
        </div>     
        <div class=" relative ml-5">
          <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
              brightness(100%) contrast(98%);">
              <p class="text-white relative">Stremaing Chat</p>   
          </div> 
          <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
               brightness(100%) contrast(98%);">
              <p class="text-white relative">VabTech DIgit</p>  
          </div> 
          <div class="md:hidden flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
               brightness(100%) contrast(98%);">
              <p class="text-white relative">Moovi</p>
          </div> 
        </div>
        <div class="hidden md:flex relative ml-5">
          <div>
            <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
              brightness(100%) contrast(98%);">
              <p class="text-white relative">Electron +</p>     
            </div> 
            <div class="flex items-center"><img :src="Okey" alt="" class="w-10 h-10"  style="filter: invert(61%) sepia(94%) saturate(439%) hue-rotate(152deg) 
                 brightness(100%) contrast(98%);">
                <p class="text-white relative">Moovi</p>
            </div> 
          </div>
        </div>
      </div>

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
import Pig1 from '../assets/Base/1.png'
import Pig2 from '../assets/Base/4.png'
import Pig3 from '../assets/Base/3.png'
import Pig4 from '../assets/Base/2.png'
import Play from '../assets/Favicon/play(2).png'
import Okey from '../assets/Favicon/okey(1).png'
import Teacher from '../assets/Teacher/7d3ece85ea49c7cdf2ca6ba09e5e831d.jpg'
import Rt from '../assets/Base/Réseau.png'
import Illustration from '../assets/Contact/Illustration.gif';
export default {
  name: 'BaseComponent',
    components: {
    ModalC
  },
  data(){
    return{
    Pig1:Pig1,
    Pig2:Pig2, 
    Pig3:Pig3,
    Pig4:Pig4,
    Play:Play,
    Okey:Okey,
    Teacher:Teacher,
    Rt:Rt,
    Illustration,
    showModal: false
    }
  },
  methods: {
    closeModal() {
      this.showModal = false; 
    }
  }
}
</script>


