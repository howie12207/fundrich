<script setup>
import IconChevron from "@/components/icon/IconChevron.vue";

const tabs = [
  { label: "境內", path: "" },
  { label: "境外", path: "" },
];
</script>

<template>
  <section
    class="
      w-full
      bg-brown-500
      text-center text-white
      rounded-md
      overflow-hidden
      flex-shrink-0
      md:w-60
    "
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
          items-center
          hover:opacity-70
          transition-all
        "
        v-for="tab of tabs"
        :key="tab.label"
        to="/"
        >{{ tab.label }}
        <IconChevron
          bgColor="#fff"
          :size="12"
          class="text-brown-500 ml-2 p-2"
          direction="right"
        />
      </router-link>
      <div class="absolute right-1/2 w-0.25 h-3/5 bg-white"></div>
    </div>
  </section>
</template>
