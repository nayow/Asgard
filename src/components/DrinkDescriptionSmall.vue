<template>
  <div v-if="Array.isArray(description)">
    <span>{{ title.toUpperCase() }}</span>
    <hr />
    <span v-for="item in description" :key="item" class="description">
      {{ item }} <br />
    </span>
  </div>
  <div v-else>
    <span>{{ title.toUpperCase() }}</span>
    <hr />
    <span>{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: "DrinkDescriptionSmall",
  props: ["title", "description", "type"]
};
</script>

<style scoped>
div {
  margin-top: 1rem;
  font-size: 0.7rem;
}
hr {
  border: 2px solid rgba(255, 255, 255, 0.99);
  opacity: 1;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
}
</style>
