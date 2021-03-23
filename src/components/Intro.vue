<template>
  <div class="wrapper">
    <div class="title title-left">
      ASGARD
    </div>
    <div class="title title-left">
      ASGARD
    </div>
    <div class="title title-right">
      ASGARD
    </div>
    <div class="title title-right">
      ASGARD
    </div>
    <svg>
      <defs>
        <clipPath id="mask">
          <ellipse
            id="mask-circle"
            cx="70%"
            cy="50%"
            rx="120"
            ry="200"
            style="fill: #000"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#mask)">
        <rect width="100%" height="100%" fill="#000" />
        <image id="background-statue" xlink:href="@/assets/statue.png" />
      </g>
      <ellipse
        id="circle-shadow"
        cx="70%"
        cy="50%"
        rx="120"
        ry="200"
        style="stroke: #fff; fill: transparent; stroke-width: 5;"
      />
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export default {
  name: "Intro",
  methods: {
    // initSlide() {
    //   setTimeout(() => {
    //     const textWidth = document.querySelector(".title").getBBox().width;
    //     this.triggerSlide(textWidth);
    //   }, 0);
    // },
    triggerSlide() {
      const CSSfontSize = 110;
      const textWidth = CSSfontSize * 13.8; // 13.8 is font-size to width ratio
      const elementsNb = 3;
      const viewportMaxWidth = window.screen.width;
      gsap.set(".title-left", {
        x: i => -1 * (i + 1) * textWidth
      });
      gsap.set(".title-right", {
        x: i => viewportMaxWidth + i * textWidth
      });
      const windowWrap = gsap.utils.wrap(textWidth * -2, textWidth * 2);
      gsap.to(".title", {
        x: "-=10000px",
        ease: "none",
        repeat: -1,
        duration: 40,
        modifiers: {
          x: x => windowWrap(parseFloat(x)) + "px"
        }
      });

      // const viewportWidth = document.body.clientWidth;
      // gsap.to(".slide__text", {
      //   duration: 20,
      //   ease: "none",
      //   x: "-=" + (textWidth + viewportWidth),
      //   repeat: -1
      // });
    },
    initMask() {
      Draggable.create("#circle-shadow", {
        onDrag: function() {
          gsap.set("#mask-circle", {
            x: "+=" + this.deltaX,
            y: "+=" + this.deltaY
          });
        }
      });
    }
  },
  mounted() {
    this.triggerSlide();
    this.initMask();
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: calc(100vh - 80px);
  margin-top: 40px;
}

.title {
  position: absolute;
  top: -53.5vh;
  font-size: 110vh;
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

#background-statue {
  height: 100vh;
}
</style>
