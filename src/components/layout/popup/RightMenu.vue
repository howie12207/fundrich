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

const menuFilter = ref([
  { label: "關於我們", path: "/aboutus" },
  ...menu.map((item) => ({ ...item, expand: false })),
  { label: "意見反饋", path: "/aboutus" },
]);

const expand = (path, index) => {
  if (path) {
    router.push(path);
    close();
    return;
  }
  menuFilter.value[index].expand = !menuFilter.value[index].expand;
};

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
            <h3 class="fixed text-center w-80 py-4 text-white bg-brown-500">
              <IconX pointer class="icon left-4" @click="close" />
              主選單
            </h3>
          </div>
          <ul>
            <li
              class="relative border-b"
              v-for="(item, index) of menuFilter"
              :key="item.label"
            >
              <div
                class="flex justify-between px-6 py-3 cursor-pointer"
                @click="expand(item.path, index)"
              >
                <span class="text-lg">{{ item.label }}</span>
                <img
                  v-if="item.sub"
                  :class="['transition-all', { 'rotate-180': item.expand }]"
                  :src="imgSrc('chevron.svg')"
                  alt="chevron"
                />
              </div>
              <transition name="expand">
                <div
                  v-if="item.expand && item.sub"
                  :class="['px-6 py-3 bg-brown-100']"
                >
                  <div
                    class="w-full mt-4 first:mt-0"
                    v-for="sub of item.sub"
                    :key="sub.label"
                  >
                    <h5 class="font-bold w-full pb-2 border-b border-gray-300">
                      {{ sub.label }}
                    </h5>
                    <ul>
                      <li
                        class="
                          px-6
                          my-2
                          last:mb-0
                          cursor-pointer
                          hover:underline hover:text-brown-500
                        "
                        v-for="child of sub.sub"
                        :key="child.label"
                      >
                        {{ child.label }}
                      </li>
                    </ul>
                  </div>
                </div></transition
              >
            </li>
          </ul>
          <router-link
            class="
              block
              w-11/12
              py-2
              mx-auto
              my-4
              rounded
              text-center text-white
              bg-brown-600
              hover:bg-brown-700
              transition-all
            "
            to="/login"
            @click="close"
            >登入</router-link
          >
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

.expand-enter-active {
  animation: expand var(--popupDuration) ease forwards;
}
.expand-leave-active {
  animation: expand var(--popupDuration) ease forwards reverse;
}
@keyframes expand {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1000px;
  }
}
</style>
