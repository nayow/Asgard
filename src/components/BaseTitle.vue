<template>
  <div class="base-title__content d-flex w-100 justify-content-center">
    <span :class="glowColor">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseTitle",
  props: ["color"],
  data() {
    return {
      glowColor: `glow--${this.$props.color}`
    };
  }
};
</script>

<style scoped>
.base-title__content {
  position: absolute;
  padding-top: 3em;
}
</style>
