<script setup>
import { computed, ref } from "vue";

const loginStatus = ref(false);
const menu = [
  {
    label: "關於我們",
    path: "/aboutus",
    icon: "aboutus.svg",
  },
  {
    label: "收藏清單",
    icon: "favorite.svg",
  },
  {
    label: "結帳清單",
    icon: "cart.svg",
  },
  {
    label: "登入",
    icon: "login.svg",
  },
  {
    label: "登出",
    icon: "logout.svg",
    login: true,
  },
];

const menuFilter = computed(() => menu.filter((item) => !item.login));

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <header class="w-full h-14 bg-darkBlue-800 flex items-center justify-center">
    <div class="w-xl flex items-center justify-between">
      <router-link to="/"><img src="./img/logo.svg" alt="logo" /></router-link>
      <div class="flex text-white">
        <div
          :class="[
            'flex items-center px-4 py-3.5 text-lg cursor-pointer',
            { 'bg-brown-700': item.label === '登入' },
          ]"
          v-for="item of menuFilter"
          :key="item.label"
        >
          <img class="mr-2" :src="imgSrc(item.icon)" :alt="item.label" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </header>
</template>
