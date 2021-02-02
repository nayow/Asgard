<template>
  <div id="wrap">
    <TheHeader />
    <router-view />
    <div id="push"></div>
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
html,
body,
#app {
  height: 100%;
}

body {
  margin: 0px;
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #009eff;
}

#wrap {
  min-height: 100%;
  margin: 0 auto -2.7rem; /* 2.7rem = footer height = nav height */
  height: auto !important;
  height: 100%;
}

/* Viewport height limit when page turns scrollable */
#push {
  height: 250px;
}
</style>
