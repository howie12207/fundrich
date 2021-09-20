import { createRouter, createWebHistory } from "vue-router";

import NotFound from "@/views/notFound/NotFound.vue";
import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";
import Register from "@/views/register/Register.vue";
import ForgetPassword from "@/views/forgetPassword/ForgetPassword.vue";
import Aboutus from "@/views/aboutus/Aboutus.vue";

import Step from "@/views/faq/step/Step.vue";
import Rules from "@/views/faq/rules/Rules.vue";
import Charge from "@/views/faq/charge/Charge.vue";

import RegisterGoing from "@/views/registerGoing/RegisterGoing.vue";
import Download from "@/views/download/Download.vue";

import Privacy from "@/views/privacy/Privacy.vue";
import PersonalInfo from "@/views/personalInfo/PersonalInfo.vue";
import WebInfo from "@/views/webInfo/WebInfo.vue";
import Disclaimer from "@/views/disclaimer/Disclaimer.vue";
import FriendlyService from "@/views/friendlyService/FriendlyService.vue";
import Reporting from "@/views/reporting/Reporting.vue";

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
      path: "/faq/step",
      component: Step,
      meta: {
        name: "交易流程",
      },
    },
    {
      path: "/faq/rules",
      component: Rules,
      meta: {
        name: "交易規則",
      },
    },
    {
      path: "/faq/charge",
      component: Charge,
      meta: {
        name: "收費標準",
      },
    },

    {
      path: "/registerGoing",
      component: RegisterGoing,
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
      component: Download,
      meta: {
        name: "下載專區",
      },
    },

    {
      path: "/privacy",
      component: Privacy,
      meta: {
        name: "隱私權保護政策",
      },
    },
    {
      path: "/personalInfo",
      component: PersonalInfo,
      meta: {
        name: "個人資料保護法聲明",
      },
    },
    {
      path: "/webInfo",
      component: WebInfo,
      meta: {
        name: "網站資訊聲明",
      },
    },
    {
      path: "/disclaimer",
      component: Disclaimer,
      meta: {
        name: "免責及版權聲明",
      },
    },
    {
      path: "/friendlyService",
      component: FriendlyService,
      meta: {
        name: "金融友善服務專區",
      },
    },
    {
      path: "/reporting",
      component: Reporting,
      meta: {
        name: "金融友善服務專區",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
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
