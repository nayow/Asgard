<template>
  <hr class="above" />
  <span :key="word" v-for="word in computedtextContent">
    {{ word }}<br />
  </span>
</template>

<script>
export default {
  name: "DrinkDescriptionBig",
  props: ["textContent", "device"],
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
/* md breakpoint */
@media (max-width: 768px) {
  div {
    font-size: 0.9rem;
  }
}
/* sm breakpoint */
@media (max-width: 576px) {
  div {
    font-size: 0.7rem;
  }
}
span {
  letter-spacing: unset;
}
hr.above {
  border: 2px solid whitesmoke;
  opacity: 1;
  margin-top: 0;
  margin-bottom: 1rem;
}
hr.below {
  border: 2px solid whitesmoke;
  opacity: 1;
  margin-top: 1rem;
  margin-bottom: 0;
}
</style>
