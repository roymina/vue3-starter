import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/home/HomePage.vue"),
    children: [
      {
        path: "/",
        name: "DashBoard",
        component: () => import("@/pages/home/dashBoard/DashBoardPage.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/LoginPage.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
// router.beforeEach((to, from, next) => {
//   //检查token
//   const token = localStorage.getItem('token');
//   if (to.name !== 'Login' && !token) next({ name: 'Login' });
//   else next();
// });
export default router;
