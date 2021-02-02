import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Histoire from "../views/Histoire.vue";
import Produits from "../views/Produits.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/histoire",
    name: "Histoire",
    component: Histoire
  },
  {
    path: "/produits",
    name: "Produits",
    component: Produits
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
