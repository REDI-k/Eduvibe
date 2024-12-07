<template>
  <div class="relative mt-24 overflow-hidden">
    <div 
      class="block lg:hidden relative h-h-v overflow-hidden"
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
          <ChoiseCourDetail 
            :TitleForm="slide.title" 
            :AvatageOne="slide.AvatageOne" 
            :AvatageTwo="slide.AvatageTwo" 
            :AvatageThree="slide.AvatageThree" 
            :AvatageFor="slide.AvatageFor" 
          />
        </div>
      </div>

      <!-- Indicateurs -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          :class="[ 
            'w-3 h-3 rounded-full',
            currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
          ]"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>

    <!-- Comportement pour les écrans moyens et supérieurs -->
    <div class="hidden lg:flex w-full space-x-4">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="flex-1 flex items-center justify-center"
      >
        <ChoiseCourDetail 
          :TitleForm="slide.title" 
          :AvatageOne="slide.AvatageOne" 
          :AvatageTwo="slide.AvatageTwo" 
          :AvatageThree="slide.AvatageThree" 
          :AvatageFor="slide.AvatageFor" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChoiseCourDetail from './ComponenrsDetail/ChoiseCourDetail.vue';

export default {
  name: 'AboutUs',
  components: {
    ChoiseCourDetail,
  },
  data() {
    return {
      slides: [
        {
          title: 'Formation en ligne',
          AvatageOne: 'Flexibilité horaire',
          AvatageTwo: 'Support en ligne',
          AvatageThree: 'Économies de déplacement',
          AvatageFor: 'Accès aux ressources',
        },
        {
          title: 'Formation avancée',
          AvatageOne: 'Cours interactifs',
          AvatageTwo: 'Apprentissage pratique',
          AvatageThree: 'Certification incluse',
          AvatageFor: 'Mentorat personnalisé',
        },
        {
          title: 'Formation professionnelle',
          AvatageOne: 'Accès illimité',
          AvatageTwo: 'Modules certifiants',
          AvatageThree: 'Formation hybride',
          AvatageFor: 'Accompagnement de carrière',
        },
      ],
      currentSlide: 0,
      previousSlide: null,
      startX: 0,
      isSwiping: false,
    };
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
};
</script>
