<template>
  <div id="fullpage">
    <div class="section">
      <History />
    </div>
    <div class="section">
      <Product />
    </div>
    <div class="section">
      <Contact />
    </div>
  </div>
</template>

<script>
import fullpage from "fullpage.js";
import History from "@/components/History.vue";
import Product from "@/components/Product.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "BaseContent",
  components: {
    History,
    Product,
    Contact
  },
  mounted() {
    new fullpage("#fullpage", {
      licenseKey: "abc",
      anchors: ["histoire", "produits", "contact"],
      responsiveWidth: 600
    });
  }
};
</script>

<style></style>
