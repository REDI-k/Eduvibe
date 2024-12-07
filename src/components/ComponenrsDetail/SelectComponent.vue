<template>
  <div class="w-96 ml-10">
    <div class="relative w-96">
      <button @click="toggleDropdown" class="w-full bg-transparent text-white border-none px-4 py-2 focus:outline-none flex justify-between items-center">
        {{ selectedOption }}
        <span class="relative right-48">&#9660;</span> <!-- Symbole flèche vers le bas -->
      </button>
      <!-- Liste déroulante des options -->
      <div v-if="isOpen" class="absolute top-full left-0 w-wf mt-2 shadow-lg z-10 flex" style="background: linear-gradient(90deg, rgba(50,55,61,0.5) 0%, rgba(50,55,61,0.3) 100%);">
        <ul class="flex">
          <li v-for="(option, index) in options" :key="index" @click="selectOption(option)"
              class="px-4 py-2 hover:bg-b-bf cursor-pointer text-tr text-sm">
            {{ option }}
          </li>
        </ul>           
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedOption: this.options[0], // Première option sélectionnée par défaut
      isOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    }
  }
};
</script>
