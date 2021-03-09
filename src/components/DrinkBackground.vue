<template>
  <span id="text-content">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "DrinkBackground"
};
</script>

<style scoped>
#text-content {
  padding-bottom: 0.25em; /* to center text in viewport, relatively to current font-size */
  font-size: 50vh;
}
</style>
