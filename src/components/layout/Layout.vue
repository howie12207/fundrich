<script setup>
import Header from "./header/Header.vue";
import NavbarBox from "./navbar/NavbarBox.vue";
import FooterBar from "./footer/FooterBar.vue";
</script>

<template>
  <div class="bg-gray-200">
    <div class="h-14"><Header class="fixed z-10" /></div>
    <div class="h-14"><NavbarBox class="fixed z-10 top-14" /></div>
    <router-view></router-view>
    <FooterBar />
  </div>
</template>
