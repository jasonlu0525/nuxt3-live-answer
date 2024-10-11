<script setup>
import Swiper from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  modules: {
    type: Array,
    required: true,
  },
  autoplay: {
    type: Object,
    default: {
      delay: 3000,
    },
  },
  pagination: {
    type: Object,
    default: { 
      el: ".swiper-pagination",
      type: "bullets",
    },
  },
  navigation: {
    type: Object,
    default: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
  loop: {
    type: Boolean,
    default: true,
  },
  slidesPerView: {
    type: Number,
    default: 1,
  },
});

const swiper = ref(null);
onMounted(() => {
  new Swiper(swiper.value, props);
});
</script>

<template>
  <div class="swiper" ref="swiper">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination"></div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<style scoped></style>
