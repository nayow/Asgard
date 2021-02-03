import { createRouter, createWebHistory } from "vue-router";
import BaseContent from "@/views/BaseContent.vue";
import AgeCheck from "@/views/AgeCheck.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    component: BaseContent
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
