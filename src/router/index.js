import VueRouter from 'vue-router';
import Vue from 'vue';
const Home = () => import("views/Home/Home");
const Category = () => import("views/category/Category");
const Profile = () => import("views/profile/Profile");
const ShopCart = () => import("views/shopCart/ShopCart");
const Detail = () => import("views/detail/Detail");


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
  },
  {
    path: "/detail/:iid",
    name: "Detail",
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;
