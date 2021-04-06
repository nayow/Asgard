/* eslint-disable prettier/prettier */
<template>
  <div class="wrapper" id="gsap-container">
    <base-title color="red">LA BOISSON</base-title>
    <div id="flex-container" class="d-flex">
      <div class="box-left">
        <span>HILDR</span>
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
      scrollComplete: false,
      gsapAnims: [],
      onScrollAnims: ""
    };
  },
  methods: {
    // bringBottle(callback) {
    //   gsap.from(".bottle", {
    //     y: "-=200",
    //     autoAlpha: 0,
    //     ease: "back",
    //     duration: 3,
    //     onComplete: () => {
    //       callback;
    //       this.animateBottle();
    //     }
    //   });
    //   this.scrollStep = 1;
    // },
    // bringLeft(callback) {
    //   gsap.from(".box-left", {
    //     y: "+=500",
    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     onComplete: callback
    //   });
    //   this.scrollStep = 2;
    // },
    // bringRight(callback) {
    //   gsap.from(".box-right", {
    //     y: "+=500",
    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     onComplete: callback
    //   });
    //   this.scrollStep = 3;
    // },
    initAnimsTimeline() {
      let tl = gsap
        .timeline({
          onComplete: () => {
            this.scrollComplete = true;
          }
        })
        .pause();
      gsap.set(".bottle", { rotation: "65deg" });
      tl.from(".bottle", {
        y: "-=200",
        autoAlpha: 0,
        ease: "back",
        duration: 3,
        onComplete: () => this.animateBottle()
      });
      tl.from(
        ".box-left",
        {
          y: "+=500",
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out"
        },
        1
      );
      tl.from(
        ".box-right",
        {
          y: "+=500",
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out"
        },
        2
      );
      return tl;
    },
    allowScrollDown() {
      setTimeout(function() {
        window.fullpage_api.setAllowScrolling(true, "down");
        window.fullpage_api.setKeyboardScrolling(true, "down");
      }, 600);
    },
    animateBottle() {
      // vars
      const that = this;
      const randomX = random(0, 10);
      const randomY = random(5, 10);
      const randomAngle = random(-4, 4);

      // functions
      function moveX(target, direction) {
        that.gsapAnims[0] = gsap.to(target, {
          x: "+=" + randomX(direction),
          ease: "Sine.easeInOut",
          duration: 3,
          onComplete: moveX,
          onCompleteParams: [target, direction * -1]
        });
      }
      function moveY(target, direction) {
        that.gsapAnims[1] = gsap.to(target, {
          y: "+=" + randomY(direction),
          ease: "Sine.easeInOut",
          duration: 2,
          onComplete: moveY,
          onCompleteParams: [target, direction * -1]
        });
      }
      function rotate(target, direction) {
        that.gsapAnims[2] = gsap.to(target, {
          rotation: "+=" + randomAngle(direction),
          ease: "Sine.easeInOut",
          duration: 3,
          onComplete: rotate,
          onCompleteParams: [target, direction * -1]
        });
      }
      function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
      }

      // init and gsap anims for this component
      moveX(".bottle", 1);
      moveY(".bottle", -1);
      rotate(".bottle", 1);
    },
    initScrollAnim() {
      const that = this;
      const container = document.getElementById("gsap-container");

      container.addEventListener(
        "wheel",
        function(e) {
          if (e.deltaY > 0) {
            that.onScrollAnims.play();
          }
        },
        { once: true, passive: true }
      );

      // function displayBottle() {
      //   container.addEventListener(
      //     "wheel",
      //     function(e) {
      //       if (e.deltaY > 0) {
      //         that.bringBottle(displayLeft);
      //       }
      //     },
      //     { once: true, passive: true }
      //   );
      // }
      // function displayLeft() {
      //   container.addEventListener(
      //     "wheel",
      //     function(e) {
      //       if (e.deltaY > 0) {
      //         that.bringLeft(displayRight);
      //       }
      //     },
      //     { once: true, passive: true }
      //   );
      // }
      // function displayRight() {
      //   container.addEventListener(
      //     "wheel",
      //     function(e) {
      //       if (e.deltaY > 0) {
      //         that.bringRight(that.allowScrollDown);
      //       }
      //     },
      //     { once: true, passive: true }
      //   );
      // }

      // if user scrolls back up too early it will retrieve its latest position
      // if (this.scrollStep == 0) return displayBottle();
      // if (this.scrollStep == 1) return displayLeft();
      // if (this.scrollStep == 2) return displayRight();
    },
    // by clicking in the menu animations must directly fire
    startAnimations() {
      this.onScrollAnims.play();
      this.allowScrollDown();
    }
  },
  mounted() {
    this.onScrollAnims = this.initAnimsTimeline();
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
