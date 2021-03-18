<template>
  <div class="wrapper" id="gsap-container">
    <base-title color="red">LA BOISSON</base-title>
    <div id="flex-container" class="d-flex">
      <div class="box-left">
        <drink-description-big
          class="pushed-right"
          text-content="tetttttttttttttottts testttttt testttt eheh httttttttttttte"
        ></drink-description-big>
      </div>
      <div class="box-center">
        <drink-background ref="drinkBackground">HILDR</drink-background>
      </div>
      <div class="box-right">
        <drink-description-small
          class="pushed-left"
          title="title here"
          description="description here"
        ></drink-description-small>
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
    DrinkDescriptionBig,
    DrinkDescriptionSmall
  },
  data() {
    return {
      letterHeight: 0 // init
    };
  },
  methods: {
    getLetterHeight() {
      let drinkNameEl = document.getElementById("text-content");
      let computedFontSize = window.getComputedStyle(drinkNameEl).fontSize;
      this.letterHeight = parseFloat(computedFontSize) * 0.69; // the font has a letter height / font size ratio of approx 0.69
    },
    anim() {
      gsap.from([".box-left", ".box-right"], { autoAlpha: 0, duration: 1 });
    },
    updateScrollAnim() {},
    initScrollAnim() {
      const scroller = document.getElementById("fullpage");

      function getScrollPosition() {
        const transform = scroller.style.transform;
        const position = transform.replace(/[^0-9\-.,]/g, "").split(",");
        return position[1] * -1; //
      }

      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value)
            : getScrollPosition();
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });

      scroller.addEventListener("wheel", () => ScrollTrigger.update);

      ScrollTrigger.addEventListener("refresh", function() {
        window.fullpage_api.reBuild();
      });

      let timeline = gsap.timeline({
        scrollTrigger: {
          scroller: scroller,
          trigger: "#gsap-container",
          start: "top top+=80px",
          end: "+=100%",
          scrub: true,
          pin: true,
          onEnter: _ => console.log("enter"),
          onLeave: _ => console.log("leave")
        }
      });
      timeline
        .from(".box-left", { autoAlpha: 0, duration: 2 })
        .from(".box-right", { autoAlpha: 0, duration: 2 });
    },
    triggerScrollAnim() {
      let container = document.getElementById("gsap-container");
      container.addEventListener("wheel", function(e) {
        gsap
          .to([".box-left", ".box-right"], { autoAlpha: 1, duration: 1 })
          .then(() => {
            window.fullpage_api.setAllowScrolling(true, "down");
            window.fullpage_api.setKeyboardScrolling(true, "down");
          });
      });
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
.wrapper {
  position: relative;
  height: calc(100vh - 80px);
}

#flex-container {
  align-items: center;
  justify-content: center;
  height: 100%; /* of wrapper */
}

.box-left,
.box-right {
  flex-basis: 10%;
  visibility: hidden;
}

.box-center {
  flex-basis: 30%;
}

.pushed-left {
  position: relative;
  margin-right: auto;
  flex: 0 0 10vw;
}

.pushed-right {
  position: relative;
  margin-left: auto;
  flex: 0 0 10vw;
}
</style>
