<template>
  <div class="flex justify-center z-35">
    <!-- bg-sss w-wc  mb-52 rounded-2xl h-[910px] z-35 md:w-wr md:h-ht lg:w-w-d lg:h-h-v -->
    <div class="bg-sss w-full  mb-52 lg:rounded-2xl h-[555px] z-35  md:h-[500px]  lg:w-w-d lg:h-h-v">

     <div class="relative top-5">
      <div class="">
        <h1 class="text-white mt-5 font-bold text-3xl flex justify-center text-center">Services que nous fournissons</h1>
        <p class="text-tr flex justify-center text-center mt-6 ml-2 mr-2 ">Nous proposons des cours en ligne interactifs pour dévellopper vos<br> compétences à tous les niveaux.</p>
      </div>
      <div class="lg:hidden">
        <ServiceSlide />
      </div>
       
      <div class=" hidden lg:mt-5 lg:flex lg:justify-around lg:w-full ">
        <div class="mb-[200px] w-full lg:flex lg:mt-10">
          <div class="flex justify-around w-full">
             <div class="flex justify-center"><ServiceC :ImgS="Static" TitleS="Apprentissage rapide" Description="Apprenez rapidement avec nos
               cours concis et pratiques"/></div> 
              <div class="flex justify-center relative bottom-20 md:bottom-0 lg:relative lg:right-16">
                <ServiceC :ImgS="Users" TitleS="Crée une communauté" Description="Créez une communauté engagée et connectée 
              autour de vos passions"/></div>
          </div>
           <div class="flex justify-center relative bottom-[160px] md:flex md:justify-center md:relative md:top-[-70px] lg:relative lg:top-[-2px] lg:right-16">
            <ServiceC :ImgS="Pay" TitleS="Economiser plus" Description="Economisez davantage en choisissant nos solutions 
           adaptées et abordables."/></div>
        </div>
      </div>
      
     </div>
     
    </div>
  </div>
 


</template>

<script>
import Static from '../assets/Favicon/analyse(2).png'
import User from '../assets/Favicon/user(8).png'
import Pay from '../assets/Favicon/paiement(2).png'
import ServiceC from './ComponenrsDetail/ServiceC.vue';
import ServiceSlide from './ComponenrsDetail/ServiceSlide.vue';

export default {
  name: 'ServiceComponent',
  components:{
  ServiceC,
  ServiceSlide
  },
  data(){
    return{
      Static:Static,
      Users:User,
      Pay:Pay
    }
  }
}
</script>


