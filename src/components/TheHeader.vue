<template>
  <div id="nav">
    <div class="item item-title d-none d-sm-inline">
      <a href="#home"
        ><span class="d-none d-sm-inline">ASGARD </span
        ><span class="d-none d-lg-inline">IS A NEW WORLD</span></a
      >
    </div>
    <div
      class="item item-menu d-inline-flex justify-content-evenly d-sm-inline"
    >
      <a href="#histoire" data-menuanchor="histoire">HISTOIRE</a> —
      <a href="#boisson" data-menuanchor="boisson">BOISSON</a> —
      <a href="#contact" data-menuanchor="contact">CONTACT</a>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
  font-family: "Univers LT Std", "Roboto", sans-serif;
  font-size: 1.4rem;
}

/* sm breakpoint */
@media (max-width: 576px) {
  #nav {
    font-size: unset;
  }
  .item-menu {
    width: 100%;
  }
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
