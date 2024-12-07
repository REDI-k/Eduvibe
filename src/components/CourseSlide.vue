<template>
  <div class="flex justify-center w-full bg-b-main  z-10 mb-10">
    <div class="w-full mb-52 rounded-2xl z-35">
      <div class="flex justify-center">
        <p class="text-white  font-bold text-4xl text-center ">Nos Formations</p>
      </div> 

      <div class="w-full ">
      <div class="mt-12   pb-4 border-b-2 border-cr z-10 ml-1 mr-1 lg:ml-12 lg:mr-12  h-11">
        <div class="flex relative">
          <div v-for="filter in filters" :key="filter.value" class="cursor-pointer w-52"
            @click="activeFilter = filter.value">
            <div class="flex justify-start">
              <p :class="['font-semibold', activeFilter === filter.value ? 'text-by' : 'text-white hover:text-by']"
              :style="filter.marginLeft ? { marginLeft: filter.marginLeft } : {}">
               {{ filter.label }}
              </p>
            </div>
            <div class="w-full h-5">
              <div :class="[
                  'h-1 rounded-t-10 z-20',activeFilter === filter.value ? 'bg-by mr-1 mt-4' : 'mr-1',]"
                :style="{ width: filter.width,marginLeft: filter.marginLeft }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carrousel des Cours -->
    <div class="slider-container relative top-12 w-full max-w-4xl mx-auto overflow-hidden">
      <!-- Slides -->
      <div
        class="slides transition-transform duration-500   w-full"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        @touchstart="startSwipe"
        @touchmove="handleSwipe"
        @touchend="endSwipe"
        @mousedown="startSwipe"
        @mousemove="handleSwipe"
        @mouseup="endSwipe"
        @mouseleave="endSwipe"
      >
        <div v-for="(item, index) in filteredItems" :key="index" class="slide flex-shrink-0  flex justify-center">
          <div>
            <CourseDetaille
            :ImgCours="item.image"
            :NameCours="item.name"
            :TitleCours="item.title"
            :Description="item.description"
          />
          </div>
        
        </div>
      </div>

      <!-- Indicateurs -->
      <div class="indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <button
          v-for="(item, index) in filteredItems"
          :key="index"
          class="w-3 h-3 rounded-full"
          :class="currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'"
          @click="goToSlide(index)"
        ></button>
      </div>

      <!-- Contrôles -->
       <div class="hidden">
          <div class="controls absolute top-1/2 left-0 right-0 flex justify-between z-10">
            <button @click="previousSlide" class="prev bg-gray-700 text-white p-2">❮</button>
            <button @click="nextSlide" class="next bg-gray-700 text-white p-2">❯</button>
          </div>
       </div>
    
    </div>
    </div>
  </div>
</template>

<script>
import CourseDetaille from '../components/ComponenrsDetail/CourseDetaille.vue';
import react from '../assets/LogoCours/React.png';
import Angular from '../assets/LogoCours/Angular.png';
import NodeJs from '../assets/LogoCours/NodeJs.png';
import Blender from '../assets/LogoCours/Blender.png';
import Poulpe from '../assets/LogoCours/poulpe.png';
import Tareau from '../assets/LogoCours/Tareau.png';
import Cinema4D from '../assets/LogoCours/Cinema4D.png';
import Illustrator from '../assets/LogoCours/Illustrator.png';
import Super from '../assets/LogoCours/Super.png';

export default {
  name: "CourseSlide",
  components: {
    CourseDetaille,
  },
  data() {
    return {
      currentSlide: 0,
      activeFilter: "programming", 
      filters: [
        { label: 'Programmation', value: 'programming', width: '115px'  },
        { label: "Marketing", value: "marketing", width: "83px", marginLeft: "15px" },
        { label: 'Graphisme', value: 'design', width:'83px',marginLeft: "8px" },
        
      ],
      items: [
        {
          id:1,
          name:"React JS",
          title:"Devenez un expert du développement front-end",
          description:"Apprenez à maîtriser React.js, la bibliothèque JavaScript incontournable pour créer des...",
          image:react,
          category:"programming",
        },
        {
          id:2,
          name:"Angular",
          title:"Devenez un expert du développement front-end",
          description:"Apprenez à maîtriser Angular, la techno robuste pour construire des applications web modernes.",
          image:Angular,
          category:"programming",
        },
        {
          id:3,
          name:"Node JS",
          title:"Maîtrisez le développement côté serveur",
          description:"Apprenez à utiliser Node.js pour créer des applications back-end performantes et scalables.",
          image:NodeJs,
          category:"programming",
        },
         {
          id:4,
          name:'Modélisation 3D',
          title:"Maîtrisez l'essentiel de Blender",
          description:"Donnez vie à vos créations 3D avec des outils de modélisation et d'animation avancés",
          image:Blender,
          category:'design',
        },
        {
          id:5,
          name:'Market Poulpe',
          title:"Maîtrisez l'essentiel du marketing digital",
          description:"Optimisez vos stratégies en ligne pour atteindre un public plus large et générer plus de conversions",
          image:Poulpe,
          category: 'marketing',
        },
         {
          id:6,
          name:'Marketing Digital',
          title:"Devenez un expert en marketing digital",
          description:"Apprenez à utiliser les outils et techniques pour améliorer votre présence en ligne et booster vos ventes.",
          image:Tareau,
          category:'marketing',
        },
        {
          id:7,
          name:'Modélisation 3D',
          title:"Maîtrisez l'essentiel de Cinema 4D",
          description:"Créez des animations 3D et des effets visuels professionnels avec des outils puissants.",
          image:Cinema4D,
          category:'design',
        },
        {
          id:8,
          name:'Adobe Illustrator',
          title:"Maîtrisez l'essentiel d'Adobe Illustrator",
          description:"Réalisez des illustrations vectorielles, des logos et des graphismes de qualité professionnelle.",
          image:Illustrator,
          category:'design',
        },
        {
          id:9,
          name:' Super Market',
          title:"Devenez un expert en marketing digital",
          description:"Apprenez à utiliser l'outil Super Market pour améliorer votre présence en ligne et booster vos ventes.",
          image: Super,
          category:'marketing',
        },
      ],
      startX: 0,
      isSwiping: false,
    };
  },
  computed: {
    filteredItems() {
      if (this.activeFilter === "all") {
        return this.items;
      }
      return this.items.filter((item) => item.category === this.activeFilter);
    },
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
    },
    previousSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.filteredItems.length) % this.filteredItems.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.filteredItems.length;
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
        this.previousSlide();
      }
    },
    endSwipe() {
      this.isSwiping = false;
    },
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
}

.indicators {
  bottom: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}

.indicators button.bg-blue-500 {
  background-color: #3b82f6; /* Couleur de l'indicateur actif */
}

.indicators button.bg-gray-300 {
  background-color: #d1d5db; /* Couleur de l'indicateur inactif */
}

.controls {
  top: 50%;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}

.controls button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.controls button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

/* Styles pour la barre de filtres */
.w-full {
  width: 100%;
}

.mt-12 {
  margin-top: 3rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-cr {
  border-color: #d1d5db;
}

.z-10 {
  z-index: 10;
}

.ml-1 {
  margin-left: 0.25rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.lg\\:ml-12 {
  margin-left: 3rem;
}

.lg\\:mr-12 {
  margin-right: 3rem;
}

.h-11 {
  height: 2.75rem;
}
</style>
