<template>
  <div class="w-full lg:h-[500px] md:h-ht h-96 bg-b-main relative bottom-0">
    <div class="w-full">
      <hr class="bg-gray-200 opacity-10 relative top-[40px]" style="height: 1px; width: 100%;">
    </div>
    <div class="relative top-20 ">
      <div class="w-full flex justify-center">
        <div class="md:w-full">
          <router-link to="/"><div class=""><p class="text-white font-semibold text-3xl italic ml-5">EduVibe</p></div></router-link> 
          <div class="lg:flex lg:justify-center">
            <div class="flex  justify-center">
              <div class="mt-6">
                <p class="text-white">Navigation</p>
                <div class="relative top-5">
                  <router-link to="/"><p class="text-tr  hover:text-by relative bottom-1">Home</p></router-link>  
                  <router-link to="/Store"><p class="text-tr  hover:text-by relative bottom-1">Boutique</p></router-link>    
                  <p class="text-tr  hover:text-by relative top-1"><span>A propos de nous</span></p>
                  <p class="text-tr  hover:text-by relative top-3"><span>Blog</span></p>
                  <p class="text-tr  hover:text-by relative top-4"><span>Contactez nous</span></p>
                  <p class="text-tr  hover:text-by relative top-5"><span>FAQ</span></p>
                  <p class="text-tr  hover:text-by relative top-6"><span>Politique de confidentialité</span></p>
                  <p class="text-tr  hover:text-by relative top-7"><span>Gestion d'utilisation</span></p>
                </div>
              </div>
              <div class="ml-10 mt-6">
                <p class="text-white">Magazin</p>
                <div class="relative top-5">
                  <p class="text-tr  hover:text-by"><span>Google A+</span></p>
                  <p class="text-tr  hover:text-by relative top-1"><span>Amazon analytic</span></p>
                  <p class="text-tr  hover:text-by relative top-2"><span>Cisco packet Tracer</span></p>
                  <p class="text-tr  hover:text-by relative top-3"><span> Nivela</span></p>
                  <p class="text-tr  hover:text-by relative top-4"><span>Electron Vue</span></p>
                </div>
              </div>
              <div class="hidden md:flex  md:ml-16 md:mt-6">
                <div class="ml-1 mt-14 md:relative md:bottom-16">
                  <p class="text-white relative top-2">Entreprise</p>
                  <div class="relative top-5">
                    <p class="text-tr  hover:text-by"><span>Digital Soft</span></p>
                    <p class="text-tr  hover:text-by relative top-2"><span>Stremaing Chat</span></p>
                    <p class="text-tr  hover:text-by relative top-3"><span>Nivela</span></p>
                    <p class="text-tr  hover:text-by relative top-4"><span>VabTech DIgit</span></p>
                    <p class="text-tr  hover:text-by relative top-5"><span>Electron +</span></p>
                    <p class="text-tr  hover:text-by relative top-6"><span>Moovi</span></p>
                  </div>
                </div>
              </div>
            </div> 
            <div class="flex justify-center relative top-12">
              <div class="ml-6 mt-6 md:hidden mb-12 relative right-5">
                <p class="text-white relative top-2">Entreprise</p>
                <div class="relative top-5">
                  <p class="text-tr  hover:text-by"><span>Digital Soft</span></p>
                  <p class="text-tr  hover:text-by relative top-2"><span>Stremaing Chat</span></p>
                  <p class="text-tr  hover:text-by relative top-3"><span>Nivela</span></p>
                  <p class="text-tr  hover:text-by relative top-4"><span>VabTech DIgit</span></p>
                  <p class="text-tr  hover:text-by relative top-5"><span>Electron +</span></p>
                  <p class="text-tr  hover:text-by relative top-6"><span>Moovi</span></p>
                </div>
              </div>
              <div class="ml-20 relative right-7 mt-6 lg:relative lg:bottom-16">
                <p class="text-white relative top-3">Communauté</p>
                <div class="relative top-5">
                  <p class="text-tr  hover:text-by"><span>Educate wold</span></p>
                  <p class="text-tr  hover:text-by relative top-2"><span>Cloud Learning</span></p>
                  <p class="text-tr  hover:text-by relative top-3"><span>Congo Developper</span></p>
                  <p class="text-tr  hover:text-by relative top-4"><span>EduVibe Club</span></p>
                </div>
              </div>
              <div class="hidden md:flex md:relative md:left-1 md:mt-6 w-44 lg:relative lg:bottom-14 lg:left-8">
                <div>
                 <p class="text-white">Télécharger l'application</p>
                 <div class="relative top-5">
                   <p class="text-tr  hover:text-by"><span>Android</span></p>
                   <p class="text-tr  hover:text-by relative top-2"><span>Appel</span></p>
                 </div>
                </div>
             </div>
           </div>
           <div class="ml-2 mt-14 md:hidden ">
            <p class="text-white">Télécharger l'application</p>
            <div class="relative top-5">
              <p class="text-tr  hover:text-by"><span>Android</span></p>
              <p class="text-tr  hover:text-by relative top-2"><span>Appel</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   <div class="flex justify-center w-full relative top-32 md:relative md:top-52 lg:relative lg:top-32 ">
     <p class="text-cr">© 2024 Eduvibe. Tous droits réservés.</p>
   </div> 
 </div>
</template>
<script>
export default {
  name: 'FooterCompenent',
  data(){
    return{
    }
  }
}
</script>
<style scoped>
</style>

