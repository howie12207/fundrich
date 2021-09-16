<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

defineProps({
  marqueeList: {
    type: Array,
    default: () => [],
  },
});

// h-24 md:h-12

SwiperCore.use([Autoplay]);
</script>

<template>
  <swiper
    class="h-20 md:h-12 px-4 bg-white rounded-md"
    loop
    direction="vertical"
  >
    <swiper-slide
      class="truncate py-3 px-2"
      v-for="marquee of marqueeList"
      :key="marquee.label"
    >
      <div class="md:inline-block">
        <span class="text-brown-500 pr-4 border-r border-brown-500">{{
          marquee.type
        }}</span>
        <span class="mx-4">{{ marquee.time }}</span>
      </div>
      <router-link class="hover:underline hover:text-brown-500" to="/">{{
        marquee.label
      }}</router-link></swiper-slide
    >
  </swiper>
</template>
