<template>
  <div class="flex justify-center w-full z-10 relative bottom-48  md:relative md:bottom-[600px] lg:relative lg:bottom-52">
    <div class="mt-14 w-full">
      <div class="flex justify-center">
        <h1 class="text-center text-white text-4xl font-bold">Ils font partie de notre <span class="text-by">réseau</span> de confiance</h1>
      </div>
      <div class="relative top-5 md:relative md:top-0">
         <ImageSlider :images="firstSlideImages" :itemWidth="'128px'" :itemHeight="'128px'"/>
         <ImageSlider :images="secondSlideImages" :itemWidth="'128px'" :itemHeight="'128px'" :isReverse="true"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";

import Google from "../assets/Partenaire/Google(1).png";
import Amazon from "../assets/Partenaire/Amazon(1).png";
import Meta from "../assets/Partenaire/Meta(1).png";
import Rowbank from "../assets/Partenaire/Rowbank.png";
import Airtel from "../assets/Partenaire/Airtel.png";
import Spotify from "../assets/Partenaire/Spotify(1).png";
import Citi from "../assets/Partenaire/citibank.png";
import Orange from "../assets/Partenaire/Orange.png";
import Xiaomi from "../assets/Partenaire/Xiaomi.jpg";
import Unicef from "../assets/Partenaire/unicef.png";

import Equity from "../assets/Partenaire/Equity Bcdc.png";
import DHL from "../assets/Partenaire/DHL.png";
import Vodacom from "../assets/Partenaire/vodacom.png";
import Cloud from "../assets/Partenaire/Cloud.png";
import Kaspersky from "../assets/Partenaire/kaspersky.png";
import Appel from "../assets/Partenaire/Apple.png";
import MasterCart from "../assets/Partenaire/MasterCard.png";
import Cisco from "../assets/Partenaire/Cisco.png";
import Lenovo from "../assets/Partenaire/Lenovo.png";
import Paypal from "../assets/Partenaire/Paypal(2).png";

export default {
  name: "PartenerComposent",
  components: { ImageSlider },
  data() {
    return {
      firstSlideImages: [
        { src: Google, alt: "Google",class:"w-32 h-32"},
        { src: Amazon, alt: "Amazon",class:"w-32 h-32" },
        { src: Meta, alt: "Meta",class:"w-32 h-32"},
        { src: Rowbank, alt: "Rowbank",class:"w-32 h-32" },
        { src: Airtel, alt: "Airtel", class: "relative top-4" },
        { src: Spotify, alt: "Spotify",class:"w-32 h-32 relative bottom-4" },
        { src: Citi, alt: "Citi",class:"w-32 h-22" },
        { src: Orange, alt: "Orange",class:"w-28 h-14 relative top-4" },
        { src: Xiaomi, alt: "Xiaomi",class:"w-24 h-10 relative right-3 top-9" },
        { src: Unicef, alt: "Unicef",class:"w-32 h-14 relative top-9" },
      ],
      secondSlideImages: [
        { src: Equity, alt: "Equity",class:"w-32 h-32" },
        { src: DHL, alt: "DHL",class:"w-32 h-36" },
        { src: Vodacom, alt: "Vodacom",class:"w-28 h-14 relative top-12" },
        { src: Cloud, alt: "Cloud",class:"w-36 h-32"},
        { src: Kaspersky, alt: "Kaspersky",class:"w-36 h-32 relative right-3" },
        { src: Appel, alt: "Apple",class:"w-24 h-14 relative top-8" },
        { src: MasterCart, alt: "MasterCard",class:"w-24 h-14 relative top-8" },
        { src: Cisco, alt: "Cisco",class:"w-24 h-14 relative left-4 relative top-8" },
        { src: Lenovo, alt: "Lenovo",class:"w-24 h-14 relative left-5 relative top-8" },
        { src: Paypal, alt: "Paypal",class:"w-36 h-32" },
      ],
    };
  },
};
</script>
