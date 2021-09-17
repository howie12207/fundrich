<script setup>
import Banner from "@/components/banner/Banner.vue";
import TotalFund from "./TotalFund.vue";
import SearchCard from "./SearchCard.vue";
import MenuCard from "./MenuCard.vue";
import RecentView from "./RecentView.vue";
import Marquee from "@/components/marquee/Marquee.vue";

import bannerList from "@/assets/bannerList.json";
import menu from "@/assets/menuCard.json";
import marqueeList from "@/assets/marqueeList.json";
</script>

<template>
  <Banner :bannerList="bannerList" />
  <main class="w-full px-4 mx-auto lg:w-lg">
    <div class="flex my-4 gap-x-4">
      <TotalFund />
      <SearchCard />
    </div>
    <div class="flex flex-wrap gap-8">
      <MenuCard v-for="item of menu" :key="item.label" :menu="item" />
    </div>
    <RecentView class="mt-16" />
    <Marquee :marqueeList="marqueeList" class="my-8" />
  </main>
</template>
