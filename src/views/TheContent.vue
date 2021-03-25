<template>
  <div id="fullpage">
    <div class="section">
      <Intro />
    </div>
    <div class="section">
      <History />
    </div>
    <div class="section">
      <drink ref="drink"></drink>
    </div>
    <div class="section">
      <Contact />
    </div>
  </div>
</template>

<script>
import fullpage from "fullpage.js";
import easings from "fullpage.js/vendors/easings.js";
import Intro from "@/components/Intro.vue";
import History from "@/components/History.vue";
import Drink from "@/components/Drink.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "TheContent",
  components: {
    Intro,
    History,
    Drink,
    Contact
  },
  mounted() {
    new fullpage("#fullpage", {
      licenseKey: "abc",
      anchors: ["home", "histoire", "boisson", "contact"],
      responsiveWidth: 600,
      scrollingSpeed: 1200,
      menu: "#nav",
      afterLoad: (orig, desti, dir) => {
        if (desti.anchor == "boisson" && dir == "down") {
          window.fullpage_api.setAllowScrolling(false, "down");
          window.fullpage_api.setKeyboardScrolling(false, "down");
          this.$refs.drink.initScrollAnim();
        }
        if (desti.anchor == "histoire" && dir == "up") {
          window.fullpage_api.setAllowScrolling(true, "down");
          window.fullpage_api.setKeyboardScrolling(true, "down");
        }
      }
    });
  }
};
</script>

<style></style>
