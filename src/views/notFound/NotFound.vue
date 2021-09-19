<script setup></script>

<template>
  <div class="not_found flex justify-center items-center">
    <div class="bg-white bg-opacity-50 rounded p-12 text-center">
      <p class="text-brown-500 text-9xl my-4">404</p>
      <p class="text-darkBlue-800 text-2xl my-4">Page not found.</p>
      <router-link
        to="/"
        class="
          block
          text-darkBlue-800
          border border-brown-600
          py-2
          px-4
          rounded
          hover:bg-brown-600 hover:text-white
          transition-all
        "
      >
        回到首頁
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not_found {
  width: 100%;
  height: 100vh;
  background: url("./img/bg.jpg") center/cover;
}
</style>
