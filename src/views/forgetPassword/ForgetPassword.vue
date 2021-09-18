<script setup>
import { ref } from "vue";

const idNumber = ref("");
const phone = ref("");
const verifyCode = ref("");

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="text-center pb-8 px-4 mx-auto md:w-md">
    <h2 class="title relative font-black text-3xl mb-4 py-4">忘記密碼</h2>
    <form class="bg-gray-100 px-4 py-8">
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
      <div class="input_block relative flex items-end h-14 mb-4">
        <input
          v-model="phone"
          class="w-full block pr-2 outline-none bg-transparent border-b peer"
          type="text"
          id="phone"
        />
        <label
          :class="[
            'absolute bottom-0 left-0 text-xl text-gray-300 font-bold transition-all origin-left peer-focus:-translate-y-6 peer-focus:scale-75',
            phone !== '' && '-translate-y-6 scale-75',
          ]"
          for="phone"
          >請輸入手機號碼</label
        >
        <button
          class="
            p-2
            text-white
            bg-darkBlue-800
            hover:opacity-80
            flex-shrink-0
            rounded-sm
            transition-all
          "
          @click.prevent
        >
          發送驗證碼
        </button>
      </div>
      <div class="input_block relative flex items-end h-14 mb-4">
        <input
          v-model="verifyCode"
          class="w-full block outline-none bg-transparent border-b peer"
          type="text"
          id="verifyCode"
        />
        <label
          :class="[
            'absolute bottom-0 left-0 text-xl text-gray-300 font-bold transition-all origin-left peer-focus:-translate-y-6 peer-focus:scale-75',
            verifyCode !== '' && '-translate-y-6 scale-75',
          ]"
          for="verifyCode"
          >請輸入驗證碼</label
        >
      </div>
      <button
        class="
          py-2
          px-8
          text-white
          bg-darkBlue-800
          hover:opacity-80
          flex-shrink-0
          rounded-sm
          transition-all
        "
        @click.prevent
      >
        下一步
      </button>
    </form>
  </div>
</template>

<style scoped>
.title::after {
  content: "";
  @apply absolute w-20 h-1 bg-brown-600 bottom-0 left-0 right-0 mx-auto;
}
.input_block::after {
  content: "";
  @apply absolute bottom-0 w-0 h-0.5 left-1/2 bg-brown-500 transition-all;
}
.input_block:focus-within::after {
  @apply w-full left-0;
}
</style>
