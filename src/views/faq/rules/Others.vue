<script setup>
import { ref } from "vue";

import IconChevron from "@/components/icon/IconChevron.vue";

const dataList = [{ id: 1, title: "Q1. 交易匯率" }];

const expandList = ref([]);
const expand = (num) => {
  const index = expandList.value.findIndex((item) => item === num);
  index < 0 ? expandList.value.push(num) : expandList.value.splice(index, 1);
};
</script>

<template>
  <section>
    <h2 class="font-black text-2xl my-4">4. 費用</h2>
    <div
      v-for="faq of dataList"
      :key="faq.id"
      :class="[
        'my-2 border-b rounded overflow-hidden group',
        expandList.includes(faq.id) && 'border border-brown-500',
      ]"
    >
      <div
        :class="[
          'flex justify-between items-center lg:text-lg px-2 py-4 cursor-pointer transition-all group-hover:text-brown-500',
          expandList.includes(faq.id) &&
            'bg-brown-500 text-white group-hover:text-white',
        ]"
        @click="expand(faq.id)"
      >
        <p>{{ faq.title }}</p>
        <IconChevron
          direction="top"
          :class="[
            'transition-all',
            expandList.includes(faq.id) && 'rotate-180',
          ]"
        />
      </div>
      <div
        v-show="expandList.includes(faq.id)"
        class="text-sm lg:text-base p-4 lg:p-8"
      >
        <template v-if="faq.id === 1">
          <p class="mb-2">
            所有基金之結匯事宜，係由集保結算所與華南銀行議定單一買進或賣出匯率，辦理結匯。
          </p>
          <p class="mb-2">(約定扣款銀行並不影響交易匯率之優劣)</p>
          <p class="mb-2">
            同一基金公司不同基金之轉換，如涉不同幣別，由於基金公司需與交易對手進行換匯，與即時匯率相比，將產生換匯價差費用(交易匯率以基金公司提供為準)，請投資人留意相關匯率風險與交易成本。
          </p>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
table td,
table th {
  @apply text-center border p-2;
}
</style>
