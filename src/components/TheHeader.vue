<template>
  <div id="nav">
    <div class="item">
      <a href="#home"
        ><span class="d-none d-sm-inline">ASGARD </span
        ><span class="d-none d-md-inline">IS A NEW WORLD</span></a
      >
    </div>
    <div v-show="!ageCheckPage" class="item">
      <a href="#histoire" data-menuanchor="histoire">HISTOIRE</a> —
      <a href="#boisson" data-menuanchor="boisson" @click="onNavClick"
        >BOISSON</a
      >
      —
      <a href="#contact" data-menuanchor="contact">CONTACT</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      ageCheckPage: true
    };
  },
  methods: {
    // if drink page is accessed from clicking the menu then we want instant animations (no scroll events)
    onNavClick() {
      this.$emit("onNavClicked", true);
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === "TheContent") {
        this.ageCheckPage = false;
        this.$forceUpdate();
      }
    }
  }
};
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0px;
  height: 40px;
  background-color: whitesmoke;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
  font-family: "Univers LT Std", "Roboto", sans-serif;
  font-size: 1.4rem;
}

.item {
  white-space: nowrap;
}

#nav a {
  text-decoration: none;
  color: inherit;
}

/* dynamically added by fullpage.js */
#nav a.active {
  font-weight: 900;
}

#nav a.div-exact-active {
  color: inherit;
}
</style>
