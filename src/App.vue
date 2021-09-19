<script setup>
import Layout from "@/components/layout/Layout.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <!-- 開啟會造成先出現layout頁面 -->
    <!-- <transition-group name="fade" mode="out-in"> -->
    <component v-if="$route.meta.blank" :is="Component"></component>
    <Layout v-else>
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </Layout>
    <!-- </transition-group> -->
  </router-view>
</template>
