<template>
  <div class="relative flex-col min-h-screen bg-b-main">
    <div class="absolute top-24  w-[200px] h-[200px] rounded-full opacity-3000 z-0"
         style="background: radial-gradient(circle, rgba(14, 27, 46, 0.8) 0%, rgba(14, 27, 46, 0.3) 40%, transparent 70%); filter: blur(1px);">
    </div>
    <div class="relative z-10 w-full">
      <div class="md:hidden  overflow-x-hidden w-full fixed top-[0px] overflow-hidden  z-[1000] m-0 p-0 mb-96">
         <BareNav />
      </div>
       <div class="md:flex">
         <BareNav />
      </div>
      <HeaderHome />
       <ServiceComponent />
      <WebSite />
      <div class="hidden lg:flex">
        <CourseComponent />
      </div>
      <div class="lg:hidden">
        <CourseSlide />
      </div>
      <ChoiseCourse />
      <BaseComponent />
      <PartenerComposent />
      <TestimonialsComponents />
      <EnregistorWebSite />
       <div class="h-[700px] lg:h-[5px] relative bottom-36">
         <FooterCompenent />
      </div> 
    </div>
  </div>
</template>

<script>
import BareNav from './components/BareNav.vue';
import HeaderHome from './components/HeaderHome.vue';
import ServiceComponent from './components/ServiceComponent.vue';
import WebSite from './components/WebSite.vue';
import CourseComponent from './components/CourseComponent.vue';
import ChoiseCourse from './components/ChoiseCourse.vue';
import BaseComponent from './components/BaseComponent.vue'
import PartenerComposent from './components/PartenerComposent.vue'
import TestimonialsComponents from './components/TestimonialsComponents.vue'
import EnregistorWebSite from './components/EnregistorWebSite.vue'
import FooterCompenent from './components/FooterCompenent.vue'
import CourseSlide from './components/CourseSlide.vue';
export default {
  name: 'HomePage',
  components: {
    BareNav,
    HeaderHome,
    ServiceComponent,
    WebSite,
    CourseComponent,
    CourseSlide,
    ChoiseCourse,
    BaseComponent,
    PartenerComposent,
    TestimonialsComponents,
    EnregistorWebSite,
    FooterCompenent
  }
}
</script>
