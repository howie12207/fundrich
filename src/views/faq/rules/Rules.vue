<script setup>
import { ref } from "vue";

import Buy from "./Buy.vue";
import Sell from "./Sell.vue";
import Transfer from "./Transfer.vue";
import Fee from "./Fee.vue";
import Change from "./Change.vue";
import Dividend from "./Dividend.vue";
import Others from "./Others.vue";

const rulesOptions = [
  { id: 1, label: "1. 申購", value: "buy" },
  { id: 2, label: "2. 贖回", value: "sell" },
  { id: 3, label: "3. 轉換/轉申購", value: "transfer" },
  { id: 4, label: "4. 費用", value: "fee" },
  { id: 5, label: "5. 變更", value: "change" },
  { id: 6, label: "6. 配息", value: "dividend" },
  { id: 7, label: "7. 其他", value: "others" },
];
const selected = ref("buy");
</script>

<template>
  <div class="lg:w-lg lg:mx-auto p-4">
    <h1 class="text-shadow text-white font-black text-3xl text-center my-4">
      交易規則
    </h1>
    <p class="my-2">以下交易規則僅供參考，實際仍需視個別基金公司之規定。</p>
    <select
      v-model="selected"
      class="outline-none border rounded w-48 px-2 py-2"
    >
      <option v-for="item of rulesOptions" :key="item.id" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <transition name="fade" mode="out-in">
      <Buy v-if="selected === 'buy'" />
      <Sell v-else-if="selected === 'sell'" />
      <Transfer v-else-if="selected === 'transfer'" />
      <Fee v-else-if="selected === 'fee'" />
      <Change v-else-if="selected === 'change'" />
      <Dividend v-else-if="selected === 'dividend'" />
      <Others v-else-if="selected === 'others'" />
    </transition>
  </div>
</template>
