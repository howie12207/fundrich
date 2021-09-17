<script setup>
import Layout from "@/components/layout/Layout.vue";
</script>

<template>
  <router-view v-if="$route.meta.blank"></router-view>
  <Layout v-else />
</template>
