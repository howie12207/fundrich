<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import Mask from "@/components/mask/Mask.vue";
import LoginFirst from "@/components/layout/popup/LoginFirst.vue";
import Cart from "@/components/layout/popup/Cart.vue";
import RightMenu from "@/components/layout/popup/RightMenu.vue";

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
    path: "/login",
    icon: "login.svg",
  },
  {
    label: "登出",
    icon: "logout.svg",
    login: true,
  },
  {
    label: "選單",
    icon: "menu.svg",
  },
];
const menuFilter = computed(() => menu.filter((item) => !item.login));

const router = new useRouter();
const menuClick = (item) => {
  if (item.label === "登入") router.push(item.path);
  if (item.label === "關於我們") router.push(item.path);
  if (item.label === "收藏清單") popup("favorite");
  if (item.label === "結帳清單") popup("cart");
  if (item.label === "選單") popup("menu");
};

const popupOpen = ref("");
const popup = (target = "") => {
  popupOpen.value = target;
};

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <header class="w-full h-14 bg-darkBlue-800 flex items-center justify-center">
    <div class="w-xl flex items-center justify-between">
      <router-link class="ml-2" to="/"
        ><img src="./img/logo.svg" alt="logo"
      /></router-link>
      <div class="flex text-white">
        <div
          :class="[
            'flex items-center px-2 h-14 text-lg cursor-pointer',
            { 'bg-brown-600': item.label === '登入' },
            { hidden: item.label === '關於我們' || item.label === '登入' },
            'lg:flex lg:px-4',
            { 'lg:hidden': item.label === '選單' },
          ]"
          v-for="item of menuFilter"
          :key="item.label"
          @click="menuClick(item)"
        >
          <img class="mr-2" :src="imgSrc(item.icon)" :alt="item.label" />
          <span class="hidden md:inline-block">{{ item.label }}</span>
        </div>
      </div>
    </div>
    <Mask v-if="popupOpen === 'favorite'" @close="popup" width="320px">
      <template #default="{ close }">
        <LoginFirst @close="close" />
      </template>
    </Mask>
    <Cart v-else-if="popupOpen === 'cart'" @close="popup" width="320px"> </Cart>
    <RightMenu v-else-if="popupOpen === 'menu'" @close="popup" width="320px">
    </RightMenu>
  </header>
</template>
