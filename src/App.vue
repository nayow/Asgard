<template>
  <TheHeader v-show="$route.name !== 'AgeCheck'" />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
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
  /* height: -webkit-fill-available; */
}

body {
  margin: 0px;
  background-color: black;
  /* min-height: 100vh;
  mobile viewport bug fix
  min-height: -webkit-fill-available; */
}

#app {
  font-family: "Univers LT Std", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
}
</style>
