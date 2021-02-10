<template>
  <div class="row align-items-center slide__wrapper">
    <svg class="slide__svg" height="1em">
      <text class="slide__text" x="100vw" y="0.75em" fill="#F5F5F5">
        ASGARD
      </text>
    </svg>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "History",
  mounted() {
    let textWidth, viewportWidth;
    const slideSVG = document.querySelector(".slide__svg");

    slideSVG.addEventListener("load", function() {
      textWidth = document.querySelector(".slide__text").scrollWidth;
      viewportWidth = document.body.clientWidth;
      console.log(textWidth, viewportWidth);
      animateSlide();
    });

    const animateSlide = function() {
      gsap.to(".slide__text", {
        duration: 5,
        ease: "none",
        x: "-=" + textWidth, //move text to the left
        repeat: -1
      });
    };
  }
};
</script>

<style>
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
}
/* .slide__content {
  height: 100%;
  position: relative;
}
.slide__content > span {
  height: inherit;
  position: absolute;
  top: calc(-115vh * 0.6 + 100px);
  font-size: 115vh;
} */
</style>
