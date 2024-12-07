<template>
  <div class="w-full bg-b-main  md:mt-0 z-10  relative bottom-[135px] md:relative md:bottom-[580px] lg:relative lg:bottom-[200px]">
    <div class="w-full h-hl bg-sss md:h-h-v  xl:flex xl:h-hr xl:justify-center lg:h-ht">
      <div class="flex  justify-center items-center w-full xl:flex xl:justify-start">
         <div class="hidden xl:flex ml-5">
          <h1 class="text-white text-6xl font-bold">
           Ce qu'on dit de <br> notre <span class="text-by">expertise</span><br> et de notre<br> <span class="text-by">engagement</span> <br> envers<br> <span class="text-by">l'excellence</span>.
        </h1>
         </div>
        
        <h1 class="text-white  text-4xl md:text-4xl font-bold md:text-center mt-10 xl:hidden">Ce qu'on dit de notre <span class="text-by">expertise</span> et de notre <span class="text-by">engagement
          </span>  envers <span class="text-by">l'excellence</span>.
        </h1> 
      </div>

      <div class="relative bottom-20 lg:hidden"> 
        <TestimonialSlide />
      </div>
      <div class="hidden lg:flex lg:justify-center lg:relative lg:top-12 xl:hidden">
        <div>
          <div class="mr-5"><TestimonialsDetail :ImageUser="T1" NamePost="DG Digital Cedetech" NameUser="Jean larel" Testimonial="Des cours précis et faciles à suivre. J'ai gagné en compétences en un rien de temps !. 
            Très satisfait des résultats !"/></div>
          <div class="mr-5 mt-6"><TestimonialsDetail :ImageUser="T2" NamePost="Web Développeur" NameUser="Sarah valala" Testimonial="Des formations claires, bien structurées et très enrichissantes. 
          Une excellente manière d'apprendre à son rythme !"/></div>
        </div>
        <div class="">
          <div class="mr-5"><TestimonialsDetail :ImageUser="T3" NamePost="Porte-parole du Chef de l’Etat" NameUser="Esther Kazadita" Testimonial="Une approche pratique et intuitive qui m’a permis d’apprendre rapidement. 
            Je recommande vivement !"/></div>
          <div class=" mt-6"><TestimonialsDetail :ImageUser="T4" NamePost="Admin réseau  Dital Core" NameUser="Paul Kola" Testimonial="Excellente expérience d'apprentissage en ligne. Les modules sont bien conçus 
           et très efficaces !"/></div>
        </div>
       
      
      </div>
     

      <div class="relative right-64 bottom-14 hidden xl:flex">
        <div>
          <div class="relative left-36 top-24 flex justify-between w-wr">
            <TestimonialsDetail :ImageUser="T1" NamePost="DG Digital Cedetech" NameUser="Jean larel" Testimonial="Des cours précis et faciles à suivre. J'ai gagné en compétences en un rien de temps !. 
            Très satisfait des résultats !"/>
           <TestimonialsDetail :ImageUser="T2" NamePost="Web Développeur" NameUser="Sarah valala" Testimonial="Des formations claires, bien structurées et très enrichissantes. 
            Une excellente manière d'apprendre à son rythme !"/>
          </div>
          <div class="relative left-36 top-32 flex justify-between w-wr">
            <TestimonialsDetail :ImageUser="T3" NamePost="Porte-parole du Chef de l’Etat" NameUser="Esther Kazadita" Testimonial="Une approche pratique et intuitive qui m’a permis d’apprendre rapidement. 
             Je recommande vivement !"/>
            <TestimonialsDetail :ImageUser="T4" NamePost="Admin réseau  Dital Core" NameUser="Paul Kola" Testimonial="Excellente expérience d'apprentissage en ligne. Les modules sont bien conçus 
             et très efficaces !"/>
         </div>
        </div>
      </div> 
    </div>   
  </div>
</template>

<script>
import T1 from '../assets/Temoignage/1.jpg'
import T2 from '../assets/Temoignage/2.jpg'
import T3 from '../assets/Temoignage/3.jpg'
import T4 from '../assets/Temoignage/4.jpg'
import TestimonialsDetail from './ComponenrsDetail/TestimonialsDetail.vue'
import TestimonialSlide from './ComponenrsDetail/TestimonialSlide.vue'
export default {
  name: 'TestimonialsComponents',
  components:{
   TestimonialsDetail,
   TestimonialSlide
  },
  data(){
    return{
     T1:T1,
     T2:T2,
     T3:T3,
     T4:T4
    }
  }
}
</script>


