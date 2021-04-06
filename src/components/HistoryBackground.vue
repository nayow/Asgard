<template>
  <div class="statue-container">
    <div class="statue">
      <img class="left" src="@/assets/statue2.png" />
    </div>
    <div class="statue">
      <img class="middle" src="@/assets/statue2.png" />
    </div>
    <div class="statue">
      <img class="right" src="@/assets/statue2.png" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export default {
  name: "HistoryBackground",
  data() {
    return {
      gsapAnims: [[], [], []]
    };
  },
  methods: {
    animateStatues() {
      // vars
      const that = this;
      const randomX = random(1, 10);
      const randomY = random(1, 10);
      const randomDelay = random(0, 1);
      const randomTime = random(3, 5);
      const randomTime2 = random(5, 10);
      const randomAngle = random(-4, 4);

      // functions
      function moveX(target, direction, index) {
        that.gsapAnims[0][index] = gsap.to(target, {
          x: "+=" + randomX(direction),
          ease: "Sine.easeInOut",
          duration: 2,
          onComplete: moveX,
          onCompleteParams: [target, direction * -1]
        });
      }
      function moveY(target, direction, index) {
        that.gsapAnims[1][index] = gsap.to(target, {
          y: "+=" + randomY(direction),
          ease: "Sine.easeInOut",
          duration: 2,
          onComplete: moveY,
          onCompleteParams: [target, direction * -1]
        });
      }
      function rotate(target, direction, index) {
        that.gsapAnims[2][index] = gsap.to(target, {
          rotation: "+=" + randomAngle(direction),
          ease: "Sine.easeInOut",
          duration: 2,
          onComplete: rotate,
          onCompleteParams: [target, direction * -1]
        });
      }
      function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
      }

      // init
      const statues = gsap.utils.toArray(".statue > img");
      statues.forEach((statue, index) => {
        // save gsap anims for this component (three anims per statue)
        moveX(statue, 1, index);
        moveY(statue, -1, index);
        rotate(statue, 1, index);
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
  display: flex;
  justify-content: center;
  overflow: hidden;
}
img {
  z-index: 9;
  height: 80vh;
  margin: 0 10vw;
}
.left {
  transform: rotate(150deg);
}
.middle {
  transform: rotate(70deg);
}
.right {
  transform: rotate(230deg);
}
</style>
