<template>
  <div class="slider" :style="sliderStyle" :reverse="isReverse">
    <div class="list">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="item"
        :style="{ '--position': index + 1 }"
      >
        <img :src="image.src" :alt="image.alt"  :class="image.class"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  props: {
    images: {
      type: Array,
      required: true,
    },
    itemWidth: {
      type: String,
      default: "100px",
    },
    itemHeight: {
      type: String,
      default: "50px",
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sliderStyle() {
      return {
        "--width": this.itemWidth,
        "--height": this.itemHeight,
        "--quantity": this.images.length,
      };
    },
  },
};
</script>

<style scoped>
/* Base Slider */
.slider {
  width: 100%;
  height: var(--height);
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
}

/* List of items */
.list {
  display: flex;
  width: 100%;
  min-width: calc(var(--width) * var(--quantity));
  position: relative;
}

/* Individual item */
.item {
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 100%;
  animation: autoRun 10s linear infinite;
  animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1)) !important;
  transition: filter 0.5s;
}

/* Pause animation on hover */
.slider:hover .item {
  animation-play-state: paused !important;
  filter: grayscale(1);
}

.item:hover {
  filter: grayscale(0);
}

/* Reverse animation */
.slider[reverse="true"] .item {
  animation: reverseRun 10s linear infinite;
  animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1)) !important;
}

/* Keyframes for normal animation */
@keyframes autoRun {
  from {
    left: 100%;
  }
  to {
    left: calc(var(--width) * -1);
  }
}

/* Keyframes for reverse animation */
@keyframes reverseRun {
  from {
    left: calc(var(--width) * -1);
  }
  to {
    left: 100%;
  }
}
</style>
