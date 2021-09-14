<script setup>
const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <div class="relative flex items-center w-full lg:w-72">
    <img class="absolute left-4" :src="imgSrc('search.svg')" alt="搜尋" />
    <input
      class="w-full pl-12 pr-4 py-4 outline-none border-l"
      type="text"
      placeholder="請輸入您想尋找的基金商品名稱"
    />
  </div>
</template>
