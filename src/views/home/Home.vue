<script setup>
import Header from "/src/components/layout/header/Header.vue";
import Navbar from "/src/components/layout/navbar/Navbar.vue";
import Banner from "/src/components/common/banner/Banner.vue";
import TotalFund from "/src/components/pages/home/TotalFund.vue";
import SearchCard from "/src/components/pages/home/SearchCard.vue";
import MenuCard from "/src/components/pages/home/MenuCard.vue";
import RecentView from "/src/components/pages/home/RecentView.vue";
import Marquee from "/src/components/common/marquee/Marquee.vue";
import FooterNav from "/src/components/pages/home/FooterNav.vue";
import FooterContact from "/src/components/pages/home/FooterContact.vue";
import FooterStatement from "/src/components/pages/home/FooterStatement.vue";

import bannerList from "/src/assets/bannerList.json";
import menu from "/src/assets/menuCard.json";
import marqueeList from "/src/assets/marqueeList.json";
</script>

<template>
  <div class="h-14"><Header class="fixed z-10" /></div>
  <div class="h-14"><Navbar class="fixed z-10 top-14 w-full" /></div>
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
    <Marquee :marqueeList="marqueeList" class="my-8" />
  </main>
  <footer>
    <FooterNav />
    <FooterContact />
    <FooterStatement />
  </footer>
</template>
