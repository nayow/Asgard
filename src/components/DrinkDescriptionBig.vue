<template>
  <div>
    <hr />
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
div {
  margin-bottom: 1rem;
}
span {
  letter-spacing: unset;
}
hr {
  border: 2px solid whitesmoke;
  opacity: 1;
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
