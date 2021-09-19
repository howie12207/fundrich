<script setup>
const contactList = [
  {
    icon: "phone.svg",
    alt: "phone",
    content: "(02)8712-1322",
    href: "tel:+886-2-87121322",
  },
  {
    icon: "location.svg",
    alt: "location",
    content: "10543台北市松山區復興北路365號8樓",
    href: "https://www.google.com.tw/maps?q=10543台北市松山區復興北路365號8樓",
  },
  {
    icon: "mail.svg",
    alt: "mail",
    content: "service@fundrich.com.tw",
    href: "mailto:service@fundrich.com.tw",
  },
];

const linkList = [
  { label: "隱私權保護政策", path: "privacy" },
  { label: "個人資料保護法聲明", path: "personalInfo" },
  { label: "網站資訊聲明", path: "webInfo" },
  { label: "免責及版權聲明", path: "" },
  { label: "金融消費爭議處理專區", path: "" },
  { label: "金融友善服務專區", path: "" },
  { label: "防制洗錢及打擊資助恐怖主義專區", path: "" },
  { label: "檢舉制度", path: "" },
];

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <section class="bg-darkBlue-800 text-white text-sm py-7">
    <div class="w-full px-5 mx-auto grid md:grid-cols-2 lg:w-lg lg:grid-cols-3">
      <div class="px-3">
        <div class="mb-4"><img :src="imgSrc('logo.svg')" alt="logo" /></div>
        <div class="flex items-center mb-4">
          <router-link class="mr-4" to="/">
            <img class="icon" :src="imgSrc('facebook.svg')" alt="facebook"
          /></router-link>
          <router-link class="mr-4" to="/">
            <img class="icon" :src="imgSrc('youtube.svg')" alt="youtube"
          /></router-link>
          <img
            class="icon cursor-pointer"
            :src="imgSrc('email.svg')"
            alt="email"
          />
        </div>
        <p class="mb-4">金管會核准字號：106年金管證總字第0051號</p>
        <p>© 2016基富通證券股份有限公司版權所有</p>
      </div>
      <ul
        class="
          px-4
          pt-8
          pb-4
          mt-4
          flex flex-col
          gap-y-4
          justify-around
          border-t border-gray-600
          md:px-12 md:mt-0 md:gap-y-0 md:py-0 md:border-t-0 md:border-l
          lg:border-r
        "
      >
        <li
          v-for="list of contactList"
          :key="list.alt"
          class="flex items-center"
        >
          <img class="mr-4 w-6" :src="imgSrc(list.icon)" :alt="list.alt" />
          <a :href="list.href" target="_blank">{{ list.content }}</a>
        </li>
      </ul>
      <div
        class="
          px-3
          mt-4
          pt-4
          border-t border-gray-600
          col-span-full
          lg:mt-0
          lg:pt-0
          lg:border-t-0
          lg:col-auto
          lg:grid
          lg:grid-cols-2
          lg:content-center
          lg:gap-3
        "
      >
        <router-link
          v-for="link of linkList"
          class="
            inline-block
            pr-4
            pb-2
            justify-self-start
            hover:underline hover:text-brown-500
          "
          :key="link.label"
          :to="link.path"
          >{{ link.label }}</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon:hover {
  filter: invert(63%) sepia(19%) saturate(944%) hue-rotate(1deg) brightness(98%)
    contrast(88%);
}
</style>
