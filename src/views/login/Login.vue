<script setup>
import { ref } from "vue";

const idNumber = ref("");
const password = ref("");
const saveIdNumber = ref(false);

const passwordType = ref("password");
const changePasswordType = () => {
  passwordType.value = passwordType.value === "password" ? "text" : "password";
};

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="px-2 py-4 lg:mx-auto lg:w-lg">
    <header class="mb-8">
      <router-link class="inline-block w-72" to="/"
        ><img :src="imgSrc('logo.svg')" alt="logo"
      /></router-link>
    </header>
    <div class="flex flex-col lg:flex-row">
      <img class="flex-grow" :src="imgSrc('login.jpg')" alt="login" />
      <form class="px-8 py-4 bg-gray-100 border-t-4 border-brown-500">
        <h3 class="text-2xl text-center mb-2">登入</h3>
        <div class="input_block relative flex items-end h-14 mb-4">
          <input
            v-model="idNumber"
            class="w-full block outline-none bg-transparent border-b peer"
            type="text"
            id="idNumber"
          />
          <label
            :class="[
              'absolute bottom-0 left-0 text-xl text-gray-300 font-bold transition-all origin-left peer-focus:-translate-y-6 peer-focus:scale-75',
              idNumber !== '' && '-translate-y-6 scale-75',
            ]"
            for="idNumber"
            >請輸入身份證字號</label
          >
        </div>
        <div class="input_block relative flex items-end h-14">
          <input
            v-model="password"
            class="w-full block pr-14 outline-none bg-transparent border-b peer"
            :type="passwordType"
            id="password"
          />
          <label
            :class="[
              'absolute bottom-0 left-0 text-xl text-gray-300 font-bold transition-all origin-left peer-focus:-translate-y-6 peer-focus:scale-75',
              password !== '' && '-translate-y-6 scale-75',
            ]"
            for="password"
            >請輸入密碼</label
          >
          <img
            class="absolute bottom-0 right-0 cursor-pointer"
            :src="
              passwordType === 'password'
                ? imgSrc('eye_close.png')
                : imgSrc('eye_open.png')
            "
            alt="see_password"
            @click="changePasswordType"
          />
        </div>
        <div class="flex items-center gap-x-2 mt-4">
          <input
            class="cursor-pointer"
            v-model="saveIdNumber"
            type="checkbox"
            id="saveIdNumber"
          />
          <label class="text-sm cursor-pointer" for="saveIdNumber"
            >儲存此身分證字號</label
          >
        </div>
        <button
          class="
            block
            mt-4
            mx-auto
            px-20
            py-2
            rounded
            text-white
            bg-darkBlue-800
            transition-all
            hover:opacity-80
          "
          @click.prevent
        >
          登入
        </button>
        <div class="mt-4 pt-2 text-sm border-t-2 border-brown-400">
          <p>
            <router-link
              class="text-base text-brown-500 mr-2 hover:underline"
              to="/login"
              >忘記密碼？</router-link
            >還沒有基金帳戶？<router-link
              class="text-base text-brown-500 hover:underline"
              to="/login"
              >立即開戶</router-link
            >
          </p>
          <p>
            為了您的帳戶安全，如您於30分鐘之內未操作本系統，系統將自動登出。
          </p>
        </div>
      </form>
    </div>
    <footer class="pt-8 lg:px-24 lg:flex lg:justify-between">
      <div
        class="
          flex
          justify-center
          gap-x-4
          border-b-2
          lg:border-0
          border-brown-500
          pb-4
          mb-4
        "
      >
        <router-link class="self-start" to="/login">
          <img class="w-8" :src="imgSrc('facebook.png')" alt="facebook" />
        </router-link>
        <router-link class="self-start" to="/login">
          <img class="w-8" :src="imgSrc('youtube.png')" alt="youtube" />
        </router-link>
        <router-link class="self-start" to="/login">
          <img class="w-8" :src="imgSrc('email.png')" alt="email" />
        </router-link>
      </div>
      <div class="text-xs text-center lg:text-left">
        <div class="lg:flex gap-x-4">
          <p>基富通證券股份有限公司</p>
          <p>地址：10543 台北市松山區復興北路365號8樓</p>
        </div>
        <p>電話：(02)8712-1322</p>
        <div class="lg:flex gap-x-4">
          <p>電子郵件：service@fundrich.com.tw</p>
          <p>金管會核准字號：106年金管證總字第0051號</p>
        </div>
        <p>©2016 基富通證券股份有限公司 版權所有</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.input_block::after {
  content: "";
  @apply absolute bottom-0 w-0 h-0.5 left-1/2 bg-brown-500 transition-all;
}
.input_block:focus-within::after {
  @apply w-full left-0;
}
</style>
