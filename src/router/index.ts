import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/change",
      name: "change",
      component: () => import("../views/ChangeView.vue"),
    },
    {
      path: "/price",
      name: "price",
      component: () => import("../views/PriceView.vue"),
    },
    {
      path: "/pricev2",
      name: "pricev2",
      component: () => import("../views/PriceViewTwo.vue"),
    },
  ],
});

export default router;
