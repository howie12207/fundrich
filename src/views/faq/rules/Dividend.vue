<script setup>
import { ref } from "vue";

import IconChevron from "@/components/icon/IconChevron.vue";

const dataList = [
  { id: 1, title: "Q1. 基準日/除息日/發放日" },
  { id: 2, title: "Q2. 配息款項入帳費用" },
];

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
          <p class="mb-2">基金配息過程將有三個日期：</p>
          <p class="mb-2">基準日 ➝ 除息日 ➝ 發放日</p>
          <div class="pl-2">
            <p class="mb-2">
              基準日：最遲須於基準日當日扣款成功，始得參與該次配息
              (衡量能否參與配息)。
            </p>
            <p class="mb-2">
              除息日：除息日之淨值已不含息，原則上該日淨值將略為降低。
            </p>
            <p class="mb-2">發放日：發放日為配息從基金公司匯出之日。</p>
          </div>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span>
            <span
              >基金除息日/暫停計價日請參酌<router-link
                class="text-brown-500"
                to="/"
                >此連結</router-link
              >，詳細資訊以基金公司公告為準。</span
            >
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span
            >基金基準日、除息日及發放日等資訊可於基金公司官網中查詢。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span>
            原則上，配息款匯入後一個工作日，基富通將email寄發交易確認單給客戶，信件中將有詳細的基金配息明細。
          </p>
        </template>
        <template v-else-if="faq.id === 2">
          <div class="text-sm p-4 my-4 bg-gray-100 rounded">
            <p class="my-4">配息款項入帳費用請參閱以下：</p>
            <div class="pl-2">
              <p class="mb-2">
                贖回/配息款項將匯入投資人於本公司留存之約定帳戶。
              </p>
              <p class="mb-2">
                (以台幣申購之基金，贖回/配息款項將以台幣匯入台幣帳戶；以外幣扣款之基金，贖回/配息款項將以外幣匯入外幣帳戶)
              </p>
              <p class="mb-2">
                若於本公司設定之贖回/配息款入帳銀行帳戶設定為集保公司款項收付銀行（華南、兆豐、台新、永豐、台北富邦、中國信託、國泰世華、第一、彰銀、郵局），則不會有「匯費」與「解款費」產生。若非上述九家銀行及郵局，則款項入帳時會產生匯費新台幣30元起（依照國內銀行匯款級距收取）。若應付贖回/配息金額不足以支付匯款費用時，依集保公司規定暫不予匯款。
              </p>
              <p class="mb-2">※郵局帳戶僅可約定台幣帳戶扣款。</p>
            </div>
          </div></template
        >
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
