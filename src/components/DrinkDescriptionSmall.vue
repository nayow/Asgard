<template>
  <div>
    {{ title }}
    <span class="line"></span>
    {{ description }}
  </div>
</template>

<script>
export default {
  name: "DrinkDescriptionSmall",
  props: ["title", "description"]
};
</script>

<style scoped>
.line {
  width: 100%;
  height: 3px;
  position: relative;
  display: inline-block;
  background-color: whitesmoke;
}
</style>
