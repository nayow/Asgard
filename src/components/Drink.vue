<template>
  <div class="wrapper">
    <base-title color="red">LA BOISSON</base-title>
    <div id="flex-container" class="d-flex justify-content-center">
      <div class="box">
        <drink-description-big
          class="pushed-right"
          text-content="tes"
          :style="{ bottom: letterHeight + 'px' }"
        ></drink-description-big>
      </div>
      <div class="box">
        <drink-background ref="drinkBackground">HILDR</drink-background>
      </div>
      <div class="box">
        <drink-description-big
          class="pushed-left"
          text-content="test"
        ></drink-description-big>
      </div>
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
    DrinkDescriptionBig
  },
  data() {
    return {
      letterHeight: 0 // init
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", _ => {
        let drinkNameEl = document.getElementById("text-content");
        let computedFontSize = window.getComputedStyle(drinkNameEl).fontSize;
        this.letterHeight = parseFloat(computedFontSize) * 0.69; // the font has a letter height / font size ratio of approx 0.69
      });
    });
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: calc(100vh - 80px);
}

#flex-container {
  align-items: baseline;
}

.box {
  display: flex;
  justify-content: center;
}

.pushed-left {
  position: relative;
  margin-right: auto;
}

.pushed-right {
  position: relative;
  margin-left: auto;
}
</style>
