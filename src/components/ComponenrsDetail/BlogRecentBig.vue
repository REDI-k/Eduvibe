<template>
    <div class="relative w-wr h-96">
      <img :src="ImageBlogOne" alt="Image blog" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/25 to-black/20"></div>
    </div>
    <div class="flex mt-6 items-center">
        <img :src="ImageProfil" alt="Image Profil" class="w-12 h-12 rounded-full">
        <div class="ml-5">
            <p class="text-fg">{{ NameProfil }}</p>
            <p class="text-by text-sm">{{ DescriptionProfil }}</p>
        </div>
        <div class="flex  items-center ml-14 mt-5">
            <img :src="DateP" alt="" class="w-12 h-12">
            <p class="text-sm text-fg">{{ DatePublic }}</p>
        </div>
    </div>
    <div class="mt-5">
      <p class="text-fg font-bold text-2xl w-wv">{{ TitlePublic }}</p>
      <p class="w-wr text-justify text-fg mt-3">{{ Public }}</p>
                
       <div class="mt-3 flex justify-around items-center  w-wr">
          <div class="flex items-center relative top-1 cursor-pointer">
            <img :src="Commentaire" alt="" class="w-6 h-6">
            <p class="text-tr text-sm  mb-1">{{ Comment }}</p>
          </div>

          <div class="flex items-center  cursor-pointer">
            <img :src="Likke" alt="" class="w-5 h-5">
            <p class="text-tr text-sm ml-2 mt-1">{{ Like }}</p>
          </div>

          <div class="flex items-center  cursor-pointer">
            <img :src="Partage" alt="" class="w-5 h-5">
            <p class="text-tr text-sm ml-2 mb-1">{{ Send }}</p>
          </div>


        </div>
    </div>

</template>

<script>

import DateP from '../../assets/Favicon/Date-Heure.png'
import Commentaire from '../../assets/Favicon/Commentaire.png'
import Likke from '../../assets/Favicon/Like(1).png'
import Partage from '../../assets/Favicon/Partage.png'

export default{
name:'BlogRecentBig',
props:{ ImageBlogOne:{ type:String, required:true}, 
        ImageProfil:{ type:String, required:true },
        NameProfil:{  type:String, required:true },
        DescriptionProfil:{ type:String, required:true },
        DatePublic:{ type:String, required:true },
        TitlePublic:{ type:String, required:true },
        Public:{ type:String, required:true },
        Comment:{ type:String, required:true},
        Like:{ type:String, required:true },
        Send:{ type:String, required:true}

      },
data(){
    return{
     Commentaire:Commentaire,
     Likke:Likke,
     Partage:Partage,
     DateP:DateP
    }
}
}
</script>
