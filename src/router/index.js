import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";
import Register from "@/views/register/Register.vue";
import ForgetPassword from "@/views/forgetPassword/ForgetPassword.vue";
import Aboutus from "@/views/aboutus/Aboutus.vue";
import Privacy from "@/views/privacy/Privacy.vue";

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
      component: Login,
      meta: {
        name: "登入",
        blank: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        name: "註冊",
      },
    },
    {
      path: "/forgetPassword",
      component: ForgetPassword,
      meta: {
        name: "忘記密碼",
      },
    },
    {
      path: "/aboutus",
      component: Aboutus,
      meta: {
        name: "關於我們",
      },
    },
    {
      path: "/privacy",
      component: Privacy,
      meta: {
        name: "隱私權保護政策",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (to.meta.name) {
    document.title = `${to.meta.name} | 練習作品(參考基富通)`;
  }
  next();
});
