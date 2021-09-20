<script setup>
import IconChevron from "@/components/icon/IconChevron.vue";
</script>

<template>
  <div
    class="
      text-white
      bg-brown-500
      rounded-l-lg
      shadow-md
      p-1
      cursor-pointer
      flex flex-col
      items-center
    "
  >
    <IconChevron
      :size="16"
      direction="left"
      :class="['text-white transition-all mb-1']"
    />
    <span class="text">意見回饋</span>
  </div>
</template>

<style scoped>
.text {
  writing-mode: vertical-lr;
}
</style>
