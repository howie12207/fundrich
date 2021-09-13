<script setup>
// Todo: path位置
import { defineProps } from "vue";

defineProps({
  menu: {
    type: Object,
    default: () => ({}),
  },
});

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="p-3 bg-white">
    <h3 class="relative flex items-center text-lg font-bold pb-4 border-b">
      <img class="mr-4" :src="imgSrc(menu.icon)" :alt="menu.label" />
      {{ menu.label }}
      <router-link
        v-if="menu.more"
        class="
          absolute
          right-0
          bg-gray-200
          text-sm
          px-3
          py-1
          rounded-xl
          hover:opacity-70
          transition-all
        "
        to="/"
        >更多</router-link
      >
    </h3>
    <ul class="flex flex-wrap gap-2 mt-2" v-if="menu.sub">
      <li
        :class="[
          'menu relative w-1/3 flex-grow p-2 cursor-pointer hover:underline hover:text-brown-400',
          { 'font-bold': subMenu.remark },
          { 'text-red-500': subMenu.remark === 'Hot' },
        ]"
        v-for="subMenu of menu.sub"
        :key="subMenu.label"
      >
        {{ subMenu.label }}
        <span
          class="absolute top-0 bg-red-600 p-1 ml-1 rounded text-white text-xs"
          v-if="subMenu.remark"
          >{{ subMenu.remark }}</span
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu::before {
  content: "";
  display: inline-block;
  background: url("./img/chevron_right_color.svg");
  background-size: 16px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
</style>
