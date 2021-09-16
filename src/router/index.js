import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/login/Login.vue";

export const router = createRouter({
  history: createWebHistory("/fundrich/"),
  routes: [
    { path: "/", component: () => import("@/views/home/Home.vue") },
    { path: "/login", component: () => import("@/views/login/Login.vue") },
  ],
});
