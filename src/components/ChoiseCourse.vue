<template>
  <div class="flex justify-center w-full bg-b-main min-h-screen z-10 relative bottom-44">
    <div>
     <div class="w-full flex justify-center">
        <div class="w-full">
            <h1 class="text-white font-bold text-4xl  text-center">Bénéficiez d'un <span class="text-by">
              apprentissage</span> flexible avec l'appui de nos meilleurs <span class="text-by">professeurs</span>.
            </h1>
            <p class="text-fg mt-10 text-center">Avancez selon vos disponibilités, guidé par nos meilleurs enseignants. 
               choisiez le programme qui vous convient le mieux.
            </p>
        </div>
     </div>
     <div class="relative bottom-20">
        <CourChoiseDetail />
     </div>
    
 
    </div>
  </div>
</template>
<script>
import CourChoiseDetail from './CourChoiseDetail.vue';
export default {
  name: 'ChoiseCourse',
  components:{
    CourChoiseDetail
  }
}
</script>


