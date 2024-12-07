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
        <TestimonialsDetail 
        :ImageUser="slide.Image"
        :NamePost="slide.NameO" 
        :NameUser="slide.NameU" 
        :Testimonial="slide.Testimonial"/>
      </div>
    </div>
    <!-- Indicateurs -->
    <div class="absolute bottom-4 top-96 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
import T1 from '../../assets/Temoignage/1.jpg'
import T2 from '../../assets/Temoignage/2.jpg'
import T3 from '../../assets/Temoignage/3.jpg'
import T4 from '../../assets/Temoignage/4.jpg'
import TestimonialsDetail from './TestimonialsDetail.vue'
export default {
  name:'AboutUs',
  components:{
   TestimonialsDetail
  },
  data(){
    return{
     slides:[
      {
        Image:T1,
        NameO:'DG Digital Cedetech',
        NameU:'Jean larel',
        Testimonial:"Des cours précis et faciles à suivre. J'ai gagné en compétences en un rien de temps !. Très satisfait des résultats !"
      },
       {
        Image:T2,
        NameO:'Web Développeur',
        NameU:'Sarah valala',
        Testimonial:"Des formations claires, bien structurées et très enrichissantes. Une excellente manière d'apprendre à son rythme !"
      },
       {
        Image:T3,
        NameO:'Porte-parole du Chef de l’Etat',
        NameU:'Esther Kazadita',
        Testimonial:"Une approche pratique et intuitive qui m’a permis d’apprendre rapidement. Je recommande vivement !"
      },
       {
        Image:T4,
        NameO:'Admin réseau  Dital Core',
        NameU:'Paul Kola',
        Testimonial:"Excellente expérience d'apprentissage en ligne. Les modules sont bien conçus et très efficaces !"
      }
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


