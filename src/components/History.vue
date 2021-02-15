<template>
  <div class="row align-items-center slide__wrapper">
    <svg class="slide__svg" height="1em">
      <text class="slide__text" x="100%" y="0.75em" fill="#F5F5F5">
        <!-- pushed down to center text in viewport, relatively to current font-size -->
        ASGARD
      </text>
    </svg>
    <svg>
      <defs>
        <clipPath id="mask">
          <circle
            id="mask-circle"
            cx="50%"
            cy="50%"
            r="8%"
            style="fill: #000"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#mask)">
        <rect width="100%" height="100%" fill="#000" />
        <image id="background-statue" xlink:href="@/assets/statue.png" />
      </g>
      <circle
        id="circle-shadow"
        cx="50%"
        cy="50%"
        r="8%"
        style="stroke: #fff; fill: transparent; stroke-width: 5;"
      />
    </svg>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "History",
  methods: {
    initSlide() {
      setTimeout(() => {
        const textWidth = document.querySelector(".slide__text").getBBox()
          .width;
        this.triggerSlide(textWidth);
      }, 0);
    },
    initMask() {
      const svgElement = document.querySelector("svg");
      const maskedElement = document.querySelector("#mask-circle");
      const circleShadow = document.querySelector("#circle-shadow");
      const svgPoint = svgElement.createSVGPoint();

      function cursorPoint(e, svg) {
        svgPoint.x = e.clientX;
        svgPoint.y = e.clientY;
        return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
      }

      function update(svgCoords) {
        maskedElement.setAttribute("cx", svgCoords.x);
        maskedElement.setAttribute("cy", svgCoords.y);
        circleShadow.setAttribute("cx", svgCoords.x);
        circleShadow.setAttribute("cy", svgCoords.y);
      }

      window.addEventListener("mousemove", function(e) {
        update(cursorPoint(e, svgElement));
      });

      document.addEventListener("touchmove", function(e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        if (touch) {
          update(cursorPoint(touch, svgElement));
        }
      });
    },
    triggerSlide(textWidth) {
      const viewportWidth = document.body.clientWidth;
      console.log(viewportWidth);
      console.log(textWidth);
      gsap.to(".slide__text", {
        duration: 10,
        ease: "none",
        x: "-=" + (textWidth + viewportWidth), //move text to the left
        repeat: -1
      });
    }
  },
  mounted() {
    this.initSlide();
    this.initMask();
  }
};
</script>

<style scoped>
svg {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.slide__wrapper {
  height: calc(100vh - 80px);
  margin-top: 40px;
}
.slide__svg {
  font-size: 110vh;
}
.slide__text {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  width: 100%;
}
#background-statue {
  height: 32%;
}
</style>
