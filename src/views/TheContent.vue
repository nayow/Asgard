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
      menu: "#nav",
      afterLoad: (orig, desti, dir) => {
        if (desti.anchor == "boisson" && dir == "down") {
          window.fullpage_api.setAllowScrolling(false, "down");
          window.fullpage_api.setKeyboardScrolling(false, "down");
          this.$refs.drink.initScrollAnim();
        }
      }
    });
  }
};
</script>

<style></style>
