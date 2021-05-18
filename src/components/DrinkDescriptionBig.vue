<template>
  <hr class="d-none d-sm-block above" />
  <span v-if="viewportWidth <= 576">{{ computedtextContent }}</span>
  <span v-else :key="word" v-for="word in computedtextContent.split(' ')">
    {{ word }}
  </span>
  <hr class="d-sm-none below" />
</template>

<script>
export default {
  name: "DrinkDescriptionBig",
  props: ["textContent", "device"],
  data() {
    return {
      viewportWidth: 0
    };
  },
  computed: {
    computedtextContent() {
      return this.$props.textContent;
    }
  },
  methods: {
    onResize() {
      window.addEventListener("resize", () => {
        this.$nextTick(() => {
          this.viewportWith = window.innerWidth;
        });
      });
    }
  },
  mounted() {
    this.viewportWith = window.innerWidth;
    this.onResize();
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
