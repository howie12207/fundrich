<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import IconChevron from "@/components/icon/IconChevron.vue";

SwiperCore.use([Autoplay, Navigation, Pagination]);

defineProps({
  bannerList: {
    type: Array,
    default: () => [],
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  autoplayTime: {
    type: Number,
    default: 3000,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: Boolean,
    default: true,
  },
  clickable: {
    type: Boolean,
    default: true,
  },
});

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.png");
  return modules[path].default;
};
</script>

<template>
  <swiper
    class="mySwiper"
    :loop="loop"
    :navigation="
      navigation && {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    "
    :pagination="
      pagination && {
        clickable,
      }
    "
    :autoplay="
      autoplay && {
        delay: autoplayTime,
        disableOnInteraction: false,
      }
    "
  >
    <swiper-slide v-for="banner of bannerList" :key="banner.label">
      <img :src="imgSrc(banner.src)" :alt="banner.label" class="w-full"
    /></swiper-slide>
    <div
      class="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 z-10"
    >
      <IconChevron
        :size="14"
        pointer
        bgColor="rgba(0,0,0,0.6)"
        class="text-white p-4"
      />
    </div>
    <div
      class="swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 z-10"
    >
      <IconChevron
        :size="14"
        direction="right"
        pointer
        bgColor="rgba(0,0,0,0.7)"
        class="text-white p-4"
      />
    </div>
  </swiper>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background-color: #000;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: #fff;
}
</style>
