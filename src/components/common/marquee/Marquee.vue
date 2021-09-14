<script setup>
import { defineProps } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

defineProps({
  marqueeList: {
    type: Array,
    default: () => [],
  },
});

SwiperCore.use([Autoplay]);
</script>

<template>
  <swiper
    class="mySwiper h-12 px-4 bg-white rounded-md"
    loop
    autoplay
    direction="vertical"
  >
    <swiper-slide
      class="py-3"
      v-for="marquee of marqueeList"
      :key="marquee.label"
    >
      <span class="text-brown-500 pr-4 border-r border-brown-500">{{
        marquee.type
      }}</span>
      <span class="mx-4">{{ marquee.time }}</span>
      <router-link class="hover:underline hover:text-brown-500" to="/">{{
        marquee.label
      }}</router-link></swiper-slide
    >
  </swiper>
</template>
