<template>
  <TheHeader />
  <div class="container-fluid">
    <router-view />
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
html {
  font-size: 18px; /* new default rem */
}

body {
  margin: 0px;
  background-color: black;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
}
</style>
