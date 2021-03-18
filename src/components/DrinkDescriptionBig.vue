<template>
  <div>
    <span class="line"></span>
    <span :key="word" v-for="word in computedtextContent">
      {{ word }}<br />
    </span>
  </div>
</template>

<script>
export default {
  name: "DrinkDescriptionBig",
  props: ["textContent"],
  computed: {
    computedtextContent() {
      return this.$props.textContent.split(" ");
    }
  }
};
</script>

<style scoped>
span {
  font-family: Helvetica, sans-serif;
  letter-spacing: unset;
}
.line {
  width: 100%;
  height: 3px;
  position: relative;
  display: inline-block;
  background-color: whitesmoke;
}
</style>
