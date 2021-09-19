<script setup>
const dataList = [
  {
    id: 1,
    title: "超低申購手續費 股票(含平衡)型1.99折、債券型2.99折 ",
    content:
      "境外基金牌告股票(含平衡)型3%、債券型1.5%~2%，境內依各基金公司牌告作折扣",
    remark:
      "*上述手續費折扣為基富通常態性優惠折扣，實際仍需視個別基金公司之規定",
  },
  {
    id: 2,
    title: "0轉換作業費",
    content: "基富通不另收轉換作業費，各基金公司尚可能收取基金轉換費用",
  },
  {
    id: 3,
    title: "0信託管理費",
    content: "本平台服務非為信託架構，不收信託管理費",
  },
];
</script>

<template>
  <div class="md:w-md md:mx-auto p-4">
    <h1 class="text-shadow text-white font-black text-3xl text-center my-4">
      收費標準
    </h1>
    <h2 class="font-black text-xl text-brown-500">
      基富通的費用有三大” 守” 則
    </h2>
    <div class="flex my-4 items-start" v-for="card of dataList" :key="card.id">
      <div
        class="px-4 py-2 mr-4 text-2xl text-white bg-darkBlue-800 rounded-full"
      >
        {{ card.id }}
      </div>
      <div>
        <p class="font-black text-xl text-darkBlue-800 mb-2">
          {{ card.title }}
        </p>
        <p class="text-sm text-brown-500">{{ card.content }}</p>
        <p class="text-sm text-brown-500">{{ card.remark }}</p>
      </div>
    </div>
    <h3 class="text-center my-4">您不想多花的 由基富通幫您守著</h3>
  </div>
</template>
