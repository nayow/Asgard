<template>
  <div class="wrapper">
    <div class="asgard-container">
      <div class="asgard asgard-left">
        ASGARD
      </div>
      <div class="asgard asgard-middle">
        ASGARD
      </div>
      <div class="asgard asgard-right">
        ASGARD
      </div>
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
        <linearGradient
          id="gradient"
          x1=".5"
          x2=".5"
          y2="1"
          gradientTransform="rotate(-10)"
        >
          <stop stop-color="#effbff" />
          <stop stop-color="#effbff" />
          <stop offset=".1" stop-color="#00c9ff" />
          <stop offset=".16" stop-color="#00c9ff" />
          <stop offset=".28" stop-color="#f00" stop-opacity=".8" />
          <stop offset=".34" stop-color="#ff59c2" />
          <stop offset=".53" stop-color="#00c9ff" />
          <stop offset=".58" stop-color="#fff" />
          <stop offset=".65" stop-color="#fbff00" />
          <stop offset=".75" stop-color="#00c9ff" />
          <stop offset=".91" stop-color="#ff2d9b" />
          <stop offset="1" stop-color="#f00" stop-opacity=".8" />
          <stop offset="1" stop-color="#ff0808" />
        </linearGradient>
      </defs>
      <g clip-path="url(#mask)">
        <rect width="100%" height="100%" fill="#000" />
        <image
          x="25%"
          id="background-statue"
          xlink:href="@/assets/statue.png"
        />
      </g>
      <ellipse
        id="circle-shadow"
        cx="70%"
        cy="50%"
        rx="120"
        ry="200"
        stroke="url(#gradient)"
        style="fill: transparent; stroke-width: 5;"
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
  data() {
    return {
      gsapAnims: []
    };
  },
  methods: {
    triggerSlide() {
      const CSSfontSize = 110;
      let textWidth = CSSfontSize * 22; // 13.8 is font-size to width ratio so we take more to have space
      gsap.set(".asgard", {
        x: i => (i - 1) * textWidth
      });
      let windowWrap = gsap.utils.wrap(textWidth * -1, textWidth);
      // save this animation to access it globally
      this.gsapAnims[0] = gsap
        .to(".asgard", {
          x: "-=10000px",
          ease: "none",
          repeat: -1,
          duration: 40,
          modifiers: {
            x: x => windowWrap(parseFloat(x)) + "px"
          }
        })
      );
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
}

.asgard {
  position: absolute;
  top: -53.5vh;
  font-size: 110vh;
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  user-select: none; /* requires prefix */
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

#circle-shadow {
  cursor: url(../assets/picto.png) 16 16, move !important;
}
</style>
