<template>
  <div>
    <span class="line"></span>
    {{ textContent.split(" ")[0] }}
    <br />
    {{ textContent.split(" ")[1] }}
  </div>
</template>

<script>
export default {
  name: "DrinkDescriptionBig",
  props: ["textContent"]
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
