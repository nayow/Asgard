<template>
  <TheHeader @onNavClicked="setNavClicked" />
  <router-view :navClicked="navClicked" />
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
  },
  data() {
    return {
      navClicked: false
    };
  },
  methods: {
    setNavClicked() {
      this.navClicked = true;
    }
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
  font-family: "Univers LT Std", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
}
</style>
