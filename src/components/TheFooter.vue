<template>
  <div id="footer">
    <div class="flex-container"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "TheFooter",
  data() {
    return {
      elementWidth: 500,
      gsapAnims: []
    };
  },
  mounted() {
    const viewportMaxWidth = window.screen.width;
    const elementsNb = Math.round(viewportMaxWidth / this.elementWidth) + 2; // always covers over 100vw with at least 1 entire element out
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
      x: i => (i - 1) * this.elementWidth,
      z: 0.01, // helps with x or y translation
      rotation: 0.01
    });
    gsap.to(".sliding-box", {
      x: "+=5000",
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
#footer {
  position: fixed;
  bottom: 0px;
  height: 40px;
  background-color: whitesmoke;
  color: black;
  user-select: none; /* requires prefix */
  font-family: "Univers LT Std", "Roboto", sans-serif;
  font-size: 1.4rem;
}

/* xs breakpoint (small screens such as iphone 5/5S/5C/SE) */
@media (max-width: 320px) {
  #footer {
    display: none;
  }
}

.flex-container {
  height: 100%;
  width: 100vw;
  padding: 0.5rem;
  display: flex;
  align-items: center;
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
