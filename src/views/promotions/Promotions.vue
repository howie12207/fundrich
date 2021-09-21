<script setup>
const remindList = [
  {
    id: 1,
    content: [
      "客戶定義：2021/08/13(五)前(含)核印完成之客戶，且未進行帳戶註銷。",
    ],
  },
  { id: 2, content: ["酷碰優惠內容：單筆申購手續費0元。"] },
  { id: 3, content: ["酷碰使用期限：30日。"] },
  { id: 4, content: ["酷碰適用基金：全平台基金，不適用貨幣型及特定基金*。"] },
  {
    id: 5,
    content: [
      "可享整台購物車手續費折扣（最多 10 檔基金），限歸戶客戶本人使用，不適用轉換及轉申購。",
    ],
  },
  {
    id: 6,
    content: [
      "酷碰僅供一次性使用，交易取消不進行補發，超過使用期限後酷碰自動失效，請您於下單時多加留意。",
    ],
  },
  {
    id: 7,
    content: [
      "2021/08/09(一)前(含)核印完成之客戶，酷碰將於2021/08/09(一)23:59:59前歸戶完成； 2021/08/10(二)至08/13(五)核印完成之客戶，酷碰將於2021/08/13(五) 23:59:59前歸戶完成。請至「個人帳戶>會員中心>酷碰與個人代碼」查詢。",
      ,
      "*特定基金：(YUI076、YUI079)元大台灣卓越50ETF連結基金、(YUI077、YUI080)元大富櫃50ETF連結基金、(YUI078、YUI081)元大台灣高股息ETF連結基金、(YUI089、YUI090)元大台灣高股息優質龍頭基金(本基金之配息來源可能為收益平準金) 。",
    ],
  },
];
const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>
<template>
  <div class="lg:w-lg lg:mx-auto">
    <img class="mb-8 mx-auto" :src="imgSrc('banner.png')" alt="banner" />
    <img class="mx-auto" :src="imgSrc('promo_01.png')" alt="promo" />
    <img class="mx-auto" :src="imgSrc('focus.png')" alt="focus" />
    <p class="text-center">如何使用這張酷碰？你能參考的10檔熱搜台股基金！</p>
    <router-link to="/"
      ><img class="mx-auto" :src="imgSrc('fund_01.png')" alt="fund"
    /></router-link>
    <router-link to="/"
      ><img class="mx-auto" :src="imgSrc('fund_02.png')" alt="fund"
    /></router-link>
    <router-link to="/"
      ><img class="mx-auto" :src="imgSrc('fund_03.png')" alt="fund"
    /></router-link>
    <router-link to="/"
      ><img class="mx-auto" :src="imgSrc('fund_04.png')" alt="fund"
    /></router-link>
    <img class="mx-auto" :src="imgSrc('remind.png')" alt="remind" />
    <ul class="list-disc pl-8 pr-2">
      <li v-for="list of remindList" :key="list.id">
        <p class="mb-2" v-for="(sub, index) of list.content" :key="index">
          {{ sub }}
        </p>
      </li>
    </ul>
  </div>
</template>
