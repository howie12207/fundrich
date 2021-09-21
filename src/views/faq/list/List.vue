<script setup>
import { ref } from "vue";

import Open from "./Open.vue";
import Password from "./Password.vue";
import Change from "./Change.vue";
import Trade from "./Trade.vue";
import Others from "./Others.vue";
import Banks from "./Banks.vue";

const tabs = [
  { id: 1, label: "開戶相關", value: "open" },
  { id: 2, label: "密碼相關", value: "password" },
  { id: 3, label: "資料異動相關", value: "change" },
  { id: 4, label: "交易相關", value: "trade" },
  { id: 5, label: "其他問題", value: "others" },
  { id: 6, label: "扣款銀行列表", value: "banks" },
];
const activeTab = ref("open");
const changeTab = (tab) => {
  activeTab.value = tab;
  window.scroll(0, 0);
};

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="relative lg:w-lg lg:mx-auto">
    <section class="h-36">
      <div class="fixed w-full lg:w-lg py-4 lg:px-4 bg-white">
        <div class="grid grid-cols-3">
          <div
            v-for="tab of tabs"
            :key="tab.id"
            :class="[
              'text-center border py-2 cursor-pointer transition-all',
              activeTab === tab.value && 'text-white bg-brown-500',
            ]"
            @click="changeTab(tab.value)"
          >
            {{ tab.label }}
          </div>
        </div>
        <div class="flex items-center relative">
          <input
            placeholder="請輸入問題關鍵字搜索"
            class="w-full py-2 pl-4 pr-12 border outline-none"
            type="text"
          />
          <div
            class="
              flex
              justify-center
              items-center
              absolute
              right-0
              bg-brown-500
              w-8
              h-full
              cursor-pointer
            "
          >
            <img class="" :src="imgSrc('search.svg')" alt="search" />
          </div>
        </div>
      </div>
    </section>
    <transition name="fade" mode="out-in">
      <Open v-if="activeTab === 'open'" />
      <Password v-else-if="activeTab === 'password'" />
      <Change v-else-if="activeTab === 'change'" />
      <Trade v-else-if="activeTab === 'trade'" />
      <Others v-else-if="activeTab === 'others'" />
      <Banks v-else-if="activeTab === 'banks'" />
    </transition>
  </div>
</template>
