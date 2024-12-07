<template>
  <div class="mt-8 w-full max-w-md mx-auto rounded-lg shadow-lg">
    <button 
      @click="$emit('toggle')" 
      class="w-full text-left p-4 bg-gray-700 hover:bg-gray-600 focus:outline-none"
    >
      <div class="flex justify-between items-center text-white">
        <span class="font-semibold">{{ Question }}</span>
        <span :class="isOpen ? 'transform rotate-180' : ''">
          <img :src="VueAccor" alt="Icone" class="h-5 w-5">
        </span>
      </div>
    </button>

    <div 
      ref="accordionContent" 
      :style="{ maxHeight: isOpen ? contentHeight : '0px' }" 
      class="transition-all duration-300 ease-in-out overflow-hidden bg-gray-900 text-gray-300"
    >
      <div class="p-4">{{ Repond }}</div>
    </div>
  </div>
</template>

<script>
import VueAccor from "../../assets/Accordéon/d00f561354874bd81ff315e6935f2dab.png";

export default {
  name: "AccordeonDetail",
  props: {
    Question: {
      type: String,
      required: true,
    },
    Repond: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      VueAccor,
      contentHeight: "0px", // Hauteur dynamique
    };
  },
  watch: {
    isOpen(newVal) {
      // Mettre à jour la hauteur lorsque l'état isOpen change
      this.$nextTick(() => {
        const content = this.$refs.accordionContent;
        if (content) {
          this.contentHeight = newVal ? `${content.scrollHeight}px` : "0px";
        }
      });
    },
  },
};
</script>
