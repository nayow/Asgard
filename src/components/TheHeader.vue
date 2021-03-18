<template>
  <div class="container-fluid" id="nav">
    <div class="row g-0">
      <div class="col">
        <a href="#home">ASGARD IS A NEW WORLD</a>
      </div>
      <div v-show="!ageCheckPage" class="col" id="nav-links">
        <a href="#histoire" data-menuanchor="histoire">HISTOIRE</a> —
        <a href="#boisson" data-menuanchor="boisson">BOISSON</a> —
        <a href="#contact" data-menuanchor="contact">CONTACT</a>
      </div>
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
  z-index: 9;
}

#nav-links {
  text-align: right;
}

#nav a {
  text-decoration: none;
  color: inherit;
}

/* dynamically added by fullpage.js */
#nav a.active {
  background-color: #000;
  color: whitesmoke;
}

#nav a.div-exact-active {
  color: inherit;
}
</style>
