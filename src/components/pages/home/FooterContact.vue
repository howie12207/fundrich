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
  { label: "隱私權保護政策", path: "" },
  { label: "個人資料保護法聲明", path: "" },
  { label: "網站資訊聲明", path: "" },
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
  <section class="bg-darkBlue-800 text-white text-sm px-5 py-7">
    <div class="w-full lg:w-lg mx-auto flex">
      <div class="w-1/3 px-3">
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
          w-1/3
          px-12
          flex flex-col
          justify-around
          border-l border-r border-gray-600
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
      <div class="w-1/3 px-3 grid grid-cols-2 content-center gap-3">
        <router-link
          v-for="link of linkList"
          class="hover:underline hover:text-brown-500 justify-self-start"
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
