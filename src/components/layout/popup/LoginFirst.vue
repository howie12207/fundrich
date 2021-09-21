<script setup>
import { useRouter } from "vue-router";

import IconX from "@/components/icon/IconX.vue";

const emits = defineEmits(["close"]);
const router = useRouter();

const routeTo = (url) => {
  emits("close");
  router.push(url);
};
</script>

<template>
  <div class="overflow-hidden rounded-lg bg-white">
    <h3
      class="
        relative
        flex
        items-center
        justify-between
        py-4
        px-8
        text-xl
        font-black
        border-t-8 border-b border-brown-500
      "
    >
      貼心提醒<IconX pointer class="absolute" @click="$emit('close')" />
    </h3>
    <div class="px-8 py-4">
      <p>您即將前往收藏清單頁面，須先登入會員。</p>
      <div class="md:flex gap-x-8 mt-4">
        <button
          class="
            block
            w-full
            flex-grow
            bg-gray-200
            py-2
            rounded-lg
            transition-all
            hover:opacity-80
          "
          @click="$emit('close')"
        >
          關閉</button
        ><button
          class="
            block
            w-full
            flex-grow
            bg-brown-600
            py-2
            mt-4
            md:mt-0
            rounded-lg
            text-white
            transition-all
            hover:opacity-80
          "
          @click="routeTo('/login')"
        >
          前往登入
        </button>
      </div>
    </div>
  </div>
</template>
