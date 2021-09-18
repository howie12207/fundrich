<script setup>
const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <div
    class="text-white bg-brown-500 rounded-l-lg shadow-md p-1 cursor-pointer"
  >
    <img :src="imgSrc('chevron.svg')" alt="chevron" />
    <span class="text">意見回饋</span>
  </div>
</template>

<style scoped>
.text {
  writing-mode: vertical-lr;
}
</style>
