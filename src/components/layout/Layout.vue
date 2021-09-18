<script setup>
import Header from "./header/Header.vue";
import NavbarBox from "./navbar/NavbarBox.vue";
import FooterBar from "./footer/FooterBar.vue";
</script>

<template>
  <div class="bg-gray-200">
    <div class="h-14"><Header class="fixed top-0 z-10" /></div>
    <div class="h-14"><NavbarBox class="fixed z-10 top-14" /></div>
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
        class="w-11/12 py-2 text-center text-white bg-brown-600 rounded"
        to="/login"
        >登入</router-link
      >
    </div>
  </div>
</template>
