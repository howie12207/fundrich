<script setup>
import { defineProps } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
    :navigation="navigation"
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
  </swiper>
</template>

<style scoped>
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  position: absolute;
  top: 50%;
  z-index: 2;
  width: 32px;
  height: 32px;
  opacity: 0.6;
  background-image: url("./img/chevron_right.svg");
  cursor: pointer;
  transition: 0.3s;
}

:deep(.swiper-button-prev) {
  left: 16px;
  transform: translateY(-50%) rotate(180deg);
}
:deep(.swiper-button-next) {
  right: 16px;
  transform: translateY(-50%);
}

:deep(.swiper-button-prev):hover,
:deep(.swiper-button-next):hover {
  opacity: 1;
}

:deep(.swiper-pagination-bullet) {
  background-color: #000;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: #fff;
}
</style>
