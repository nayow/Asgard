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
  position: relative;
  font-size: 50vh;
  bottom: 6vh; /* 12% of font-size is the extra space to add at the bottom to have the text vertically centered in the parent (for this font only) */
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
