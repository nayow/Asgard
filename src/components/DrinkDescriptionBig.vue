<template>
  <hr class="d-none d-sm-block above" />
  <span :key="word" v-for="word in computedtextContent">
    {{ word }}<br />
  </span>
  <hr class="d-sm-none below" />
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
/** USELESS? */
/* md breakpoint */
/* @media (max-width: 768px) {
  div {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
} */
/* sm breakpoint */
/* @media (max-width: 576px) {
  div {
    margin-top: 1rem;
    font-size: 0.7rem;
  }
} */
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
  margin: 0.5rem 0;
}
</style>
