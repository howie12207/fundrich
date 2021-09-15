<script setup>
import { computed } from "vue";
import navList from "@/assets/navList.json";

const navListFilter = computed(() =>
  navList.map((item) => {
    const sub = [];
    item.sub.forEach((element) => {
      sub.push(...element.sub);
    });
    return { ...item, sub };
  }),
);

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="hidden bg-gray-300 p-4 md:block">
    <div class="w-full lg:w-lg mx-auto flex gap-x-4">
      <div
        class="w-1/12 flex-grow"
        v-for="nav of navListFilter"
        :key="nav.label"
      >
        <h4 class="py-2 mb-3 border-b border-gray-400">{{ nav.label }}</h4>
        <ul v-if="nav.sub">
          <li class="text-sm" v-for="sub of nav.sub" :key="sub.label">
            <router-link class="inline-block mb-3 hover:underline" to="">{{
              sub.label
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
