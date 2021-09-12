<script setup>
import Header from "/src/components/layout/header/Header.vue";
import Navbar from "/src/components/layout/navbar/Navbar.vue";
import Banner from "/src/components/common/banner/Banner.vue";
import TotalFund from "/src/components/pages/home/TotalFund.vue";
import SearchCard from "/src/components/pages/home/SearchCard.vue";
import MenuCard from "/src/components/pages/home/MenuCard.vue";
import RecentView from "/src/components/pages/home/RecentView.vue";

import bannerList from "/src/assets/bannerList.json";
import menu from "/src/assets/menuCard.json";
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
    <RecentView class="mt-16" />
  </main>
</template>
