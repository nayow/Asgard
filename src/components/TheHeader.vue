<template>
  <div id="nav">
    <div class="item">
      <a href="#home">ASGARD IS A NEW WORLD</a>
    </div>
    <div v-show="!ageCheckPage" class="item">
      <a href="#histoire" data-menuanchor="histoire">HISTOIRE</a> —
      <a href="#boisson" data-menuanchor="boisson">BOISSON</a> —
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.item {
  padding: 0.5rem;
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
