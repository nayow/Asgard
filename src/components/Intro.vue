<template>
  <div ref="asgard-container" class="asgard-container container-vh-100">
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
  <div class="svg-container container-vh-100">
    <svg>
      <defs>
        <clipPath id="mask">
          <ellipse
            id="mask-circle"
            cx="70%"
            cy="50%"
            rx="100"
            ry="160"
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
        <image id="background-statue" xlink:href="@/assets/statue.png" />
      </g>
      <ellipse
        id="circle-shadow"
        cx="70%"
        cy="50%"
        rx="100"
        ry="160"
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
      gsapAnims: [],
      elementWidth: 0,
      currentViewportHeight: 0,
      currentViewportWidth: 0,
      isDragging: false
    };
  },
  methods: {
    triggerSlide() {
      // const CSSfontSize = 110;
      // let textWidth = CSSfontSize * 22; // 13.8 is font-size to width ratio so we take more to have space
      const elementsNb = 3;
      const windowWrap = gsap.utils.wrap(
        this.elementWidth * -1,
        (elementsNb - 1) * this.elementWidth
      );
      const totalWidth = elementsNb * this.elementWidth;
      gsap.set(".asgard", {
        x: i => i * this.elementWidth,
        z: 0.01
      });
      gsap.set(".svg-container", {
        z: 0.01
      });
      gsap.to(".asgard", {
        x: "-=" + totalWidth,
        rotation: 0.01,
        ease: "none",
        repeat: -1,
        duration: 20,
        modifiers: {
          x: x => windowWrap(parseFloat(x)) + "px"
        }
      });
    },
    initMask() {
      Draggable.create("#circle-shadow", {
        onMove: function(e) {
          e.stopImmediatePropagation();
        },
        onDrag: function() {
          gsap.set("#mask-circle", {
            x: "+=" + this.deltaX,
            y: "+=" + this.deltaY
          });
        },
        onDragStart: () => (this.isDragging = true),
        onDragEnd: () => (this.isDragging = false)
      });
    },
    scaleEllipse(viewportHeight) {
      gsap.set(["#mask-circle", "#circle-shadow"], {
        attr: {
          ry: viewportHeight / 3,
          rx: viewportHeight / 5
        }
      });
    },
    onResize() {
      window.addEventListener("resize", () => {
        this.$nextTick(() => {
          this.currentViewportHeight = window.innerHeight;
          this.currentViewportWidth = window.innerWidth;
        });
      });
    },
    // calculate '100vh' and manually sets height, to avoid bug on ios safari when directly using 100vh css property
    convertHeight(viewportHeight) {
      document.getElementsByClassName("container-vh-100").forEach(el => {
        el.style.height = `${viewportHeight - 80}px`;
      });
    },
    positionStatue(viewportWidth) {
      gsap.set("#background-statue", {
        attr: {
          x: viewportWidth * 0.3 + "px"
        }
      });
    }
  },
  watch: {
    currentViewportHeight: function(newVh) {
      this.scaleEllipse(newVh);
      this.convertHeight(newVh);
    },
    currentViewportWidth: function(newVw) {
      this.positionStatue(newVw);
    }
  },
  mounted() {
    this.currentViewportHeight = window.innerHeight;
    this.currentViewportWidth = window.innerWidth;

    // because box width is set to 200vh + 40vh padding
    this.elementWidth = this.currentViewportHeight * 2.4;

    this.positionStatue(this.currentViewportWidth);
    this.convertHeight(this.currentViewportHeight);
    this.triggerSlide();
    this.initMask();
    this.scaleEllipse(this.currentViewportHeight);
    this.onResize();
  }
};
</script>

<style scoped>
.asgard-container {
  position: relative;
  top: -40px; /* make it fullscreen */
}
.asgard {
  position: absolute;
  height: inherit;
  font-size: 100vh;
  padding: 0 20vh;
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  line-height: 1;
  user-select: none; /* prefix */
  z-index: 2;
}
/* sm breakpoints */
@media (max-width: 576px) {
  .asgard {
    font-size: 95vh;
  }
}

/* wrap svg in div so it doesn't get repainted everytime */
.svg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 4;
}

svg {
  width: 100vw;
  height: 100%;
}

#background-statue {
  height: 100vh;
}

#circle-shadow {
  cursor: url(../assets/picto.png) 16 16, move !important;
}
</style>
