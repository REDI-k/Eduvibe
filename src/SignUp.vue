<template>
 <div class="relative flex-col min-h-screen bg-b-main">
    <div class="w-full z-10 fixed md:absolute">
      <BareNavLog  nameButton="Se connecter"  redirect="/login" />
    </div>
    <div class="flex justify-center items-center relative  top-36">
        <div class="">
            <h1 class="text-white text-4xl font-bold flex justify-center text-center">Réjoignez-nous et apprenez sans limites</h1>
            <p class="text-tr text-center mt-4">Créez votre compte et commencez votre parcours d'apprentissage dès aujourd'hui</p>
            <div class="md:flex md:justify-around mt-16 w-full">
                <div class="flex justify-center w-full">
                    <form action="" method="post">
                      <div>
                        <input type="text" placeholder="Entrez votre nom" class="text-tr w-80 h-11 px-2 focus:outline-none"    
                        style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)">
                    </div>
                    <div>
                        <input type="email" placeholder="Entrez votre adresse mail" class="text-tr w-80 h-11 px-2 mt-5 focus:outline-none"    
                        style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)">
                    </div>
                     <div>
                        <input type="text" placeholder="De quels pays êtes-vous ?" class="text-tr w-80 h-11 px-2 mt-5 focus:outline-none"    
                        style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)">
                    </div>
                    </form>
                </div>
                <div class="flex justify-center md:mt-0 mt-4 bg-b-main w-full">
                  <div class="">
                   <div>
                      <input type="password" placeholder="Entrez un mot de passe" class="text-tr w-80 h-11 px-2  focus:outline-none"    
                      style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)">
                    </div>
                    <div class="mt-5">
                      <input type="password" placeholder="Confirmez le mot de passe" class="text-tr w-80 h-11 px-2  focus:outline-none"    
                      style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)">
                    </div>
                    <div class="mb-4">
                        <button class="bg-by w-80 h-11 text-white mt-5">Crée le compte</button>
                    </div>
                </div>
                </div>
            </div>
            <div class="flex justify-center w-full  bg-b-main">
                  <div class=" w-full">
                      <p class="text-tr flex justify-center underline mb-4"> Continuer avec </p>
                      <div class=" cursor-pointer   flex justify-around relative lg:top-7 text-tr bg-b-main w-full"> 
                         <p class="hover:text-by">Google</p>   
                         <p class="hover:text-by">Facebook</p> 
                         <p class="hover:text-by">Apple</p>  
                      </div>
                  </div>
            </div>
        </div> 
    </div>
   <div class="flex lg:justify-between justify-center items-end w-full mt-52 ">
       <p class="text-vv lg:ml-14 lg:bottom-0 cursor-pointer hover:text-by relative bottom-3">Politique de confidentialité</p>
       <p class="text-vv mr-5 hidden lg:flex">© 2024 Eduvibe</p>
    </div>
 </div>
</template>

<script>
import BareNavLog from './components/BareNavLog.vue';
import Google from './assets/Network/Google.png';
import Facebook from './assets/Network/Facebook.png'
import IOS from './assets/Network/ios.png'
export default{
name:'SignUp',
  components:{
   BareNavLog
  },
data(){
    return{
     Google:Google,
     Facebook:Facebook,
     IOS:IOS
    }
}
}
</script>