import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory("/fundrich/"),
  routes: [{ path: "/", component: () => import("@/views/home/Home.vue") }],
});
