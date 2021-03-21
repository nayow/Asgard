/* eslint-disable prettier/prettier */
<template>
  <div class="wrapper" id="gsap-container">
    <base-title color="red">LA BOISSON</base-title>
    <div id="flex-container" class="d-flex">
      <div class="box-left">
        <drink-description-big
          text-content="COCKTAIL ENERGISANT"
        ></drink-description-big>
        <drink-description-big
          text-content="GIN GINGEMBRE"
        ></drink-description-big>
      </div>
      <div class="box-center">
        <drink-background ref="drinkBackground">HILDR</drink-background>
        <img class="bottle" src="@/assets/hildr.png" />
      </div>
      <div class="box-right">
        <drink-description-small
          title="Descriptif"
          description="Royaume où règnent des déesses nordiques aux pouvoirs innombrables. Dans ce lieu, des clans se sont formés autour de chacunes des déesses. Mais alors que ces clans se donnaient à une guerre éternelle, un portail s’est ouvert vers notre monde."
        ></drink-description-small>
        <drink-description-small
          title="Descriptif technique"
          :description="['33CL', '5°', 'France']"
        ></drink-description-small>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line prettier/prettier
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
  },
  data() {
    return {
      letterHeight: 0, // init
      scrollStep: 0 // increments with each animation
    };
  },
  methods: {
    getLetterHeight() {
      let drinkNameEl = document.getElementById("text-content");
      let computedFontSize = window.getComputedStyle(drinkNameEl).fontSize;
      this.letterHeight = parseFloat(computedFontSize) * 0.69; // the font has a letter height / font size ratio of approx 0.69
    },
    initScrollAnim() {
      let that = this;
      let container = document.getElementById("gsap-container");

      function displayBottle() {
        container.addEventListener(
          "wheel",
          function(e) {
            if (e.deltaY > 0) {
              let gl = gsap.timeline({ onComplete: displayLeft });
              gl.from(".bottle", {
                y: "-=200",
                autoAlpha: 0,
                ease: "back",
                duration: 1
              });
              gl.to(".bottle", { rotation: 410, ease: "power1.out" }, "<");
            }
          },
          { once: true }
        );
      }

      function displayLeft() {
        that.$data.scrollStep = 1;
        container.addEventListener(
          "wheel",
          function(e) {
            if (e.deltaY > 0) {
              gsap.from(".box-left", {
                y: "+=500",
                autoAlpha: 0,
                duration: 1,
                ease: "power3.out",
                onComplete: displayRight
              });
            }
          },
          { once: true }
        );
      }

      function displayRight() {
        that.$data.scrollStep = 2;
        container.addEventListener(
          "wheel",
          function(e) {
            if (e.deltaY > 0) {
              gsap.from(".box-right", {
                y: "+=500",
                autoAlpha: 0,
                duration: 1,
                ease: "power3.out",
                onComplete: allowScrollDown
              });
            }
          },
          { once: true }
        );
      }

      function allowScrollDown() {
        setTimeout(function() {
          window.fullpage_api.setAllowScrolling(true, "down");
          window.fullpage_api.setKeyboardScrolling(true, "down");
        }, 600);
      }

      // if user scrolls back up too early it will retrieve its latest position
      switch (that.$data.scrollStep) {
        case 0:
          return displayBottle();
        case 1:
          return displayLeft();
        case 2:
          return displayRight();
      }
    }
  },
  mounted() {
    //init
    this.getLetterHeight();

    // listen to changes
    this.$nextTick(function() {
      window.addEventListener("resize", _ => {
        this.getLetterHeight();
      });
    });
  }
};
</script>

<style scoped>
.bottle {
  position: absolute;
  height: 90vh;
  visibility: hidden;
}

.wrapper {
  position: relative;
  height: calc(100vh - 80px);
}

#flex-container {
  align-items: center;
  justify-content: center;
  height: 100%; /* of wrapper */
  line-height: 1.2;
}

.box-left,
.box-right {
  flex-basis: 14%;
  visibility: hidden;
}

.box-center {
  display: flex; /** to center children */
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
}
</style>
