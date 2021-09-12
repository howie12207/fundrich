<script setup>
import Header from "../../components/layout/header/Header.vue";
import Navbar from "../../components/layout/navbar/Navbar.vue";
import Banner from "../../components/common/banner/Banner.vue";
import TotalFund from "../../components/pages/home/TotalFund.vue";
import SearchCard from "../../components/pages/home/SearchCard.vue";
import MenuCard from "../../components/pages/home/MenuCard.vue";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};

const bannerList = [
  { label: "banner01", src: imgSrc("banner_01.png") },
  { label: "banner02", src: imgSrc("banner_02.png") },
  { label: "banner03", src: imgSrc("banner_03.png") },
];
const menu = [
  {
    label: "個人帳戶與查詢",
    icon: imgSrc("charts.svg"),
    sub: [
      {
        label: "投資總覽",
        path: "",
      },
      {
        label: "歷史交易查詢",
        path: "",
      },
      {
        label: "定期定額變更查詢",
        path: "",
      },
      {
        label: "基金贖回/轉換轉申購",
        path: "",
      },
    ],
    more: true,
  },
  {
    label: "好享退專區",
    icon: imgSrc("hat.svg"),
    sub: [
      {
        label: "加碼優惠",
        path: "",
        remark: "好享退限定",
      },
      {
        label: "金額變更",
        path: "",
      },
      {
        label: "績效總覽",
        path: "",
      },
      {
        label: "月報專區",
        path: "",
      },
    ],
  },
  {
    label: "聰明選基金",
    icon: imgSrc("select.svg"),
    sub: [
      { label: "單筆短期投資", path: "" },
      { label: "定期定額投資", path: "" },
      { label: "單筆長期投資", path: "" },
      { label: "基金泡泡圖", path: "" },
    ],
  },
  {
    label: "最新活動",
    icon: imgSrc("gift.svg"),
    sub: [{ label: "優惠/活動專區", path: "" }],
  },
  {
    label: "熱門商品",
    icon: imgSrc("prize.svg"),
    sub: [
      { label: "單筆熱搜TOP20", path: "" },
      { label: "定額熱搜TOP20", path: "" },
      { label: "全市場基金統計", path: "" },
      { label: "新募集基金", path: "", remark: "Hot" },
    ],
  },
  {
    label: "投資開講",
    icon: imgSrc("play.svg"),
    sub: [
      { label: "投資觀念與方法", path: "" },
      { label: "商品概念", path: "" },
      { label: "投資情報", path: "" },
    ],
  },
];
</script>

<template>
  <Header />
  <Navbar />
  <Banner :bannerList="bannerList" />
  <main class="w-lg mx-auto">
    <div class="flex my-4 gap-x-4">
      <TotalFund />
      <SearchCard />
    </div>
    <div class="flex flex-wrap gap-8">
      <MenuCard
        class="w-1/4 flex-grow rounded-md"
        v-for="item of menu"
        :key="item.label"
        :menu="item"
      />
    </div>
  </main>
</template>
