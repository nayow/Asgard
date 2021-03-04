<template>
  <div class="d-flex justify-content-center overflow-hidden">
    <img
      class="side left"
      :style="`transform: rotate(${initialAngleLeft}deg)`"
      src="@/assets/statue.png"
    />
    <img class="middle" src="@/assets/statue.png" />
    <img
      class="side right"
      :style="`transform: rotate(${initialAngleRight}deg)`"
      src="@/assets/statue.png"
    />
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
      initialAngleLeft: 230,
      initialAngleRight: 50
    };
  },
  mounted() {
    const thisComponent = this;
    Draggable.create(".middle", {
      type: "rotation",
      onDrag: function() {
        gsap.to(".left", {
          rotation: thisComponent.initialAngleLeft + this.rotation * -1,
          duration: 0
        });
        gsap.to(".right", {
          rotation: thisComponent.initialAngleRight + this.rotation * -1,
          duration: 0
        });
      }
    });
  }
};
</script>

<style scoped>
img {
  z-index: 9;
  height: 80vh;
}

img.middle {
  margin-left: 20vw;
  margin-right: 20vw;
}
</style>
