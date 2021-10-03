import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/auth/Login"
import Dashboard from "../components/dashboard/Dashboard"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Dashboard
  },
  {
    path: "/admin/:modelname",
    component: Dashboard
  },
  {
    path: "/admin/:modelname/:id",
    component: Dashboard,
  },
  {
    path: "/admin",
    name: "admin",
    redirect: "/admin/products",
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
