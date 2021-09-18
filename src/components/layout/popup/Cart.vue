<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

import IconX from "./IconX.vue";

import menu from "@/assets/navList.json";

const prop = defineProps({
  width: {
    type: String,
    default: "640px",
  },
  duration: {
    type: Number,
    default: 300,
  },
  closeOut: {
    type: Boolean,
    default: true,
  },
  closeBtn: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: "confirm",
  },
});
const emit = defineEmits(["close"]);

onMounted(() => {
  show.value = true;
  document.body.style.overflow = "hidden";
});

const closeHandle = (e) => {
  if (!prop.closeOut) return;
  if (e.target.className === "popup_mask") close();
};
const show = ref(false);
const close = () => {
  show.value = false;
  setTimeout(() => {
    emit("close");
    document.body.style.overflow = "initial";
  }, prop.duration);
};

const style = computed(() => {
  return {
    "--popupWidth": prop.width,
    "--popupDuration": `${prop.duration / 1000}s`,
  };
});
const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <teleport to="body">
    <div class="popup_mask" :style="style" @click="closeHandle">
      <transition name="slide">
        <div v-if="show" class="popup_wrapper">
          <div class="relative w-full h-14 z-50">
            <h3
              class="
                fixed
                text-center text-lg
                w-80
                py-4
                text-white
                bg-yellow-600
              "
            >
              <IconX pointer class="icon left-4" @click="close" />
              結帳清單
            </h3>
          </div>
          <div class="empty relative flex flex-col justify-center items-center">
            <img
              class="self-center mb-2"
              :src="imgSrc('cart.svg')"
              alt="cart"
            />
            <p class="text-lg mb-4">目前購物車尚無商品</p>
            <p class="text-sm">你知道嗎？有超過25%的人</p>
            <p class="text-sm">一次申購2隻以上的基金</p>
            <router-link
              class="
                fixed
                bottom-2
                w-72
                py-2
                text-center text-brown-500
                border border-brown-500
                rounded
              "
              to="/"
              @click="close"
              >繼續選購</router-link
            >
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<style scoped>
.popup_mask {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

.popup_wrapper {
  width: var(--popupWidth);
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: auto;
  background-color: #fff;
}

.icon {
  position: absolute;
}

.empty {
  height: calc(100% - 60px);
}

.slide-enter-active {
  animation: slide var(--popupDuration) ease forwards;
}
.slide-leave-active {
  animation: slide var(--popupDuration) ease forwards reverse;
}
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
