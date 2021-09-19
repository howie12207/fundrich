<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

onMounted(() => {
  if (!route.query.type) router.replace("/registerGoing?type=2");
});

const title = computed(() => route.meta.name[route.query.type] || "");

const idNumber = ref("");
const phone = ref("");

const goodList = [
  {
    id: 1,
    title: "省更多",
    content: "交易手續費折扣1.99折起，讓你有更多資金運用投資",
  },
  { id: 2, title: "更好買", content: "超過3,000檔基金商品任你選擇" },
  {
    id: 3,
    title: "更安心",
    content: "由集保、櫃買中心與34家國內外資產管理公司成立",
  },
];

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div>
    <div class="register_going p-4">
      <form
        class="
          p-2
          md:w-md md:mx-auto
          rounded
          bg-gray-100 bg-opacity-70
          shadow-xl
        "
      >
        <h3 class="text-center text-2xl text-brown-500">{{ title }}</h3>
        <div class="input_block relative flex items-end h-14 mb-4">
          <input
            v-model="idNumber"
            class="w-full block outline-none bg-transparent border-b peer"
            type="text"
            id="idNumber"
          />
          <label
            :class="[
              'absolute bottom-0 left-0 text-lg text-gray-400 font-bold transition-all origin-left peer-focus:-translate-y-6 peer-focus:scale-75',
              idNumber !== '' && '-translate-y-6 scale-75',
            ]"
            for="idNumber"
            >請輸入身份證字號</label
          >
        </div>
        <div class="input_block relative flex items-end h-14 mb-4">
          <input
            v-model="phone"
            class="w-full block outline-none bg-transparent border-b peer"
            type="text"
            id="phone"
          />
          <label
            :class="[
              'absolute bottom-0 left-0 text-lg text-gray-400 font-bold transition-all origin-left peer-focus:-translate-y-6 peer-focus:scale-75',
              phone !== '' && '-translate-y-6 scale-75',
            ]"
            for="phone"
            >請輸入手機號碼</label
          >
        </div>
        <div class="flex items-center gap-x-2 my-4">
          <input class="cursor-pointer" type="checkbox" id="agree" />
          <label class="cursor-pointer" for="agree"
            >本人同意<router-link
              class="text-brown-500"
              to="/registerGoing?type=2"
              >個人資料保護法之聲明</router-link
            ></label
          >
        </div>
        <button
          class="
            block
            w-60
            mx-auto
            my-4
            py-2
            text-white
            bg-darkBlue-800
            rounded
            hover:opacity-80
            transition-all
          "
          @click.prevent
        >
          立即取得驗證碼
        </button>
      </form>
    </div>
    <div class="p-4 text-white bg-brown-500">
      <h3 class="text-2xl text-center mb-4">基富通開戶即享3大好康!!</h3>
      <div class="md:flex md:justify-evenly md:gap-x-4">
        <div v-for="card of goodList" :key="card.id">
          <div
            class="
              flex
              justify-center
              items-center
              w-32
              h-32
              mx-auto
              my-6
              text-2xl
              font-black
              border-4 border-white
              rounded-full
            "
          >
            {{ card.title }}
          </div>
          <p class="text-center text-sm">{{ card.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register_going {
  background: url("./img/bg.jpg") center/cover;
}
.input_block::after {
  content: "";
  @apply absolute bottom-0 w-0 h-0.5 left-1/2 bg-brown-500 transition-all;
}
.input_block:focus-within::after {
  @apply w-full left-0;
}
</style>
