<template>
  <div class="container-fluid" id="nav">
    <div class="row g-0">
      <div class="col">
        ASGARD IS A NEW WORLD
      </div>
      <div class="col" id="nav-links">
        <a href="#histoire">HISTOIRE</a> — <a href="#produits">PRODUITS</a> —
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
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

#nav a.div-exact-active {
  color: inherit;
}
</style>
