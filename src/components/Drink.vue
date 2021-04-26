/* eslint-disable prettier/prettier */
<template>
  <base-title color="red">LA BOISSON</base-title>
  <img class="bottle" src="@/assets/hildr.png" />
  <div class="flex-container flex-column flex-sm-row">
    <div class="box-left col-10">
      <span class="d-none d-sm-inline">HILDR</span>
      <drink-description-big
        text-content="COCKTAIL ENERGISANT"
      ></drink-description-big>
      <drink-description-big
        text-content="GIN GINGEMBRE"
      ></drink-description-big>
    </div>
    <div class="box-center">
      <span class="title">HILDR</span>
    </div>
    <div class="box-right col-10">
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
</template>

<script>
// eslint-disable-next-line prettier/prettier
import BaseTitle from "./BaseTitle.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrinkDescriptionBig from "./DrinkDescriptionBig.vue";
import DrinkDescriptionSmall from "./DrinkDescriptionSmall.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Drink",
  components: {
    BaseTitle,
    DrinkDescriptionBig,
    DrinkDescriptionSmall
  },
  data() {
    return {
      scrollComplete: false,
      gsapAnims: [],
      onScrollAnims: "",
      initialAngle: "60",
      isMobile: false
    };
  },
  methods: {
    // INITIALIZE TIMELINE (PAUSED)
    initAnimsTimeline() {
      const that = this;
      let tl = gsap.timeline().pause();
      gsap.set(".bottle", { rotation: that.initialAngle });
      tl.to(".bottle", {
        autoAlpha: 1,
        top: "25%",
        ease: "back",
        duration: 3,
        onComplete: this.animateBottle()
      });
      tl.from(
        ".box-left",
        {
          y: "+=500",
          z: 0.01,
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
          z: 0.01,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            that.scrollComplete = true;
            that.allowScrollDown();
          }
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
      const randomX = gsap.utils.random(-5, 5, true);
      const randomY = gsap.utils.random(-5, 5, true);
      const randomAngle = gsap.utils.random(0, 8, true);

      // init and gsap anims for this component
      moveX(".bottle");
      moveY(".bottle");
      rotate(".bottle");

      // functions
      function moveX(target) {
        gsap.to(target, {
          x: "+=" + randomX(),
          ease: "sine.inOut",
          duration: 2,
          delay: 0.5,
          onComplete: moveX,
          onCompleteParams: [target]
        });
      }
      function moveY(target) {
        gsap.to(target, {
          y: "+=" + randomY(),
          ease: "sine.inOut",
          duration: 2,
          onComplete: moveY,
          onCompleteParams: [target]
        });
      }
      function rotate(target, direction = 1) {
        gsap.to(target, {
          rotation: "+=" + randomAngle() * direction,
          ease: "sine.inOut",
          duration: 3,
          onComplete: rotate,
          onCompleteParams: [target, direction * -1]
        });
      }
    },
    // trigger with no scroll event
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
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  /* position: relative; */
}
.title {
  font-size: 50vh;
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  line-height: normal;
}
.bottle {
  height: 90vh;
  visibility: hidden;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  will-change: transform;
  z-index: 8; /* bottle and side-boxes must be on different layers */
}
/* wide screens */
@media (min-aspect-ratio: 12/10) {
  .title {
    font-size: 50vh;
  }
  .bottle {
    height: 90vh;
  }
}
/* tall screens */
@media (max-aspect-ratio: 12/10) {
  .title {
    font-size: 35vw;
  }
  .bottle {
    height: 60vw;
  }
}
/* when flex-direction is column we fix their height so that "HILDR" stays vertically centered */
@media (max-width: 576px) {
  .box-left,
  .box-right {
    height: 30%;
  }
}
/* only when flex-direction becomes row */
@media (min-width: 576px) {
  .box-left,
  .box-right {
    flex-basis: 16%;
    visibility: hidden;
  }
  .box-center {
    flex-basis: 30%;
  }
}
</style>
