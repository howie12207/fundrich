import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home/Home.vue";

export const router = createRouter({
  history: createWebHistory("/fundrich/"),
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        name: "首頁",
      },
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue"),
      meta: {
        name: "登入",
        blank: true,
      },
    },
    {
      path: "/aboutus",
      component: () => import("@/views/aboutus/Aboutus.vue"),
      meta: {
        name: "關於我們",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.name) {
    document.title = `${to.meta.name} | 練習作品(參考基富通)`;
  }
  next();
});
