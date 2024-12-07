<template>
    <div class="w-full">
      <div class="w-full mb-36">
        <div class="w-full mb-6">
           <p class="text-white ml-36 text-3xl font-bold">les plus récents</p>
       
        </div>
        
        <div class="w-full flex justify-center"> 
          <div class="">
            <div class=" flex justify-center ml-24">
               <div class=""> 
                 <BlogSection :ImagePost="BlogThree" :titlePost="TitleThreeBlog" :datePublication="DateThreeBlog" />
                 <BlogSection :ImagePost="BlogTwo" :titlePost=" TitleForBlog" :datePublication="DateForBlog" />
               </div>
              <div class="ml-5 mt-6">
                 <BlogRecentBig :ImageBlogOne="BlogOne" :ImageProfil="PersonaOne" :NameProfil="NameProfil" :DescriptionProfil=" DescriptionProfil"
                  :DatePublic="DatePublic" :TitlePublic="TitlePublic" :Public="Public"
                  :Comment="Comment" :Like="Likee" :Send="Sende" />
              </div>
              <div class="relative right-20"> 
                 <BlogSection :ImagePost="BlogFor" :titlePost="TitleFiveBlog" :datePublication="DateFiveBlog" />
                 <BlogSection :ImagePost="BlogFive" :titlePost="TitleFiveBlog" :datePublication="DateFiveBlog" />
              </div>
            </div>
          </div>
         </div>
      </div>

     <div class="w-full mt-36 ">
       <h2 class="pl-6 text-white text-2xl font-bold mb-6 ml-10">Tout les blogs</h2>
       <hr class="bg-gray-200 opacity-10 ml-6 mr-6" style="height: 1px; width: 95%;">
       <div class="flex justify-evenly">
         <BlogPopulaire :ImageBlogs="BlogSix" :TitleBlogP="TitleBlogP" :DatePublicP="DatePublicP" :ImgProfil="PersonaTwo" :NameProfil="NameProfilOne" />
         <BlogPopulaire :ImageBlogs="BlogSeven" :TitleBlogP="TitleBlogP" :DatePublicP="DatePublicP" :ImgProfil="PersonaThree" :NameProfil="NameProfilTwo" />
         <BlogPopulaire :ImageBlogs="BlogEight" :TitleBlogP="TitleBlogP" :DatePublicP="DatePublicP" :ImgProfil="PersonaFor" :NameProfil="NameProfilThree"/>
       </div>
     </div>
   </div>
</template>

<script>
import BlogOne from '../assets/Blog/1.jpg'
import BlogTwo from '../assets/Blog/2.jpg'
import BlogThree from '../assets/Blog/3.jpg'
import BlogFor from '../assets/Blog/4.jpg'
import BlogFive from '../assets/Blog/5.jpg'
import BlogSix from '../assets/Blog/6.jpg'
import BlogSeven from '../assets/Blog/7.jpg'
import BlogEight from '../assets/Blog/8.jpg'
import BlogNine from '../assets/Blog/9.jpg'
import BlogTen from '../assets/Blog/10.jpg'
import PersonaOne from '../assets/Teacher/01c2c46a22c0ccc68ef2de1c39bc20c8.jpg'
import PersonaTwo from '../assets/Teacher/7d3ece85ea49c7cdf2ca6ba09e5e831d.jpg'
import PersonaThree from '../assets/Teacher/e02925ed8f92b4d580704ca0810a9a4a.jpg'
import PersonaFor from '../assets/Teacher/2f2e3158d120cbe179386bae11f4b2b5.jpg'
import PersonaFive from '../assets/Teacher/ed7e4442d2176de94a30460088d7d12c.jpg'
import PersonaSix from '../assets/Teacher/e89d0230a238508556f064a80e946fa2.jpg'
import PersonaSeven from '../assets/Teacher/fe15bafe7006c14f7f879e28a5abbf54.jpg'
import Date from '../assets/Favicon/Date-Heure.png'
import Commentaire from '../assets/Favicon/Commentaire.png'
import Like from '../assets/Favicon/Like(1).png'
import Send from '../assets/Favicon/Partage.png'
import BlogSection from './ComponenrsDetail/BlogSection.vue'
import BlogRecentBig from './ComponenrsDetail/BlogRecentBig.vue'
import BlogPopulaire from './ComponenrsDetail/BlogPopulaire.vue'
export default{
 name:'BlogPublier',
 components:{ BlogSection, BlogRecentBig, BlogPopulaire},
 data(){
    return{
        BlogOne:BlogOne,
        PersonaOne:PersonaOne,
        PersonaTwo:PersonaTwo,
        PersonaThree:PersonaThree,
        PersonaFor:PersonaFor,
        PersonaFive:PersonaFive,
        PersonaSix:PersonaSix,
        PersonaSeven:PersonaSeven,
        Date:Date,
        Commentaire:Commentaire,
        Like:Like,
        Send: Send,
        BlogThree:BlogThree,
        BlogTwo:BlogTwo,
        BlogFor:BlogFor,
        BlogFive:BlogFive,
        BlogSix:BlogSix,
        BlogSeven:BlogSeven,
        BlogEight:BlogEight,
        BlogNine:BlogNine,
        BlogTen:BlogTen,

        TitleThreeBlog:"Quels sont les avantages des réseaux sociaux dans notre...",
        DateThreeBlog:"24 Nov 2024 11:20",

        TitleForBlog:"Comment organiser ses tâches efficacement pour rester...",
        DateForBlog:"26 Nov 2024 06:30",

        TitleFiveBlog:"Comprendre les bases  pour mieux construire",
        DateFiveBlog:"27 Nov 2024 08:04",

        TitleSixBlog:"L'ennui au travail : Comprendre et transformer ce mal silencieux",
        DateSixBlog:"29 Nov 2024 20:34",

        NameProfil:'Clara Osvate',
        DescriptionProfil:'Développeuse web Data analyste',
        DatePublic:"20 Nov 2024 14:34",
        TitlePublic:"L'essor de l'apprentissage numérique : Une révolution éducative à portée de clic",
        Public: "Aujourd’hui, nous vivons une époque où le numérique redéfinit notre manière d'apprendre, de travailler et d'interagir. En tant que développeuse web et data analyste, j’observe chaque jour comment ces transformations façonnent nos vies et offrent des opportunités inédites pour progresser...",
        Comment:'1.4K',
        Likee:'50.3K',
        Sende:'70K',
      // Populaire Blg
        TitleBlogP:'Comment organiser ses tâches efficacement pour rester...',
        DatePublicP:"26 Nov 2024 06:30",
      // 
        NameProfilOne:"Paul Kalala",
        NameProfilTwo:"Fréderick braffo",
        NameProfilThree:"Rose Keplwan",
      // 
       NamePersoOne:"Clara Osvate",
       NamePersoTwo:'Paul Kalala'
    }
 }
}
</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 6px; 
}
.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%); 
border-radius: 8px; 
}
.custom-scroll::-webkit-scrollbar-thumb:hover {
background: linear-gradient(90deg, rgba(50,55,61,0.7) 0%, rgba(50,55,61,0.5) 100%);
}
</style>