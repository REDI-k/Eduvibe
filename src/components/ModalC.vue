<template>
  <div class="absolute w-full z-[1000]">
  <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
    <div class="w-full lg:w-[900px] lg:h-[500px] h-full shadow-lg bg-black flex">
      <div class="hidden lg:flex h-h-d w-ww lg:h-hr lg:w-wr">
        <div class="bg-black w-full h-32 lg:h-full flex justify-center">
          <img :src="Illustration" alt="Illustration" />
        </div>
      </div>
      <div class="w-full h-full">
        <div class="relative top-20 md:relative md:top-0"> 
        <div class="hidden lg:flex justify-end lg:w-[500px] fixed">
          <button @click="closeModal" class="text-white hover:text-gray-600 text-2xl mr-5">&times;</button>
        </div>
        <div class="w-full h-full">
          <div class="w-full">
            <div class="lg:hidden flex justify-end w-full fixed ">
              <button @click="closeModal" class="text-white hover:text-gray-600 text-2xl relative right-5">&times;</button>
            </div>
            <p class="text-white text-2xl lg:text-4xl font-semibold relative top-11 ml-2 mr-2">
                    Le site est en cours de <span class="text-by">préparation</span>, revenez bientôt !
                  </p>
                  <p class="text-tr relative top-20 ml-2 mr-2">
                    Le développement du site est actuellement suspendu, 
                    ce qui rend certaines pages et fonctionnalités non disponibles. 
                    Merci de votre compréhension !
                  </p>
                  <p class="text-tr relative top-24 ml-2 mr-2">
                    Rester connectée pour ne rien manquer de mes dernières actualités et mises à jour
                  </p>
                 <div class="relative top-36 w-full flex justify-center">
                   <a href="http://www.linkedin.com/in/gloire-redi-8678662b5">
                    <button class="bg-bx text-white p-2 w-72 rounded">Linkedln</button>
                   </a>  
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
export default {
  name: 'ModalC',
  props: {
    showModal: {
      type: Boolean,
      required: true,
      Syt:{
        type:String,
        required:true
      }
    },
    closeModal: {
      type: Function,
      required: true
    },
    Illustration: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques à la modale */
</style>
