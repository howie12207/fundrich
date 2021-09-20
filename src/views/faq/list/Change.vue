<script setup>
const dataList = [
  {
    id: 1,
    label: "Q1.紙本開戶完成後，想要變更設定的帳號，請問如何異動？",
  },
];
</script>

<template>
  <section class="p-4">
    <div
      class="mb-4 pb-2 border-b border-dashed last:border-b-0"
      v-for="list of dataList"
      :key="list.id"
    >
      <p class="text-brown-500 mb-2">{{ list.label }}</p>
      <div class="pl-4">
        <template v-if="list.content">
          <p v-for="(item, index) of list.content" :key="index" class="mb-2">
            {{ item }}
          </p>
        </template>
        <template v-else-if="list.id === 1">
          <p class="mb-2">
            請您到基富通證券官網首頁（<router-link
              to="/"
              class="text-brown-500 underline"
              >https://www.fundrich.com.tw</router-link
            >），點選上方列之「個人帳戶」下的「變更扣款帳戶」，須請您寫「客戶基本資料變更申請書」及「基金扣款轉帳授權書」填寫完畢後連同存摺影本(或網路銀行有帳號的頁面截圖，若網銀截圖上無您的姓名，請在截圖影本上簽章)寄回。
          </p>
          <p class="mb-2">
            「客戶基本資料變更申請書」請填寫姓名及身分證字號，→「約定帳號異動欄位」填寫欲異動/新增的銀行、分行及帳號
            →填寫完成後將變更申請書印出，並在投資人簽章上簽蓋留存於基富通之印鑑樣式，完成後附上填寫完畢的「境內外基金扣款轉帳授權書」（一式二聯），一併寄回基富通,即完成異動申請程序。
          </p>
        </template>
      </div>
    </div>
  </section>
</template>
