import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Profiles from "../views/Profiles.vue";
import {fb} from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", name: "home", component: Home
  },
  {
    path: "/admin", name: "admin", component: Admin, meta: { requiresAuth: true },
    children:[
      { path: "overview", name: "overview", component: Overview },
      { path: "products", name: "products", component: Products },
      { path: "profiles", name: "profiles", component: Profiles },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes //KEEP IN MIND
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!fb.auth().currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;