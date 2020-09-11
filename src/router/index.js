import VueRouter from 'vue-router';
import Vue from 'vue';
const Home = () => import("views/Home");
const Category = () => import("views/Category");
const Profile = () => import("views/Profile");
const ShopCart = () => import("views/ShopCart");


Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: "/shopCart",
    component: ShopCart
  },
  {
    path: "/profile",
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;
