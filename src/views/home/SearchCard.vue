<script setup>
import { ref } from "vue";

import keywords from "@/assets/searchCard.json";

import IconChevron from "@/components/icon/IconChevron.vue";

// Todo: search功能、點擊keyword功能

const keywordBar = ref(null);
const prevBtn = ref(false);
const nextBtn = ref(true);
let scrollW = 0;
const scrollTo = (direction) => {
  if ((!prevBtn.value && direction < 0) || (!nextBtn.value && direction > 0))
    return;
  const nowLocation = keywordBar.value.scrollLeft;
  const scrollWidth = keywordBar.value.scrollWidth;
  const clientWidth = keywordBar.value.clientWidth;
  const STEP = 30 * direction;
  if (scrollW === 0) scrollW = scrollWidth - clientWidth;
  const moveTo = nowLocation + STEP;
  keywordBar.value.scrollLeft = moveTo;
  prevBtn.value = moveTo <= 0 ? false : true;
  nextBtn.value = moveTo >= scrollW ? false : true;
};

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <section
    class="
      hidden
      p-6
      bg-darkGreen-700
      rounded-md
      flex-shrink flex-grow
      w-1/2
      md:block
    "
  >
    <div class="relative flex items-center rounded-md overflow-hidden">
      <img class="absolute left-2" :src="imgSrc('search.svg')" alt="search" />
      <input
        type="text"
        placeholder="請輸入您想尋找的基金商品名稱，例如高收益、新興市場"
        class="w-full pl-10 pr-24 py-3 outline-none"
      />
      <button class="absolute right-0 h-full px-6 bg-brown-500 text-white">
        搜尋
      </button>
    </div>
    <div class="text-white mt-4 flex items-center">
      <span class="flex-shrink-0">熱門關鍵字</span>
      <IconChevron
        :size="14"
        :class="[
          'mx-1 cursor-pointer',
          !prevBtn && 'opacity-30 cursor-not-allowed',
        ]"
        direction="left"
        @click="scrollTo(-1)"
      />
      <div ref="keywordBar" class="overflow-x-hidden flex gap-x-2">
        <span
          class="
            px-2
            py-1
            text-sm
            bg-darkGreen-900
            rounded-xl
            cursor-pointer
            whitespace-nowrap
            hover:opacity-70
            transition-all
          "
          v-for="tag of keywords"
          :key="tag.label"
          >{{ tag.label }}</span
        >
      </div>
      <IconChevron
        :size="14"
        :class="[
          'mx-1 cursor-pointer',
          !nextBtn && 'opacity-30 cursor-not-allowed',
        ]"
        direction="right"
        @click="scrollTo(1)"
      />
    </div>
  </section>
</template>
