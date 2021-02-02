import "./assets/main.scss";
import { gsap } from "gsap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router, gsap)
  .mount("#app");
