<template>
  <div class="wrapper">
    <base-title color="red">LA BOISSON</base-title>
    <drink-background>HILDR</drink-background>
  </div>
</template>

<script>
import DrinkBackground from "./DrinkBackground.vue";
import BaseTitle from "./BaseTitle.vue";
export default {
  name: "Drink",
  components: {
    DrinkBackground,
    BaseTitle
  }
};
</script>

<style scoped></style>
