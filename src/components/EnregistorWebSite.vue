<template>
  <div class="w-full z-10  relative top-10    md:relative md:mt-[-400px] lg:mt-0 mb-5">
    <div class="relative bottom-36 w-full">
      <div class="">
        <div class="w-full flex justify-center">
          <h1 class="text-white font-bold md:text-5xl text-5xl  text-center">Des points à clarifier ?</h1>
        </div>
        <div class="w-full flex justify-center mt-6 mb-8">
          <p class="text-white text-center">
            <span class="text-by cursor-pointer">Cliquez ici</span> pour trouver plus de précision à vos questions
          </p>
        </div>
        <div class="flex justify-around items-center relative bottom-2 lg:relative lg:top-12 bg-b-main">
          <div>
            <AccordeonDetail 
              v-for="(item, index) in accordions1" 
              :key="index" 
              :Question="item.question" 
              :Repond="item.reponse" 
              :isOpen="activeIndex === index" 
              @toggle="toggleAccordion(index)" 
            />
          </div>
          <div class="hidden lg:flex">
            <div>
              <AccordeonDetail 
              v-for="(item, index) in accordions2" 
              :key="index" 
              :Question="item.question" 
              :Repond="item.reponse" 
              :isOpen="activeIndex === index + accordions1.length" 
              @toggle="toggleAccordion(index + accordions1.length)" 
            />
            </div>
          </div>
        </div>

        <div class="bg-b-main lg:relative lg:top-16">
          <div class="w-full">
            <h2 class="text-white text-3xl font-semibold relative  top-14  md:hidden">
              Toujours prêt à vous <span class="text-by">accompagner !</span>
            </h2>
            <div class="hidden md:flex ml-5">
               <h2 class="text-white text-3xl font-semibold relative  top-14">
                Toujours prêt à vous<br><span class="text-by">accompagner !</span>
               </h2>
            </div>
            
          </div>
          <div class="w-full flex justify-evenly items-center relative  bg-sss  mt-32">
            <div class="lg:hidden w-full ">
              <ImageSlider :images="firstSlideImages" :itemWidth="'128px'" :itemHeight="'90px'"/>
            </div>
            <div class="hidden lg:w-full lg:flex lg:justify-evenly">
               <img :src="Linkedin" alt="LinkedIn" class="w-28 h-16">
               <img :src="Instagram" alt="Instagram" class="w-28 h-16">
               <img :src="Google" alt="Google" class="w-28 h-20"> 
              <img :src="Youtube" alt="YouTube" class="w-28 h-16">
              <img :src="Facebook" alt="Facebook" class="w-28 h-20">
              <img :src="Nirex" alt="Nirex" class="w-28 h-16">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueAccor from '../assets/Accordéon/d00f561354874bd81ff315e6935f2dab.png';
import Linkedin from '../assets/Aide/Linkedin.png';
import Instagram from '../assets/Aide/Instagram.png';
import Google from '../assets/Aide/Google.png';
import Youtube from '../assets/Aide/Youtube.png';
import Facebook from '../assets/Aide/Facebook.png';
import Nirex from '../assets/Aide/nirex.png';
import AccordeonDetail from './ComponenrsDetail/AccordeonDetail.vue';
import ImageSlider from './ImageSlider.vue';

export default {
  name: 'TestimonialsComponents',
  components: {
    AccordeonDetail,
    ImageSlider
  },
  data() {
    return {
      activeIndex: null, // Index actif de l'accordéon
      Linkedin,
      VueAccor,
      Instagram,
      Google,
      Youtube,
      Facebook,
      Nirex,
      accordions1: [
        {
          question: "Comment accéder aux cours après mon inscription ?",
          reponse: "Après votre inscription, connectez-vous avec votre e-mail et mot de passe. ...",
        },
        {
          question: "Quels sont les modes de paiement disponibles ?",
          reponse: "Nous acceptons plusieurs modes de paiement, y compris les cartes de crédit ...",
        },
        {
          question: "Puis-je obtenir un certificat après avoir terminé un cours ?",
          reponse: "Oui, un certificat de réussite est délivré à chaque étudiant ayant terminé un cours avec succès ...",
        },
      ],
      accordions2: [
        {
          question: "Quel est la durée d'accès aux cours après mon inscription ?",
          reponse: "Une fois inscrit, vous avez un accès illimité aux cours, et ce, même après avoir terminé le programme ...",
        },
        {
          question: "Comment poser des questions aux formateurs ?",
          reponse: "Chaque cours dispose d’un forum de discussion où vous pouvez poser des questions aux formateurs ...",
        },
        {
          question: "Y a-t-il un soutien technique en cas de problème ?",
          reponse: "Oui, nous avons une équipe de soutien technique disponible pour vous aider en cas de problème ...",
        },
      ],
      firstSlideImages:[
        { src: Linkedin, alt: "LinkedIn",class:"w-28 h-16 cursor-pointer"},
        { src: Instagram, alt: "Instagram",class:"w-28 h-16 cursor-pointer"},
        { src: Google, alt: "Google",class:"w-28 h-20 cursor-pointer"},
        { src: Youtube, alt: "Youtube",class:"w-28 h-16 relative top-1 cursor-pointer"},
        { src:Facebook, alt: "Facebook",class:"w-28 h-24 relative bottom-3 cursor-pointer"},
        { src:Nirex, alt: "Nirex",class:"w-28 h-16 cursor-pointer"},
         ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.w-wr {
  width: 500px;
}
</style>
