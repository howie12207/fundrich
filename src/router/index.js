import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";

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
      component: () => import("@/views/register/Register.vue"),
      meta: {
        name: "註冊",
      },
    },
    {
      path: "/forgetPassword",
      component: () => import("@/views/forgetPassword/ForgetPassword.vue"),
      meta: {
        name: "忘記密碼",
      },
    },
    {
      path: "/aboutus",
      component: () => import("@/views/aboutus/Aboutus.vue"),
      meta: {
        name: "關於我們",
      },
    },

    {
      path: "/promotions/:id",
      component: () => import("@/views/promotions/Promotions.vue"),
      meta: {
        name: "最新活動",
      },
    },

    {
      path: "/faq/list",
      component: () => import("@/views/faq/list/List.vue"),
      meta: {
        name: "分類查詢",
      },
    },
    {
      path: "/faq/step",
      component: () => import("@/views/faq/step/Step.vue"),
      meta: {
        name: "交易流程",
      },
    },
    {
      path: "/faq/rules",
      component: () => import("@/views/faq/rules/Rules.vue"),
      meta: {
        name: "交易規則",
      },
    },
    {
      path: "/faq/charge",
      component: () => import("@/views/faq/charge/Charge.vue"),
      meta: {
        name: "收費標準",
      },
    },

    {
      path: "/registerGoing",
      component: () => import("@/views/registerGoing/RegisterGoing.vue"),
      meta: {
        name: {
          2: "繼續完成開戶",
          3: "變更開戶方式",
          4: "開戶進度查詢",
        },
      },
    },
    {
      path: "/download",
      component: () => import("@/views/download/Download.vue"),
      meta: {
        name: "下載專區",
      },
    },

    {
      path: "/privacy",
      component: () => import("@/views/privacy/Privacy.vue"),
      meta: {
        name: "隱私權保護政策",
      },
    },
    {
      path: "/personalInfo",
      component: () => import("@/views/personalInfo/PersonalInfo.vue"),
      meta: {
        name: "個人資料保護法聲明",
      },
    },
    {
      path: "/webInfo",
      component: () => import("@/views/webInfo/WebInfo.vue"),
      meta: {
        name: "網站資訊聲明",
      },
    },
    {
      path: "/disclaimer",
      component: () => import("@/views/disclaimer/Disclaimer.vue"),
      meta: {
        name: "免責及版權聲明",
      },
    },
    {
      path: "/friendlyService",
      component: () => import("@/views/friendlyService/FriendlyService.vue"),
      meta: {
        name: "金融友善服務專區",
      },
    },
    {
      path: "/reporting",
      component: () => import("@/views/reporting/Reporting.vue"),
      meta: {
        name: "金融友善服務專區",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/notFound/NotFound.vue"),
      meta: {
        name: "找不到頁面",
        blank: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (to.meta.name) {
    let name = to.meta.name;
    if (typeof to.meta.name === "object")
      name = to.meta.name[to.query.type] || "";
    document.title = `${name} | 練習作品(參考基富通) 無任何商業行為`;
  }
  next();
});
