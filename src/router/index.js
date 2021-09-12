import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/Home.vue";

export const router = createRouter({
  history: createWebHistory("/fundrich/"),
  routes: [{ path: "/", component: Home }],
});
