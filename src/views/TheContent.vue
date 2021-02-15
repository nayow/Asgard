<template>
  <div id="fullpage">
    <div class="section">
      <History />
    </div>
    <div class="section">
      <Drink />
    </div>
    <div class="section">
      <Contact />
    </div>
  </div>
</template>

<script>
import fullpage from "fullpage.js";
import History from "@/components/History.vue";
import Drink from "@/components/Drink.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "TheContent",
  components: {
    History,
    Drink,
    Contact
  },
  mounted() {
    new fullpage("#fullpage", {
      licenseKey: "abc",
      anchors: ["histoire", "boisson", "contact"],
      responsiveWidth: 600
    });
  }
};
</script>

<style></style>
