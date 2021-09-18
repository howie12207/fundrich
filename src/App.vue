<script setup>
import Layout from "@/components/layout/Layout.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition-group name="fade">
      <component v-if="$route.meta.blank" :is="Component"></component>
      <Layout v-else>
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </Layout>
    </transition-group>
  </router-view>
</template>
