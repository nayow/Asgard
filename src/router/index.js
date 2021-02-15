import { createRouter, createWebHistory } from "vue-router";
import TheContent from "@/views/TheContent.vue";
import AgeCheck from "@/views/AgeCheck.vue";
import PageNotFound from "@/views/PageNotFound.vue";
// import VueCookies from "vue-cookies";

const routes = [
  {
    path: "/",
    component: TheContent
  },
  {
    path: "/age",
    component: AgeCheck
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

///
// router.beforeEach(function(to, from, next)
//   next() if cookie present
// });

export default router;
