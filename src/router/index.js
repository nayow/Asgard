import { createRouter, createWebHistory } from "vue-router";
import VueCookies from "vue-cookies";
import TheContent from "@/views/TheContent.vue";
import AgeCheck from "@/views/AgeCheck.vue";
import PageNotFound from "@/views/PageNotFound.vue";
// import VueCookies from "vue-cookies";

const routes = [
  {
    path: "/",
    name: "TheContent",
    component: TheContent,
    beforeEnter: (to, from) => {
      if (!VueCookies.isKey("asgard_age_check")) return "/age";
      return true;
    }
  },
  {
    path: "/age",
    name: "AgeCheck",
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

export default router;
