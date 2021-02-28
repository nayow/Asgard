<template>
  <div id="wrapper" class="row align-items-center justify-content-center">
    <span id="bg-text" class="text-center">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "DrinkBackground"
};
</script>

<style scoped>
#wrapper {
  height: calc(100vh - 80px);
}

#bg-text {
  padding-bottom: 0.25em; /* to center text in viewport, relatively to current font-size */
}

@media (min-aspect-ratio: 12/10) {
  #bg-text {
    font-size: 50vh;
  }
}

@media (max-aspect-ratio: 12/10) {
  #bg-text {
    font-size: 35vw;
  }
}
</style>
