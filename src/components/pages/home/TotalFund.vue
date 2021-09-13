<script setup>
const tabs = [
  { label: "境內", path: "" },
  { label: "境外", path: "" },
];

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <section
    class="w-1/5 bg-brown-500 text-center text-white rounded-md overflow-hidden"
  >
    <p class="py-2 border-b">銷售基金商品數</p>
    <div class="relative flex items-center justify-center py-3">
      <span class="text-4xl">3,888</span>
      <router-link
        class="
          absolute
          right-0
          bg-brown-200
          text-brown-400 text-sm
          px-3
          py-1
          rounded-l-xl
          hover:opacity-70
          transition-all
        "
        to="/"
        >更多</router-link
      >
    </div>
    <div class="relative flex items-center">
      <router-link
        class="
          flex-1
          bg-brown-700
          py-1.5
          flex
          justify-center
          hover:opacity-70
          transition-all
        "
        v-for="tab of tabs"
        :key="tab.label"
        to="/"
        >{{ tab.label
        }}<img
          class="ml-2"
          :src="imgSrc('chevron_right_circle.svg')"
          alt="chevron_right"
      /></router-link>
      <div class="absolute right-1/2 w-0.25 h-3/5 bg-white"></div>
    </div>
  </section>
</template>
