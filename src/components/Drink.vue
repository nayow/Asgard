<template>
  <div class="wrapper">
    <base-title color="red">LA BOISSON</base-title>
    <div class="d-flex flex-row align-items-center justify-content-center">
      <!-- <div class="col"> -->
      <drink-description-big text-content=""></drink-description-big>
      <!-- </div> -->
      <!-- <div class="col"> -->
      <drink-background>HILDR</drink-background>
      <!-- </div> -->
      <!-- <div class="col"> -->
      <drink-description-small text-content=""></drink-description-small>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import DrinkBackground from "./DrinkBackground.vue";
import BaseTitle from "./BaseTitle.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrinkDescriptionBig from "./DrinkDescriptionBig.vue";
import DrinkDescriptionSmall from "./DrinkDescriptionSmall.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Drink",
  components: {
    DrinkBackground,
    BaseTitle,
    DrinkDescriptionBig,
    DrinkDescriptionSmall
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: calc(100vh - 80px);
}
</style>
