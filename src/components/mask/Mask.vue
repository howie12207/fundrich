<script setup>
import { ref, onMounted, computed } from "vue";

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
    emit("close", "");
    document.body.style.overflow = "initial";
  }, prop.duration);
};

const style = computed(() => {
  return {
    "--popupWidth": prop.width,
    "--popupDuration": `${prop.duration / 1000}s`,
  };
});
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="show" class="popup_mask" :style="style" @click="closeHandle">
        <div class="popup_wrapper">
          <slot :close="close"></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.popup_mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

.popup_wrapper {
  width: var(--popupWidth);
  max-width: 90%;
  max-height: 90%;
  min-height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: transparent;
}

.fade-enter-active {
  animation: fade var(--popupDuration) ease forwards;
}
.fade-leave-active {
  animation: fade var(--popupDuration) ease forwards reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
