<template>
  <div class="flex justify-center w-full bg-b-main min-h-screen z-10">
    <div class="w-full mb-52 rounded-2xl z-35">
     <div class="flex justify-center">
      <p class="text-white  font-bold text-4xl text-center ">Nos Formations</p>
     </div> 
     <div class="w-full">
       <div class="mt-12   pb-4 border-b-2 border-cr z-10 ml-1 mr-1 lg:ml-12 lg:mr-12  h-11">
         <div class="flex relative ">
            <div v-for="filter in filters" :key="filter.value" class="cursor-pointer  w-52" 
              @click="activeFilter = filter.value">
              <div class="flex justify-start">
                <p :class="[ 'font-semibold', 
                  activeFilter === filter.value ? 'text-by ' : 'text-white  hover:text-by'
                    ]" style="margin-left:1px; margin-right:4px ">
                     {{ filter.label }}
                </p>
              </div>
              <div class="w-full h-5">
                <div :class="['h-1 rounded-t-10 z-20 ',activeFilter === filter.value ? 'bg-by mr-1  mt-4' : 'mr-1']"
                  :style="{ width: filter.width }"></div>
              </div>
            </div>
          </div>
        </div>
     </div>
   <div class="w-full lg:flex lg:justify-center flex justify-center">
      <div
        :class="[
          'mt-20  lg:flex lg:gap-10 lg:w-[98%]',
          filteredItems.length < 3 ? 'lg:justify-center' : 'lg:justify-center'
        ]"> 
        <CourseDetaille
          v-for="item in filteredItems"
          :key="item.id"
          :ImgCours="item.image"
          :NameCours="item.name"
          :TitleCours="item.title"
          :Description="item.description"/>
      </div>
   </div>
   
    </div>
  </div>
</template>

<script>
import CourseDetaille from '../components/ComponenrsDetail/CourseDetaille.vue';
import react from '../assets/LogoCours/React.png';
import Angular from '../assets/LogoCours/Angular.png';
import NodeJs from '../assets/LogoCours/NodeJs.png';
import Linux from '../assets/LogoCours/Linux.png';
import Cisco from '../assets/LogoCours/Cisco.png';
import KaliLinux from '../assets/LogoCours/KaliLinux.png';
import Blender from '../assets/LogoCours/Blender.png';
import Poulpe from '../assets/LogoCours/poulpe.png';
import Tareau from '../assets/LogoCours/Tareau.png';
import Cinema4D from '../assets/LogoCours/Cinema4D.png';
import Illustrator from '../assets/LogoCours/Illustrator.png';

export default {
  name: 'CourseComponent',
  components: {
    CourseDetaille,
  },
  data() {
    return {
      activeFilter: 'programming',
      filters: [
        { label: 'Programmation', value: 'programming', width: '115px'  },
        { label: 'Marketing', value: 'marketing', width:'85px' },
        { label: 'Graphisme', value: 'design', width: '83px' },
        // { label: 'Réseau', value: 'network', width:'52px'},
        
      ],
      items: [
        {
          id: 1,
          name: 'React JS',
          title: 'Devenez un expert du développement front-end',
          description:
            "Apprenez à maîtriser React.js, la bibliothèque JavaScript incontournable pour créer des...",
          image: react,
          category: 'programming',
        },
        {
          id: 2,
          name: 'Angular',
          title: 'Devenez un expert du développement front-end',
          description:
            "Apprenez à maîtriser Angular, la techno robuste pour construire des applications web modernes.",
          image: Angular,
          category: 'programming',
        },
        {
          id: 3,
          name: 'Node JS',
          title: 'Maîtrisez le développement côté serveur',
          description:
            "Apprenez à utiliser Node.js pour créer des applications back-end performantes et scalables.",
          image: NodeJs,
          category: 'programming',
        },
         {
          id: 4,
          name: 'Linux',
          title: "Maîtrisez l'essentiel de Linux",
          description:
            "Maîtrisez Linux pour administrer des systèmes fiables, sécurisés et performants.",
          image:Linux,
          category: 'network',
        },
         {
          id: 5,
          name: 'Administration réseau',
          title: "Maîtrisez l'essentiel de l'administration réseau",
          description:
            "Apprenez à configurer, sécuriser et optimiser des réseaux pour des performances fiables",
          image: Cisco,
          category: 'network',
        },
         {
          id: 6,
          name: 'Kali Linux',
          title: "Maîtrisez l'essentiel de Kali Linux",
          description:
            "Explorez les outils de sécurité et de test d'intrusion pour protéger vos systèmes.",
          image:KaliLinux,
          category: 'network',
        },
         {
          id: 7,
          name: 'Modélisation 3D',
          title: "Maîtrisez l'essentiel de Blender",
          description:
            "Donnez vie à vos créations 3D avec des outils de modélisation et d'animation avancés",
          image:Blender,
          category: 'design',
        },
        {
          id:8,
          name: 'Market Poulpe',
          title: "Maîtrisez l'essentiel du marketing digital",
          description:
            "Optimisez vos stratégies en ligne pour atteindre un public plus large et générer plus de conversions",
          image:Poulpe,
          category: 'marketing',
        },
         {
          id:9,
          name: 'Marketing Digital',
          title: "Devenez un expert en marketing digital",
          description:
            "Apprenez à utiliser les outils et techniques pour améliorer votre présence en ligne et booster vos ventes.",
          image:Tareau,
          category: 'marketing',
        },
        {
          id: 10,
          name: 'Modélisation 3D',
          title: "Maîtrisez l'essentiel de Cinema 4D",
          description:
            "Créez des animations 3D et des effets visuels professionnels avec des outils puissants.",
          image:Cinema4D,
          category: 'design',
        },
        {
          id: 11,
          name: 'Adobe Illustrator',
          title: "Maîtrisez l'essentiel d'Adobe Illustrator",
          description:
            "Réalisez des illustrations vectorielles, des logos et des graphismes de qualité professionnelle.",
          image:Illustrator,
          category: 'design',
        },
     
      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.activeFilter === 'all') {
        return this.items;
      }
      return this.items.filter((item) => item.category === this.activeFilter);
    },
  },
};
</script>

