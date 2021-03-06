import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/auth/Login"
import Dashboard from "../components/dashboard/Dashboard"
import Product from "../views/Product"
import Order from "../views/Order"
import OrderDetails from "../views/OrderDetails"

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
    path: '/product/:slug',
    name: 'product',
    component: Product
  },
  {
    path: '/buy-now/:slug',
    name: 'buy',
    component: Order
  },
  {
    path: '/order/:orderid',
    name: 'orderdetails',
    component: OrderDetails
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
