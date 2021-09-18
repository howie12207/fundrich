<script setup></script>

<template>
  <div>
    <h4 class="text-xl text-red-500 text-center font-black mb-4">
      本功能僅限桌機使用
    </h4>
    <ul class="list-disc px-8">
      <li class="text-red-500 font-black mb-4">開戶最快只需1個工作天</li>
      <li class="text-red-500 font-black mb-4">
        適用銀行：臺灣銀行、第一商業銀行、華南商業銀行、台北富邦商業銀行、國泰世華商業銀行、台新國際商業銀行、元大商業銀行、兆豐國際商業銀行、彰化商業銀行之晶片金融卡，
        <router-link class="text-brown-500 underline" to="/register"
          >「查看更多適用銀行」</router-link
        >、<router-link class="text-brown-500 underline" to="/register"
          >「一卡GO 常見問題」</router-link
        >
      </li>
      <li class="mb-4">
        若您欲約定之扣款帳戶為<span class="font-black underline">數位帳戶</span
        >，提醒您可與該銀行確認該數位帳戶是否得辦理作為約定扣款帳戶，及受理約定之方式是否有所限制。
      </li>

      <li class="text-red-500 font-black mb-4">
        線上填寫資料，使用晶片金融卡進行線上開戶
      </li>
      <li class="mb-4">
        請預先準備：
        <ul>
          <li>(1) 晶片讀卡機</li>
          <li>(2) 扣款帳戶的晶片金融卡</li>
          <li>(3) 身分證及第二證件之正反面照片圖檔</li>
        </ul>
      </li>
      <li class="mb-4">本服務適用20歲以上之中華民國國民</li>
      <li class="mb-4">
        適用幣別：台幣扣款帳戶<span class="text-red-500 font-black"
          >（外幣帳戶約定需以書面方式申請）</span
        >
      </li>
      <li class="mb-4">支援：Windows(IE10以上)</li>
      <li class="mb-4">
        提醒您，若逾六個月仍未完成開戶程序，則需請您重新填寫個人資料。
      </li>
      <li class="mb-4">
        <router-link class="text-brown-500 underline" to="/register"
          >晶片金融卡線上開戶教學</router-link
        >
      </li>
    </ul>
  </div>
</template>
