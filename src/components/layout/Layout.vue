<script setup>
import { ref } from "vue";

import Header from "./header/Header.vue";
import NavbarBox from "./navbar/NavbarBox.vue";
import Recommend from "./recommend/Recommend.vue";
import FooterBar from "./footer/FooterBar.vue";
import Mask from "@/components/mask/Mask.vue";
import RecommendContent from "./popup/RecommendContent.vue";

const popupOpen = ref("");
const popup = (target) => {
  popupOpen.value = target;
};
</script>

<template>
  <div>
    <div class="h-14"><Header class="fixed top-0 z-10" /></div>
    <div class="h-14"><NavbarBox class="fixed z-10 top-14" /></div>
    <Recommend
      class="fixed z-10 bottom-16 right-0"
      @click="popup('recommend')"
    />
    <slot></slot>
    <FooterBar />
    <div
      class="
        fixed
        md:hidden
        bottom-0
        z-10
        w-full
        h-14
        bg-white
        flex
        items-center
        justify-center
        shadow-xl
      "
    >
      <router-link
        class="
          w-11/12
          py-2
          text-center text-white
          bg-brown-600
          hover:bg-brown-700
          transition-all
          rounded
        "
        to="/login"
        >登入</router-link
      >
    </div>
    <Mask v-if="popupOpen === 'recommend'" @close="popup">
      <template #default="{ close }">
        <RecommendContent @close="close" />
      </template>
    </Mask>
  </div>
</template>
