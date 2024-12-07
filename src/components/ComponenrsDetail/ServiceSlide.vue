<template>

   <div class="relative overflow-hidden">   
    <div 
      class="block h-h-v relative overflow-hidden"
      @touchstart="startSwipe"
      @touchmove="handleSwipe"
      @touchend="endSwipe"
      @mousedown="startSwipe"
      @mousemove="handleSwipe"
      @mouseup="endSwipe"
      @mouseleave="endSwipe"
    >
      <div class="w-full h-full flex items-center justify-center">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="[ 
            'absolute w-full flex items-center justify-center text-white transition-transform duration-700',
            index === currentSlide ? 'translate-x-0' : 'translate-x-full',
            index === previousSlide ? '-translate-x-full' : ''
          ]"
        >
          <ServiceC 
          :ImgS="slide.Imag" 
          :TitleS="slide.Title" 
          :Description="slide.Description"/>
       </div>
     </div>
      <!-- Indicateurs -->
     <div class="absolute bottom-4 top-80 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <button v-for="(slide, index) in slides" :key="index"
          :class="[ 
            'w-3 h-3 rounded-full',
            currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
          ]"
          @click="goToSlide(index)"
        ></button>
      </div>
     </div>
  </div>
</template>

<script>
import Static from '../../assets/Favicon/analyse(2).png'
import User from '../../assets/Favicon/user(8).png'
import Pay from '../../assets/Favicon/paiement(2).png'
import ServiceC from '../ComponenrsDetail/ServiceC.vue';

export default {
  name: 'AboutUs',
  components:{
  ServiceC
  },
  data(){
    return{
      slides:[
        {
          Imag:Static,
          Title:'Apprentissage rapide',
          Description:'Apprenez rapidement avec nos cours concis et pratiques'
        }, 
        {
          Imag:User,
          Title:'Crée une communauté',
          Description:'Créez une communauté engagée et connectée autour de vos passions'
        },
        {
          Imag:Pay,
          Title:'Economiser plus',
          Description:'Economisez davantage en choisissant nos solutions adaptées et abordables.'
         },
      ],
      currentSlide: 0,
      previousSlide: null,
      startX: 0,
      isSwiping: false,
    }
  },
  methods: {
    nextSlide() {
      this.previousSlide = this.currentSlide;
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.previousSlide = this.currentSlide;
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.previousSlide = this.currentSlide;
      this.currentSlide = index;
    },
    startSwipe(event) {
      this.isSwiping = true;
      this.startX = event.touches ? event.touches[0].clientX : event.clientX;
    },
    handleSwipe(event) {
      if (!this.isSwiping) return;
      const currentX = event.touches ? event.touches[0].clientX : event.clientX;
      const diffX = this.startX - currentX;

      if (diffX > 50) {
        this.isSwiping = false;
        this.nextSlide();
      } else if (diffX < -50) {
        this.isSwiping = false;
        this.prevSlide();
      }
    },
    endSwipe() {
      this.isSwiping = false;
    },
  },
}
</script>


