<template>
  <div class="container-fluid" id="nav">
    <div class="row g-0">
      <div class="col">
        Asgard is a new world
      </div>
      <div class="col" id="nav-links">
        <router-link to="#">Histoire</router-link> —
        <router-link to="#">Produits</router-link> —
        <router-link to="#">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style>
#nav {
  padding: 0.6rem;
  background-color: whitesmoke;
  font-weight: bold;
  color: black;
}

#nav-links {
  text-align: right;
}

#nav a {
  text-decoration: none;
  color: inherit;
}

#nav a.router-link-exact-active {
  color: inherit;
}
</style>
