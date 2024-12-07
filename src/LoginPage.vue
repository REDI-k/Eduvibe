<template>
 <div class="relative flex-col min-h-screen bg-b-main">
    <div class="w-full z-10 fixed md:absolute">
      <BareNavLog  nameButton="Créer un compte"  redirect="/SignUp" /> 
    </div>
    <div class="flex justify-center items-center relative  top-36">
        <div class="">
            <!-- text-white text-4xl font-bold flex justify-center -->
            <h1 class="text-white text-4xl font-bold flex justify-center text-center">Connectez-vous à votre compte</h1>
            <p class="text-tr text-center mt-4">Accédez à votre espace d'apprentissage et découvrez un monde de connaissances à porée de clic.</p>
            <!-- flex mt-16 justify-around -->
            <div class="md:flex md:justify-around md:mt-16 mt-14">
                <div class="flex justify-center w-full">
                    <form action="" method="post">
                      <div>
                        <!-- text-tr w-72 h-11 px-2 focus:outline-none -->
                        <input type="email" placeholder="Entrez votre adresse mail" class="text-tr w-80 h-11 px-2 focus:outline-none"    
                        style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)">
                    </div>
                    <div>
                        <input type="password" placeholder="Entrez votre mot de passe" class="text-tr w-80 h-11 px-2 mt-5 focus:outline-none"    
                        style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%)">
                    </div>
                    <div>
                        <button class="bg-by w-80 overflow-hidden h-11 text-white mt-5">Se connecter</button>
                    </div>
                     <div class="md:hidden flex justify-center w-full bg-b-main ">
                        <p class="text-tr cursor-pointer underline hover:text-by mt-5">Mot de passe oublié?</p>
                    </div>
                    <div class="md:hidden flex justify-center w-full bg-b-main ">
                       <router-link to="/SignUp"><p class="text-tr cursor-pointer underline hover:text-by mt-5">Créer un compte</p></router-link>
                    </div>
                    </form>
                </div>
                <div class="flex justify-center w-full mt-7 bg-b-main md:mt-0">
                    <div>
                    <div class="w-80 h-11 border-2 border-by  flex justify-start items-center cursor-pointer">
                        <img :src="Google" alt="" srcset="" class="w-7 h-7 ml-1">
                        <p class="text-white ml-3">Se connecter avec Google</p>
                    </div>
                    <div class="w-80 h-11 border-2 border-by  flex justify-start items-center cursor-pointer mt-5">
                        <img :src="Facebook" alt="" srcset="" class="w-7 h-7 ml-1">
                        <p class="text-white ml-3">Se connecter avec Facebook</p>
                    </div>
                     <div class="w-80 h-11 border-2 border-by  flex justify-start items-center cursor-pointer mt-5">
                        <img :src="IOS" alt="" srcset="" class="w-7 h-7 ml-1">
                        <p class="text-white ml-3 ">Se connecter avec Appel</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="md:flex justify-center w-full mt-14 hidden">
                <p class="text-tr cursor-pointer underline hover:text-by mt-5">Mot de passe oublié?</p>
            </div>
            <div class="hidden md:flex justify-center w-full bg-b-main ">
               <router-link to="/SignUp"><p class="text-tr cursor-pointer underline hover:text-by mt-5">Créer un compte</p></router-link>
            </div>
        </div> 
    </div>
    <!-- flex justify-between items-end w-full mt-52 -->
    <div class="flex md:justify-between justify-center items-end w-full mt-52 ">
        <!-- text-vv ml-14 cursor-pointer hover:text-by -->
       <p class="text-vv lg:ml-14 lg:bottom-0 cursor-pointer hover:text-by relative bottom-3">Politique de confidentialité</p>
       <p class="text-vv mr-5 hidden md:flex">© 2024 Eduvibe</p>
    </div>
 </div>
</template>

<script>
import BareNavLog from './components/BareNavLog.vue';
import Google from './assets/Network/Google.png';
import Facebook from './assets/Network/Facebook.png'
import IOS from './assets/Network/ios.png'
export default{
name:'LoginPage',
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