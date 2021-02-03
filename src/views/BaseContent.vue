<template>
  <div id="fullpage">
    <div class="section" data-anchor="history">
      <History />
    </div>
    <div class="section" data-anchor="product">
      <Product />
    </div>
    <div class="section" data-anchor="contact">
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
      anchors: ["history", "product", "contact"]
    });
  }
};
</script>

<style></style>
