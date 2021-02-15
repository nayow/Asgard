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
body {
  margin: 0px;
  background-color: black;
  font-size: 24px; /* new default rem */
  letter-spacing: 0.1rem;
}

#app {
  font-family: Futhark, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
}
</style>
