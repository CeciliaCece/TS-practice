import Homepage from "./pages/Homepage.vue";
import Admin from "./pages/Admin.vue";
import Login from "./pages/Login.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes /* routes:routes, */,
});

export default router;
