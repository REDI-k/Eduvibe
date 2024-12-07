<template>
    <div class="absolute w-full z-[1000] bg-tt mt-96">
    <div @click="showModal = true"></div>
    <ModalC :showModal="showModal" :closeModal="closeModal" :Illustration="Illustration" Syt="w-full mt-96"/>
  </div>
  <div class="w-full  flex justify-center relative bottom-36 ">
    <div class="flex flex-col items-center bg-b-main w-full h-full">
      <div class="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-5 py-8 cursor-pointer" @click="showModal = true">
        <div v-for="item in paginatedItems" :key="item.id" class="text-white text-center flex justify-center">
          <div class="flex items-center cursor-pointer">
            <img v-if="item.image" :src="item.image" alt="image" class="relative right-7 bottom-6 md:right-0 md:bottom-0 h-14 w-20 mb-4" />
            <div class="relative">
              <p class="text-base font-semibold text-start hover:text-by">{{ item.name }}</p>
              <div>
                <p class="w-52 text-xs text-justify text-by">{{ item.Tarif }}</p>
                <p class="text-sm w-48 text-start text-tr">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination -->
       <nav aria-label="Page navigation" class="w-full flex justify-center">
        <ul class=" space-x-[1px] w-full">
          <div class="flex justify-center mr-2 ml-2 md:mr-0 md:ml-0">
          <li
            :class="['page-item', { 'text-gray-500': currentPage === 1, 'text-white': currentPage > 1 }]"
            @click="prevPage"
            :style="{ cursor: currentPage > 1 ? 'pointer' : 'default' }"
          >
            <a href="#" class="page-link block px-3 py-2 rounded-md">&laquo;</a>
          </li>
          <li v-for="page in paginationPages" :key="page" class="page-item">
            <a
              href="#"
              v-if="page !== '...'"
              :class="['page-link block px-3 py-2 rounded-md mr-[-28px] md:mr-0', { 'bg-blue-600 text-white': page === currentPage, 'text-gray-500': page !== currentPage }]"
              @click="changePage(page)"
            >{{ page }}</a>
            <a
              v-else
              href="#"
              class="page-link block px-3 py-2 rounded-md text-gray-500 mr-3 md:mr-0"
              @click="ellipsisClick(page === paginationPages[1] ? 'start' : 'end')"
            >...</a>
          </li>
          <li
            :class="['page-item', { 'text-gray-500': currentPage === totalPages, 'text-white': currentPage < totalPages }]"
            @click="nextPage"
            :style="{ cursor: currentPage < totalPages ? 'pointer' : 'default' }"
            class="mr-3 md:mr-0">
            <a href="#" class="page-link block px-3 py-2 rounded-md">&raquo;</a>
          </li>
        </div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import ModalC from '../ModalC.vue'
