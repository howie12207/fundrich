import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";

export const router = createRouter({
  history: createWebHistory("/fundrich/"),
  routes: [
    { path: "/", component: Home, meta: {} },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue"),
      meta: {
        blank: true,
      },
    },
  ],
});
