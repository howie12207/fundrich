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
  <div class="overflow-hidden md:rounded-lg bg-white">
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
        md:border-t-8
        border-b border-brown-500
      "
    >
      意見回饋<IconX pointer class="absolute" @click="$emit('close')" />
    </h3>
    <div class="px-8 py-4">
      <p class="mb-4">為提供您迅速確實的服務，請確認您輸入的資訊無誤。</p>
      <form>
        <div class="md:flex md:gap-x-4">
          <div class="flex-grow mb-4">
            <label class="inline-block mb-2" for="name">姓名</label>
            <input
              class="block w-full outline-none border rounded p-2"
              type="text"
              id="name"
              placeholder="請輸入姓名"
            />
          </div>
          <div class="flex-grow mb-4">
            <label class="inline-block mb-2" for="email">電子信箱</label>
            <input
              class="block w-full outline-none border rounded p-2"
              type="text"
              id="email"
              placeholder="請輸入電子信箱"
            />
          </div>
        </div>
        <div>
          <label class="inline-block mb-2" for="email">問題描述</label>
          <textarea
            class="block w-full outline-none p-2 rounded border resize-none"
            placeholder="請輸入問題描述"
            rows="8"
          ></textarea>
        </div>
      </form>
      <div class="flex gap-x-8 mt-4">
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
          取消</button
        ><button
          class="
            block
            w-full
            flex-grow
            bg-brown-600
            py-2
            rounded-lg
            text-white
            transition-all
            hover:opacity-80
          "
        >
          確認送出
        </button>
      </div>
    </div>
  </div>
</template>
