<template>
  <div class="wrapper">
    <base-title color="blue">L'HISTOIRE</base-title>
    <div class="row justify-content-center">
      <div class="col-xs-12 col-md-6 text-center">
        <p>
          Il existe un royaume,
          <br />
          bien au dessus du nôtre, nommé Asgard.
        </p>
        <p>
          Royaume où règnent des déesses nordiques aux pouvoirs innombrables.
          Dans ce lieu, des clans se sont formés autour de chacunes des déesses.
          Mais alors que ces clans se donnaient à une guerre éternelle, un
          portail s’est ouvert vers notre monde.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle.vue";
export default {
  name: "History",
  components: {
    BaseTitle
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: calc(100vh - 80px);
}

.row:last-of-type {
  position: absolute;
  bottom: 3vh;
}

p:last-of-type {
  font-size: 0.7em;
}
</style>