import Matlab from '../../assets/AppLogo/Matlab.png'
import Maya from '../..//assets/AppLogo/Maya.png'
import Postman from '../../assets/AppLogo/Postman.png'
import Hibou from '../../assets/AppLogo/Hibou.png'
import Carme from '../../assets/AppLogo/Carme.png'
import AfterEffet from '../../assets/AppLogo/AfterEffet.png'
import Audite from '../../assets/AppLogo/Audite.png'
import Aut from '../../assets/AppLogo/Aut.png'
import Avaste from '../../assets/AppLogo/Avaste.png'
import Baste from '../../assets/AppLogo/Baste.png'
import Blender from '../../assets/AppLogo/Blender.png'
import Breack from '../../assets/AppLogo/Breack.png'
import C from '../../assets/AppLogo/C.png'
import Cal from '../../assets/AppLogo/Cal.png'
import Calculator from '../../assets/AppLogo/Calculator.png'
import Call from '../../assets/AppLogo/Call.png'
import Cameraa from '../../assets/AppLogo/Cameraa.png'
import Camlast from '../../assets/AppLogo/Camlast.png'
import Casquette from '../../assets/AppLogo/Casquette.png'
import Center from '../../assets/AppLogo/Center.png'
import Charactère from '../../assets/AppLogo/Charactère.png'
import Charte from '../../assets/AppLogo/Charte.png'
import Drone from '../../assets/AppLogo/Drone.png'
import Winbox from '../../assets/AppLogo/Winbox.png'
import Chat2 from '../../assets/AppLogo/Chat2.png'
import Chro from '../../assets/AppLogo/Chro.png'
import Cinema4D from '../../assets/AppLogo/Cinema4D.png'
import Desktop from '../../assets/AppLogo/Desktop.png'
import Dessin from '../../assets/AppLogo/Dessin.png'
import EdgeforDev from '../../assets/AppLogo/EdgeforDev.png'
import ELE from '../../assets/AppLogo/ELE.png'
import Eliser from '../../assets/AppLogo/Eliser.png'
import Fantome from '../../assets/AppLogo/Fantome.png'
import Fantomme from '../../assets/AppLogo/Fantomme.png'
import Fenix from '../../assets/AppLogo/Fenix.png'
import feuille from '../../assets/AppLogo/feuille.png'
import Filmora from '../../assets/AppLogo/Filmora.png'
import FlStudio from '../../assets/AppLogo/Fl Studio.png'
import Fung from '../../assets/AppLogo/Fung.png'
import Game from '../../assets/AppLogo/Game.png'
import Gest from '../../assets/AppLogo/Gest.png'
import Gestion from '../../assets/AppLogo/Gestion.png'
import Gestionaire from '../../assets/AppLogo/Gestionaire.png'
import Gestional from '../../assets/AppLogo/Gestional.png'
import Gestionn from '../../assets/AppLogo/Gestionn.png'
import Gestionnaire from '../../assets/AppLogo/Gestionnaire.png'
import Gether from '../../assets/AppLogo/Gether.png'
import Global from '../../assets/AppLogo/Global.png'
import Globe from '../../assets/AppLogo/Globe.png'
import Gmaile from '../../assets/AppLogo/Gmail.png'
import GNS3 from '../../assets/AppLogo/GNS3.png'
import GoogleCode from '../../assets/AppLogo/Google Code.png'
import Hack from '../../assets/AppLogo/Hack.png'
import Hackin from '../../assets/AppLogo/Hackin.png'
import HackingDark from '../../assets/AppLogo/Hacking Dark.png'
import HackingVar from '../../assets/AppLogo/Hacking Var.png'
import Hacking from '../../assets/AppLogo/Hacking.png'
import HackingVue from '../../assets/AppLogo/HackingVue.png'
import Hercul from '../../assets/AppLogo/Hercul.png'
import hiboux from '../../assets/AppLogo/hiboux.png'
import horme from '../../assets/AppLogo/horme.png'
import Illistrator from '../../assets/AppLogo/Illistrator.png'
import ilse from '../../assets/AppLogo/ilse.png'
import Infini from '../../assets/AppLogo/Infini.png'
import KaliLunix from '../../assets/AppLogo/Kali-Lunix.png'
import Kalix from '../../assets/AppLogo/Kalix.png'
import Lala from '../../assets/AppLogo/Lala.png'
import Larv from '../../assets/AppLogo/Larv.png'
import Laval from '../../assets/AppLogo/Laval.png'
import Lecteur from '../../assets/AppLogo/Lecteur.png'
import Leo from '../../assets/AppLogo/Leo.png'
import liv from '../../assets/AppLogo/liv.png'
import Livail from '../../assets/AppLogo/Livail.png'
import Meta from '../../assets/AppLogo/Meta.png'
import Navba from '../../assets/AppLogo/Navba.png'
import Navigate from '../../assets/AppLogo/Navigate.png'
import Navigator from '../../assets/AppLogo/Navigator.png'
import OBS from '../../assets/AppLogo/OBS.png'
import Oculus from '../../assets/AppLogo/Oculus.png'
import Offix from '../../assets/AppLogo/Offix.png'
import oiseau from '../../assets/AppLogo/oiseau.png'
import Ok from '../../assets/AppLogo/Ok.png'
import Ondriver from '../../assets/AppLogo/Ondriver.png'
import Ours from '../../assets/AppLogo/Ours.png'
import PayPal from '../../assets/AppLogo/PayPal.png'
import Phot from '../../assets/AppLogo/Phot.png'
import Photo from '../../assets/AppLogo/Photo.png'
import PhotoShop from '../../assets/AppLogo/PhotoShop.png'
import Pic from '../../assets/AppLogo/Pic.png'
import picture from '../../assets/AppLogo/picture.png'
import poulpe from '../../assets/AppLogo/poulpe.png'
import Pr from '../../assets/AppLogo/Pr.png'
import PremierPro from '../../assets/AppLogo/PremierPro.png'
import Pycharm from '../../assets/AppLogo/Pycharm.png'
import Rol from '../../assets/AppLogo/Rol.png'
import Stac from '../../assets/AppLogo/Stac.png'
import Stact from '../../assets/AppLogo/Stact.png'
import Super from '../../assets/AppLogo/Super.png'
import Superbe from '../../assets/AppLogo/Superbe.png'
import Tareau from '../../assets/AppLogo/Tareau.png'
import TranslatePlus from '../../assets/AppLogo/Translate+.png'
import Translete from '../../assets/AppLogo/Translete.png'
import Trasnl from '../../assets/AppLogo/Trasnl.png'
import Windows from '../../assets/AppLogo/Windows.png'
import Opera from '../../assets/AppLogo/Opera.png'
import Twitter from '../../assets/AppLogo/Twinter.png'
import Camera from '../../assets/AppLogo/Camera.png'
import Android from '../../assets/AppLogo/Android.png'
import Anti from '../../assets/AppLogo/Anti.png'
import Audio from '../../assets/AppLogo/Audio.png'
import AWS from '../../assets/AppLogo/AWS.png'
import Bela from '../../assets/AppLogo/Bela.png'
import Chat from '../../assets/AppLogo/Chat.png'
import Chat1 from '../../assets/AppLogo/Chat1.png'
import Chien from '../../assets/AppLogo/Chien.png'
import Chrome from '../../assets/AppLogo/Chrome.png'
import Clock from '../../assets/AppLogo/Clock.png'
import Colp from '../../assets/AppLogo/colp.png'
import Elipse from '../../assets/AppLogo/Elipse.png'
import Figma from '../../assets/AppLogo/Figma.png'
import GitHub from '../../assets/AppLogo/GitHub.png'
import Google from '../../assets/AppLogo/Google.png'
import Kijiji from '../../assets/AppLogo/Kijiji.png'
import Lb from '../../assets/AppLogo/Lb.png'
import Louve from '../../assets/AppLogo/Louve.png'
import Nav from '../../assets/AppLogo/Nav.png'
import Niv from '../../assets/AppLogo/Niv.png'
import Nivela from '../../assets/AppLogo/Nivela.png'
import Robot from '../../assets/AppLogo/Robot.png'
import Slack from '../../assets/AppLogo/Slack.png'
import Translate from '../../assets/AppLogo/Translate.png'
import VisualX from '../../assets/AppLogo/Visual X.png'
import VisualStudio from '../../assets/AppLogo/VisualStudio.png'
import Vue from '../../assets/AppLogo/Vue.png'
import Wordpress from '../../assets/AppLogo/wordpress.png'
import Robote from '../../assets/AppLogo/Robote.png'
import Illustration from '../../assets/Contact/Illustration.gif';
export default {
   name: 'AppDownloand',
   components:{
    ModalC
   },
  data() {
    return {
      items: [
        { id: 1, name: "Chrome", image: Chrome, Tarif:'Gratuit', description:'navigateur rapide et sécurisé de Google, avec synchronisation et confidentialité intégrées.' },
        { id: 2, name: "Louve", image: Louve,Tarif:'Gratuit', description:'Live Class : plateforme interactive pour suivre des cours en direct avec des enseignants.' },
        { id: 3, name: "Audio Course", image: Audio, Tarif:'($5) Version gratuit disponible.', description:'Audio Course : Apprenez en écoutant des cours audio pratiques et accessibles.'},
        { id: 4, name: "Wordpress", image:Wordpress,Tarif:'Gratuit', description:'WordPress : Créez facilement des sites web et blogs personnalisés.' },
        { id: 5, name: "Zoom", image:Vue,Tarif:'Gratuit', description:'Zoom : Plateforme de visioconférence pour réunions, cours, et collaborations en ligne.'  },
        { id: 6, name: "Robote", image:Robote,Tarif:'Gratuit', description:'Lecteur intelligent : Application intuitive pour lire, annoter et résumer vos livres.'  },
        { id: 7, name: "VisualStudio", image:VisualStudio,Tarif:'Gratuit', description:'Éditeur de code avancé pour le développement, personnalisable et performant.' },
        { id: 8, name: "VisualX ", image:VisualX,Tarif:'Gratuit', description:'IDE puissant en mauve, parfait pour écrire et déboguer du code efficacement.'  },
        { id: 9, name: "Translate", image:Translate,Tarif:'Gratuit', description:'Application de traduction rapide et précise pour tous vos besoins multilingues.' },
        { id: 10, name: "Slack", image:Slack,Tarif:'Gratuit', description:"Application de messagerie collaborative pour une communication d'équipe fluide et organisée."},
        { id: 11, name: "Robot",image:Robot,Tarif:'($2) Version gratuit disponible.', description:'Application pour organiser, partager et collaborer efficacement sur vos documents.'},
        { id: 12, name: "Nivela", image:Nivela,Tarif:'($14) Version gratuit disponible.', description:'Éditeur de code puissant pour développer, déboguer et collaborer efficacement..'},
        { id: 13, name: "Niv",image:Niv,Tarif:'($10) Version gratuit disponible.', description:'Plateforme dédiée à l’organisation et au partage de fichiers.'},
        { id: 14, name: "Navarda", image:Nav,Tarif:'($15) Version gratuit disponible.', description:'Plateforme CMS pour créer et gérer facilement des applications mobiles.'},
        { id: 15, name: "Balviews Core", image:Lb,Tarif:'Gratuit', description:"Application permettant aux étudiants de consulter leurs notes et résultats d'examens."},
        { id: 16, name: " Kijiji", image: Kijiji,Tarif:'($4.5) Version gratuit disponible.', description:"Application dédiée à l'optimisation des campagnes de marketing digital et de performance."},
        { id: 17, name: "Google", image: Google,Tarif:'Gratuit', description:"Application Google dédiée à la recherche et à l'accès facile aux cours en ligne."},
        { id: 18, name: " GitHub",image: GitHub,Tarif:'Gratuit', description:"Plateforme collaborative pour héberger, partager et gérer des projets de code source."},
        { id: 19, name: "Figma", image: Figma,Tarif:'Gratuit', description:"Outil de design collaboratif pour la création d'interfaces et de prototypes interactifs."},
        { id: 20, name: "Elipse",image: Elipse,Tarif:'($2.5) Version gratuit disponible.', description:'Application de gestion de projets pour organiser, suivre et collaborer efficacement.'},
        { id: 21, name: "Colp", image:Colp,Tarif:'Gratuit', description:"Application de collaboration en ligne pour travailler en équipe et résoudre des projets."},
        { id: 22, name: "Clock",image:Clock,Tarif:'Gratuit', description:"Application de gestion du temps pour optimiser l'organisation et la productivité."},
        { id: 23, name: "NivLab",image:Chien,Tarif:'Gratuit', description:"Application pour organiser, stocker et gérer facilement vos fichiers et documents."},
        { id: 24, name: "Chat One",image:Chat1,Tarif:'Gratuit', description:"Application de chat dédiée pour faciliter la communication entre professeurs et étudiants."},
        { id: 25, name: "Snapchat",image:Chat,Tarif:'Gratuit', description:"Partage instantané de photos et vidéos éphémères avec vos amis sur Snapchat."},
        { id: 26, name: " Bela", image:Bela,Tarif:'($13.5) Version gratuit disponible.', description:"Optimisez vos campagnes et analysez les performances avec une app de marketing digital."},
        { id: 27, name: "Amazon Web Service", image:AWS,Tarif:'($1.5) Version gratuit disponible.', description:"Puissante plateforme cloud pour le stockage, calcul, et déploiement d'applications."},
        { id: 28, name: "Anvaste",image:Anti,Tarif:'Gratuit', description:"Protection antivirus avancée pour sécuriser vos appareils contre les menaces en ligne." },
        { id: 29, name: "Android Studio",image:Android,Tarif:'Gratuit', description:"Environnement complet pour créer, tester et déployer des applications Android."},
        { id: 30, name: "Camera Live Learning ",image:Camera,Tarif:'Gratuit', description:"Plateforme de vidéo en direct dédiée aux cours en ligne interactifs."},
        { id: 31, name: "Twitter ",image:Twitter,Tarif:'Gratuit', description:"Application pour suivre les tendances, actualités et discussions en direct."},
        { id: 32, name: "Opera",image:Opera,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 33, name: "Matlab",image:Matlab,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 34, name: "Maya",image:Maya,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 35, name: "Postman",image:Postman,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 36, name: "Hibou",image:Hibou,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 37, name: "Carme",image:Carme,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 38, name: "Audite",image:Audite,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 39, name: "Aut",image:Aut,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 40, name: "Aut",image:AfterEffet,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 41, name: "Baste",image:Baste,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 42, name: "Blender",image:Blender,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 43, name: "C",image:C,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 44, name: "Cal ",image:Cal ,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 45, name: "Calculator",image:Calculator,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 46, name: "Call",image:Call,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 47, name: "Cameraa",image:Cameraa,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 48, name: "Camlast",image:Camlast,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 49, name: "Casquette",image:Casquette,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 50, name: "Center",image:Center,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 51, name: "Charactère",image:Charactère,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 52, name: " Charte",image: Charte,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 53, name: "Chat2",image:Chat2,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 54, name: "Chro",image:Chro,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 55, name: "Cinema 4D",image:Cinema4D,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 56, name: "Desktop",image:Desktop,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 57, name: "Dessin",image:Dessin,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 58, name: "Edge for Dev",image:EdgeforDev,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 59, name: "ELE",image:ELE,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 60, name: "Eliser ",image:Eliser ,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 61, name: "Fantome",image:Fantome,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 62, name: "Drone",image:Drone,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},         
        { id: 63, name: "Winbox",image:Winbox,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 64, name: "Fenix",image:Fenix,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 65, name: "feuille",image:feuille,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 66, name: "Filmora",image:Filmora,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 67, name: "Feuille",image:feuille,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 68, name: "Fl Studio",image:FlStudio,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 69, name: "Fung",image:Fung,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 70, name: "Game",image:Game,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 71, name: "Gest",image:Gest,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 72, name: "Gestion",image:Gestion,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 73, name: "Gestionaire",image:Gestionaire,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 74, name: "Gestional",image:Gestional,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 75, name: "Gestionn ",image:Gestionn ,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 76, name: "Gestionnaire",image:Gestionnaire,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 77, name: "Gether",image:Gether,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 78, name: "Global",image:Global,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 79, name: "Globe",image:Globe,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 80, name: "Feuille",image:feuille,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 81, name: "Gmaile",image:Gmaile,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 82, name: "GNS3",image:GNS3,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 83, name: "GoogleCode",image:GoogleCode,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
        { id: 84, name: "Hack",image:Hack,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 85, name: "Hackin",image:Hackin,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 86, name: "HackingDark",image:HackingDark,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 87, name: " HackingVar",image: HackingVar,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 88, name: "Hacking",image:Hacking,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 89, name: " HackingVue",image: HackingVue,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 90, name: "hiboux",image:hiboux,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 91, name: "horme",image:horme,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 92, name: "Illistrator",image:Illistrator,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 93, name: "Hercul",image:Hercul,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 94, name: "Ilse",image:ilse,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 95, name: "Infini",image:Infini,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 96, name: "KaliLunix",image:KaliLunix,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 97, name: "Kalix",image:Kalix,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 98, name: "Lala",image:Lala,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 99, name: "Larv",image:Larv,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 100, name: "Laval",image:Laval,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 101, name: "Lecteur",image:Lecteur,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 102, name: "Leo",image:Leo,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 103, name: "liv",image:liv,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 104, name: "Livail",image:Livail,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 105, name: " Meta",image: Meta,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 106, name: "Navba",image:Navba,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 107, name: "Navigate",image:Navigate,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 108, name: "OBS Studio",image:OBS,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 109, name: "GoogleCode",image:GoogleCode,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 110, name: "GoogleCode",image:GoogleCode,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 111, name: "Navigator",image:Navigator,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 112, name: "Offix",image:Offix,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 113, name: "Ok",image:Ok ,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 114, name: "oiseau",image:oiseau,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 115, name: "Ondriver",image:Ondriver,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 116, name: "Ours",image:Ours,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 117, name: "PayPal",image:PayPal,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 118, name: "Phot",image:Phot,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 119, name: "Oculus",image:Oculus,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 120, name: "Photo",image:Photo,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 121, name: "PhotoShop",image:PhotoShop,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 122, name: "Pic",image:Pic,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 123, name: "picture",image:picture,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 124, name: "poulpe",image:poulpe,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 125, name: "Pr",image:Pr,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 126, name: "Premier Pro",image:PremierPro,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 127, name: "Pycharm",image:Pycharm,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 128, name: "Rol",image:Rol,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 129, name: "Stac",image:Stac,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 130, name: "Stact ",image:Stact,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 131, name: "Super ",image:Super,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 132, name: "Superbe",image:Superbe,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 133, name: "Tareau",image:Tareau,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 134, name: "TranslatePlus",image:TranslatePlus,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 135, name: "Translete ",image:Translete,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 136, name: "Trasnl",image:Trasnl,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 137, name: "PhotoShop",image:PhotoShop,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 138, name: "Avaste",image:Avaste,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 139, name: "Windows",image:Windows,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 140, name: "Breack",image:Breack,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 141, name: "Fantomme",image:Fantomme,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."},
        { id: 142, name: "AfterEffet",image:AfterEffet,Tarif:'Gratuit', description:"Navigateur rapide avec bloqueur de pub intégré et VPN gratuit."}, 
      ],
      currentPage: 1, // Page actuelle
      itemsPerPage:24, // Valeur par défaut pour les grands écrans (12 éléments par page)
      itemsPerRow: 4, // Par défaut, 4 éléments par ligne
      itemsPerColumn:4, // Par défaut, 3 lignes de 4 éléments
      Illustration,
      showModal: false,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage); // Nombre total de pages
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage; // Index de début des éléments pour la page actuelle
      const end = start + this.itemsPerPage; // Index de fin
      return this.items.slice(start, end); // Extraire les éléments de la page actuelle
    },
    paginationPages() {
      const pages = [];
      if (this.totalPages <= 5) {
        // Si le total de pages est inférieur ou égal à 5, afficher tous les boutons de page
        for (let i = 1; i <= this.totalPages; i++) pages.push(i);
      } else if (this.currentPage <= 3) {
        // Si on est au début, afficher les 3 premières pages, "..." et la dernière page
        pages.push(1, 2, 3, '...', this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        // Si on est proche de la fin, afficher la première page, "...", et les 3 dernières pages
        pages.push(1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        // Sinon, afficher la première page, "...", la page courante ±1, "..." et la dernière page
        pages.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
      }

      // Limiter à 5 boutons de page avec "..."
      if (pages.length > 5) {
        if (this.currentPage <= 3) {
          return pages.slice(0, 4).concat(['...', this.totalPages]);
        } else if (this.currentPage >= this.totalPages - 2) {
          return [1, '...'].concat(pages.slice(-4));
        } else {
          return [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages];
        }
      }

      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page !== '...') {
        this.currentPage = page; // Changer la page courante
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1; // Page précédente
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1; // Page suivante
      }
    },
    ellipsisClick(position) {
      if (position === 'start') {
        // Aller directement à la première page intermédiaire après la page 1
        this.currentPage = 3;
      } else if (position === 'end') {
        // Aller directement à la première page intermédiaire avant la dernière page
        this.currentPage = this.totalPages - 2;
      }
    },
    handleResize() {
      const width = window.innerWidth;

      if (width >= 1280) { // lg et plus grand
        this.itemsPerRow = 4; // 4 éléments par ligne
        this.itemsPerColumn = 4; // 3 lignes de 4 éléments (12 éléments max)
        this.itemsPerPage = 24; // 12 éléments par page

      } else if (width >= 1024) { // md (tablettes ou plus grands)
        this.itemsPerRow = 3; // 4 éléments par ligne
        this.itemsPerColumn =3; // 3 lignes de 4 éléments (12 éléments max)
        this.itemsPerPage =12; // 12 éléments par page

      }else if (width >= 768) { // sm (petites tablettes ou plus grands)
      this.itemsPerRow =3; // 4 éléments par ligne horizontale
      this.itemsPerColumn =4; // 3 colonnes verticales
      this.itemsPerPage =12; // 4 lignes x 3 colonnes = 12 éléments par page
      }
       else{ // xs (écrans plus petits)
        this.itemsPerRow = 2; // 1 élément par ligne
        this.itemsPerColumn =4; // 6 lignes de 1 élément (6 éléments max)
        this.itemsPerPage = 8; // 6 éléments par page
      }
    },closeModal() {
      this.showModal = false; 
    }
  },
  mounted() {
    this.handleResize(); // Appel initial pour ajuster selon la taille de l'écran
    window.addEventListener('resize', this.handleResize); // Écouteur d'événement pour redimensionner
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize); // Nettoyage lors du démontage du composant
  },
};
</script>

<style scoped>
.page-item {
  cursor: pointer;
  padding: 0.5rem 1rem;
}
</style>
