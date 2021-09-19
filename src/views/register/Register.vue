<script setup>
import { ref } from "vue";

import RegisterCardA from "./RegisterCardA.vue";
import RegisterCardB from "./RegisterCardB.vue";
import RegisterCardC from "./RegisterCardC.vue";

const activeCard = ref(0);
const changeCard = (index) => {
  activeCard.value = index;
};

const methods = [
  {
    title: "晶片金融卡",
    subTitle: "線上開戶",
    remark: "(限桌機使用)",
    tips: "最快只需1個工作天",
  },
  {
    title: "網路銀行",
    subTitle: "線上開戶",
    remark: "(適用多家銀行)",
    tips: "最快只需1個工作天",
  },
  {
    title: "一般寄件",
    subTitle: "預約開戶",
    remark: "",
    tips: "需7-10個工作天",
  },
];

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="register px-4 py-8">
    <div class="lg:w-lg mx-auto">
      <h3 class="text-shadow text-center text-white text-3xl">
        請選擇開戶方式
      </h3>
      <div class="flex justify-evenly gap-x-2 lg:gap-x-6 mt-4 mb-8">
        <div
          :class="[
            'relative flex-grow flex flex-col px-2 py-4 text-white text-center  rounded-sm cursor-pointer transition-all',
            activeCard === index ? 'bg-brown-500' : 'bg-darkGreen-900',
          ]"
          v-for="(card, index) of methods"
          :key="index"
          @click="changeCard(index)"
          @mouseenter="changeCard(index)"
        >
          <p class="font-black text-lg">{{ card.title }}</p>
          <p class="font-black text-lg">{{ card.subTitle }}</p>
          <p class="text-sm mb-4">{{ card.remark }}</p>
          <p
            :class="[
              'text-sm  mt-auto transition-all',
              activeCard === index ? 'text-black' : 'text-brown-500',
            ]"
          >
            {{ card.tips }}
          </p>
          <div
            :class="['arrow', index === activeCard ? 'block' : 'hidden']"
          ></div>
        </div>
      </div>
      <div class="bg-brown-200 p-4 mb-4 rounded-sm">
        <transition name="fade" mode="out-in">
          <RegisterCardA v-if="activeCard === 0" />
          <RegisterCardB v-else-if="activeCard === 1" />
          <RegisterCardC v-else-if="activeCard === 2" />
        </transition>
      </div>
      <div class="p-4 bg-gray-200 rounded-sm">
        <p>
          若贖回款項設定為集保公司款項收付銀行（華南、兆豐、台新、永豐、台北富邦、中國信託、國泰世華、第一、彰銀、郵局），則不會有「匯費」與「解款費」產生。若非上述十家銀行，則款項入帳時會產生匯費新台幣30元<span
            class="text-red-500"
            >起</span
          >（依照國內銀行匯款級距收取）。若應付贖回、配息等金額不足以支付匯款費用時，依集保公司規定暫不予匯款。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register {
  background: url("./img/bg.jpg");
}
.arrow {
  @apply absolute -bottom-8 left-1/2 -translate-x-1/2 w-0 h-0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 16px solid #fff1b0;
}
</style>
