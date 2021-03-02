<template>
  <div class="d-flex justify-content-center overflow-hidden">
    <img class="side" src="@/assets/statue.png" />
    <img class="middle" src="@/assets/statue.png" />
    <img class="side" src="@/assets/statue.png" />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export default {
  name: "HistoryBackground",
  mounted() {
    Draggable.create(".middle", {
      type: "rotation",
      onDrag: function() {
        gsap.to(".side", {
          rotation: 240 + this.rotation * -1,
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

img.side {
  transform: rotate(240deg);
}
</style>
