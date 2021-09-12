<script setup>
import { ref } from "vue";

// Todo: search功能、點擊keyword功能、keyword滾動功能

const keywordBar = ref(null);

const keywords = [
  { label: "好享退", path: "" },
  { label: "安聯收益成長", path: "" },
  { label: "復華台灣好收益", path: "" },
  { label: "聯博全高收", path: "" },
  { label: "安聯台灣大壩", path: "" },
  { label: "貝萊德世界科技", path: "" },
  { label: "摩根士丹利美國增長", path: "" },
  { label: "中信越南", path: "" },
  { label: "聯博多元資產收益組合", path: "" },
  { label: "野村優質", path: "" },
];

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <section class="w-4/5 h-34 p-6 bg-darkGreen-700 rounded-md">
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
      <img
        class="rotate-180 cursor-pointer"
        :src="imgSrc('chevron_right.svg')"
        alt="chevron_left"
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
      <img
        class="cursor-pointer"
        :src="imgSrc('chevron_right.svg')"
        alt="chevron_left"
        @click="scrollTo"
      />
    </div>
  </section>
</template>
