<script setup>
import Header from "../../components/layout/header/Header.vue";
import Navbar from "../../components/layout/navbar/Navbar.vue";
import Banner from "../../components/common/banner/Banner.vue";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.png");
  return modules[path].default;
};

const bannerList = [
  { label: "banner01", src: imgSrc("banner_01.png") },
  { label: "banner02", src: imgSrc("banner_02.png") },
  { label: "banner03", src: imgSrc("banner_03.png") },
];
</script>

<template>
  <Header />
  <Navbar />
  <Banner :bannerList="bannerList" />
</template>
