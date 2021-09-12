<script setup>
import menu from "/src/assets/navList.json";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <nav class="mr-4">
    <ul class="flex">
      <li
        class="text-lg px-4 py-3.5 cursor-pointer flex group"
        v-for="item of menu"
        :key="item.label"
      >
        <span class="peer">{{ item.label }}</span>
        <img
          class="group-hover:rotate-180 transition-all"
          :src="imgSrc('chevron.svg')"
          alt="chevron"
        />
      </li>
    </ul>
  </nav>
</template>
