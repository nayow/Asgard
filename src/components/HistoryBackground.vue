<template>
  <div
    class="statue-container justify-content-center justify-content-sm-evenly justify-content-md-between"
  >
    <img
      class="statue statue-left d-none d-md-block"
      src="@/assets/statue2.png"
    />
    <img class="statue statue-middle" src="@/assets/statue2.png" />
    <img
      class="statue statue-right d-none d-sm-block"
      src="@/assets/statue2.png"
    />
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "HistoryBackground",
  data() {
    return {
      gsapAnims: [[], [], []],
      initialAngles: ["120", "70", "240"]
    };
  },
  methods: {
    animateStatues() {
      // vars
      const that = this;
      const randomX = gsap.utils.random(1, 8, true);
      const randomY = gsap.utils.random(1, 8, true);
      const randomDelay = gsap.utils.random(0, 1, true);
      const randomTime = gsap.utils.random(3, 5, true);
      const randomTime2 = gsap.utils.random(5, 8, true);
      const randomAngle = gsap.utils.random(-4, 4, true);

      // functions
      function moveX(target) {
        return gsap.to(target, {
          x: randomX(),
          ease: "sine.inOut",
          duration: 2,
          onComplete: moveX,
          onCompleteParams: [target],
          yoyo: true
        });
      }
      function moveY(target) {
        return gsap.to(target, {
          y: randomY(),
          ease: "sine.inOut",
          duration: 2.5,
          onComplete: moveY,
          onCompleteParams: [target],
          yoyo: true
        });
      }
      function rotate(target, direction = 1) {
        return gsap.to(target, {
          rotation: "+=" + randomAngle() * direction,
          ease: "sine.inOut",
          duration: 2,
          onComplete: rotate,
          onCompleteParams: [target, direction * -1]
        });
      }

      // init
      const statues = gsap.utils.toArray(".statue");
      statues.forEach((statue, index) => {
        gsap.set(statue, { rotation: that.initialAngles[index], z: 0.01 }); // initialize angle
        that.gsapAnims[0][index] = moveX(statue);
        that.gsapAnims[1][index] = moveY(statue);
        that.gsapAnims[2][index] = rotate(statue);
      });
    }
  },
  mounted() {
    this.animateStatues();
  }
};
</script>

<style scoped>
.statue-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 10vh;
  margin: auto; /* as a flex child, to make it center in the available space */
}
.statue {
  height: 35vw;
  z-index: 6;
}
/* md breakpoint : 2 statues */
@media (max-width: 768px) {
  .statue {
    height: 45vw;
  }
}
/* sm breakpoint : 1 statue */
@media (max-width: 576px) {
  .statue {
    height: 75vw;
  }
}
</style>
