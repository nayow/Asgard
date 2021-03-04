<template>
  <!-- eslint-disable-next-line prettier/prettier -->
  <div id="text__wrapper" class="d-flex justify-content-center align-items-center">
    <span id="text">
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
#text__wrapper {
  height: 100%;
}

#text {
  padding-bottom: 0.25em; /* to center text in viewport, relatively to current font-size */
}

@media (min-aspect-ratio: 12/10) {
  #text {
    font-size: 50vh;
  }
}

@media (max-aspect-ratio: 12/10) {
  #text {
    font-size: 35vw;
  }
}
</style>
