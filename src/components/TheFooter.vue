<template>
  <div class="footer">
    <div class="flex-container"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "TheFooter",
  data() {
    return {
      viewportMaxWidth: window.screen.width,
      elementWidth: 360,
      gsapAnims: []
    };
  },
  mounted() {
    const elementsNb =
      Math.floor(this.viewportMaxWidth / this.elementWidth) + 2; // always covers over 100vw with 1 entire element out
    const container = document.querySelector(".flex-container");

    // Create good amount of boxes
    // eslint-disable-next-line no-unused-vars
    [...Array(elementsNb)].map((_, i) => {
      let box = document.createElement("div");
      box.classList.add("sliding-box");
      box.style.position = "absolute";
      box.style.whiteSpace = "nowrap";
      box.innerHTML = "THE NEW POWER OF ENERGY DRINK";
      container.appendChild(box);
    });

    const windowWrap = gsap.utils.wrap(
      this.elementWidth * -1,
      (elementsNb - 1) * this.elementWidth
    );
    gsap.set(".sliding-box", {
      x: i => (i - 1) * this.elementWidth
    });
    gsap.to(".sliding-box", {
      x: "+=5000px",
      ease: "none",
      repeat: -1,
      duration: 50,
      modifiers: {
        x: x => windowWrap(parseFloat(x)) + "px"
      }
    });
  }
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0px;
  height: 40px;
  background-color: whitesmoke;
  color: black;
  z-index: 8;
  user-select: none; /* requires prefix */
}

.flex-container {
  height: 100%;
  width: 100vw;
  display: flex;
  padding: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  z-index: 9;
}
/* @supports (-moz-appearance: none) {
  .flex-container {
    align-items: center;
  }
}
@-moz-document url-prefix() {
  .flex-container {
    align-items: center;
  }
} */
</style>
