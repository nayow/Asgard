<template>
  <div id="nav">
    <router-link to="/">Home</router-link> ——
    <router-link to="/histoire">Histoire</router-link> —
    <router-link to="/produits">Produits</router-link> —
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped>
#nav {
  padding: 0.6rem;
  background-color: whitesmoke;
  text-align: right;
  color: black;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

#nav a.router-link-exact-active {
  color: inherit;
}
</style>
