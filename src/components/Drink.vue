/* eslint-disable prettier/prettier */
<template>
  <base-title color="red">LA BOISSON</base-title>
  <div
    class="flex-container d-flex flex-column flex-sm-row justify-content-center "
  >
    <div class="box-left d-none d-sm-block col-9 col-sm-auto">
      <span>HILDR</span>
      <drink-description-big
        text-content="COCKTAIL ENERGISANT"
      ></drink-description-big>
      <drink-description-big
        text-content="GIN GINGEMBRE"
      ></drink-description-big>
    </div>
    <div class="box-center">
      <span class="title">HILDR</span>
      <img class="bottle" src="@/assets/hildr.png" />
    </div>
    <div class="box-right col-9 col-sm-auto">
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
      initialAngle: "60"
    };
  },
  methods: {
    // INITIALIZE TIMELINE (PAUSED)
    initAnimsTimeline() {
      const that = this;
      let tl = gsap.timeline().pause();
      gsap.set(".bottle", { rotation: that.initialAngle });
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

      // functions
      function moveX(target) {
        return gsap.to(target, {
          x: randomX(),
          ease: "sine.inOut",
          duration: 2,
          delay: 0.5,
          onComplete: moveX,
          onCompleteParams: [target]
        });
      }
      function moveY(target) {
        return gsap.to(target, {
          y: randomY(),
          ease: "sine.inOut",
          duration: 2,
          onComplete: moveY,
          onCompleteParams: [target]
        });
      }
      function rotate(target, direction = 1) {
        return gsap.to(target, {
          rotation: "+=" + randomAngle() * direction,
          ease: "sine.inOut",
          duration: 3,
          onComplete: rotate,
          onCompleteParams: [target, direction * -1]
        });
      }

      // init and gsap anims for this component
      this.gsapAnims[0] = moveX(".bottle");
      this.gsapAnims[1] = moveY(".bottle");
      this.gsapAnims[2] = rotate(".bottle");
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
  /* display: flex; in class*/
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}
.title {
  position: relative;
  font-size: 50vh;
  bottom: 6vh; /* 12% of font-size is the extra space to add at the bottom to have the text vertically centered in the parent (for this font only) */
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.bottle {
  height: 90vh;
  will-change: transform;
  visibility: hidden;
  position: absolute;
  margin: auto;
  top: 0;
  left: -10%;
  right: 0;
  bottom: 0;
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

/* safari behaves differently */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .bottle {
      left: 0 !important;
    }
  }
}

.box-left,
.box-right {
  flex-basis: 16%;
  visibility: hidden;
  will-change: transform;
  z-index: 0;
}

.box-center {
  flex-basis: 30%;
  will-change: transform;
  z-index: 1;
  line-height: normal;
}
</style>
