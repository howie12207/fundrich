<script setup>
const listData = [
  {
    id: 1,
    title: "集保基富通-晶片金融卡線上開戶安全元件",
    path: "",
    remark: "(Windows 作業系統IE瀏覽器專用)",
  },
  {
    id: 2,
    title: "集保基富通-晶片金融卡線上開戶安全元件",
    path: "",
    remark: "(Windows 作業系統Edge、Firefox、Chrome瀏覽器使用)",
    tips: "",
  },
  {
    id: 3,
    title: "集保基富通-晶片金融卡線上開戶安全元件",
    path: "",
    remark: "(MAC專用支援Safari、Chrome瀏覽器使用)",
    tips: "",
  },
  {
    id: 4,
    title: "境內外基金扣款轉帳授權書(款項收付銀行授權轉帳繳款申請書)",
    path: "",
    remark:
      "共二聯 (適用彰化、華南、兆豐、台新、永豐、第一、中國信託、台北富邦、國泰世華等九家銀行)",
    tips: "※請單面列印",
  },
  {
    id: 5,
    title: "境內外基金扣款轉帳授權書(全國性繳費(稅)業務授權轉帳繳款申請書)",
    path: "",
    remark: "共二聯 (非上述九家銀行)",
    tips: "※請單面列印",
  },
  {
    id: 6,
    title: "境內外基金扣款轉帳授權書(郵局專用)",
    path: "",
    remark: "共二聯",
    tips: "※請單面列印",
  },
  { id: 7, title: "CRS個人自我證明表", path: "" },
];

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="p-4 bg-gray-200">
    <div class="lg:w-lg lg:mx-auto">
      <h1 class="title relative text-2xl font-black mb-4 pl-3">開戶元件下載</h1>
      <ul class="list-decimal pl-4">
        <li class="py-2">
          境內外基金扣款轉帳申請書之"流水號及檢查碼"無須填寫。
        </li>
        <li class="py-2">CRS個人自我證明表填寫方式。</li>
        <li class="py-2">
          其他開戶資料等文件請點選 "
          <router-link class="text-brown-500 underline" to=""
            >繼續完成開戶</router-link
          >
          " 完成驗證步驟後即可進行列印。
        </li>
      </ul>
      <section>
        <router-link
          class="
            flex
            items-center
            mb-4
            rounded
            bg-white
            border border-transparent
            hover:border-brown-500 hover:shadow-inner
            transition-all
          "
          v-for="card of listData"
          :key="card.id"
          :to="card.path"
        >
          <img class="p-4" :src="imgSrc('file.svg')" alt="file" />
          <div class="p-4 border-l self-stretch">
            <p>{{ card.title }}</p>
            <p class="text-sm text-darkGreen-700">{{ card.remark }}</p>
            <p class="text-sm text-red-500">{{ card.tips }}</p>
          </div>
        </router-link>
      </section>
    </div>
  </div>
</template>

<style scoped>
.title::before {
  content: "";
  @apply absolute top-0 left-0 w-1 h-full bg-brown-500;
}
</style>
