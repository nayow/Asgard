<template>
  <div class="container-fluid" id="footer">
    <div class="wrapper"></div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "TheFooter",
  mounted() {
    const viewportWidth = window.screen.width;
    const elementWidth = 318; //px
    const elementsNb = Math.floor(viewportWidth / elementWidth) + 2;
    console.log(viewportWidth, elementWidth, elementsNb); // always covers over 100vw with 1 entire element out

    this.$nextTick(function() {
      const wrapper = document.querySelector(".wrapper");

      // Create correct amount of boxes
      // eslint-disable-next-line no-unused-vars
      [...Array(elementsNb)].map((_, i) => {
        let box = document.createElement("div");
        box.classList.add("sliding-box", "d-inline", "text-nowrap");
        box.innerHTML = "THE NEW POWER OF ENERGY DRINK —";
        wrapper.appendChild(box);
        console.log(i, viewportWidth, elementWidth, elementsNb);
      });
      // eslint-disable-next-line no-unused-vars
    }).then(_ => {
      gsap.set(".sliding-box", {
        x: i => i * elementWidth
      });

      gsap.to(".sliding-box", {
        duration: 15,
        ease: "none",
        // eslint-disable-next-line prettier/prettier
        x: "+=" + (elementWidth * (elementsNb-1)), //move each box across
        modifiers: {
          x: gsap.utils.unitize(
            x => (parseFloat(x) % (elementWidth * elementsNb)) - elementWidth
          ) //force x value to be between -318 and 318*5 using modulus
        },
        repeat: -1
      });
    });
  }
};
</script>

<style>
#footer {
  position: fixed;
  bottom: 0px;
  height: 40px;
  background-color: #009eff;
  color: black;
  z-index: 9;
}

.wrapper {
  height: 100%;
  z-index: 9;
}

.sliding-box {
  position: absolute;
  width: 318px;
  text-align: center;
}
</style>
