<template>
  <div class="">
    <img class="side left" src="@/assets/statue2.png" />
    <img class="middle" src="@/assets/statue2.png" />
    <img class="side right" src="@/assets/statue2.png" />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export default {
  name: "HistoryBackground",
  methods: {
    animateStatues() {
      // vars
      const randomX = random(5, 10);
      const randomY = random(5, 10);
      const randomDelay = random(0, 1);
      const randomTime = random(1, 3);
      const randomTime2 = random(2, 4);
      const randomAngle = random(3, 6);
      const tl = gsap.timeline();

      // functions
      function moveX(target, direction, delay) {
        tl.to(target, {
          x: "+=" + randomX(direction),
          ease: "Sine.easeInOut",
          duration: randomTime(),
          delay: delay,
          onComplete: moveX,
          onCompleteParams: [target, direction * -1]
        });
      }
      function moveY(target, direction, delay) {
        tl.to(target, {
          y: "+=" + randomY(direction),
          ease: "Sine.easeInOut",
          duration: randomTime(),
          delay: delay,
          onComplete: moveY,
          onCompleteParams: [target, direction * -1]
        });
      }
      function rotate(target, direction, delay) {
        tl.to(target, {
          rotation: "+=" + randomAngle(direction),
          // delay: randomDelay(),
          ease: "Sine.easeInOut",
          duration: randomTime2(),
          delay: delay,
          onComplete: rotate,
          onCompleteParams: [target, direction * -1]
        });
      }
      function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
      }

      // init
      gsap.set("img.left", {
        x: randomX(-1),
        y: randomX(1),
        rotation: "+=" + randomAngle(-1)
      });
      gsap.set("img.middle", {
        x: randomX(-1),
        y: randomX(1),
        rotation: "+=" + randomAngle(1)
      });
      gsap.set("img.right", {
        x: randomX(-1),
        y: randomX(1),
        rotation: "+=" + randomAngle(-1)
      });
      moveX("img.left", 1, 0);
      moveX("img.middle", -1, 0.1);
      moveX("img.right", 1, 0.2);
      moveY("img.left", -1, 0);
      moveY("img.middle", +1, 0.1);
      moveY("img.right", -1, 0.2);
      rotate("img.left", 1, 0);
      rotate("img.middle", -1, 0.2);
      rotate("img.right", 1, 0.1);
    }
  },
  mounted() {
    this.animateStatues();
  }
};
</script>

<style scoped>
div {
  /* position: absolute; */
  display: flex;
  justify-content: center;
  overflow: hidden;
}
img {
  z-index: 9;
  height: 80vh;
  margin-left: 10vw;
  margin-right: 10vw;
}
img.left {
  transform: rotate(150deg);
}
img.middle {
  transform: rotate(70deg);
}
img.right {
  transform: rotate(230deg);
}
</style>
