<script setup>
import Header from "@/components/layout/header/Header.vue";
import Navbar from "@/components/layout/navbar/Navbar.vue";
import Banner from "@/components/banner/Banner.vue";
import TotalFund from "./TotalFund.vue";
import SearchCard from "./SearchCard.vue";
import MenuCard from "./MenuCard.vue";
import RecentView from "./RecentView.vue";
import Marquee from "@/components/marquee/Marquee.vue";
import FooterNav from "./FooterNav.vue";
import FooterContact from "./FooterContact.vue";
import FooterStatement from "./FooterStatement.vue";

import bannerList from "@/assets/bannerList.json";
import menu from "@/assets/menuCard.json";
import marqueeList from "@/assets/marqueeList.json";
</script>

<template>
  <div class="bg-gray-200">
    <div class="h-14"><Header class="fixed z-10" /></div>
    <div class="h-14"><Navbar class="fixed z-10 top-14" /></div>
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
    <footer>
      <FooterNav />
      <FooterContact />
      <FooterStatement />
    </footer>
  </div>
</template>
