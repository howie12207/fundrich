<script setup>
const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div>
    <router-link
      to="/register"
      class="
        flex
        w-36
        items-center
        text-lg text-white
        bg-darkBlue-800
        p-4
        mb-4
        mx-auto
        rounded
        group
      "
    >
      前往開戶
      <img
        class="w-6 p-1 ml-4 bg-white rounded-full group-hover:animate-pulse"
        :src="imgSrc('chevron.png')"
        alt="chevron"
      />
    </router-link>
    <ul class="list-disc px-8">
      <li class="text-red-500 font-black mb-4">開戶最快只需1個工作天</li>
      <li class="text-red-500 font-black mb-4">
        適用銀行：合作金庫、第一銀行、兆豐銀行、華南銀行、彰化銀行、臺灣中小企業銀行、元大銀行、三信商銀
      </li>
      <li class="mb-4">
        若您欲約定之扣款帳戶為<span class="font-black underline">數位帳戶</span
        >，提醒您可與該銀行確認該數位帳戶是否得辦理作為約定扣款帳戶，及受理約定之方式是否有所限制。
      </li>

      <li class="text-red-500 font-black mb-4">
        線上填寫資料，登入網路銀行進行線上開戶
      </li>
      <li class="mb-4">請預先準備身分證及第二證件之正反面拍照圖檔</li>
      <li class="mb-4">本服務適用20歲以上之中華民國國民</li>
      <li class="mb-4">
        適用幣別：台幣扣款帳戶<span class="text-red-500 font-black"
          >（外幣帳戶約定需以書面方式申請）</span
        >
      </li>
      <li class="mb-4">
        提醒您，若逾六個月仍未完成開戶程序，則需請您重新填寫個人資料
      </li>
      <li class="mb-4">
        <router-link class="text-brown-500 underline" to="/register"
          >網銀線上開戶教學-手機版</router-link
        >
      </li>
    </ul>
  </div>
</template>
