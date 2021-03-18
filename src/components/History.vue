<template>
  <div class="wrapper">
    <base-title color="blue">L'HISTOIRE</base-title>
    <HistoryBackground />
    <div class="flex-container">
      <div class="item text col-8 col-lg-6">
        <span>Il existe un royaume,</span>
        <br />
        <span>bien au dessus du nôtre, nommé Asgard.</span>
      </div>
      <div class="item subtext col-8 col-lg-6">
        Royaume où règnent des déesses nordiques aux pouvoirs innombrables. Dans
        ce lieu, des clans se sont formés autour de chacunes des déesses. Mais
        alors que ces clans se donnaient à une guerre éternelle, un portail
        s’est ouvert vers notre monde.
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle.vue";
import HistoryBackground from "./HistoryBackground.vue";
export default {
  name: "History",
  components: {
    BaseTitle,
    HistoryBackground
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: calc(100vh - 80px);
}

.flex-container {
  position: absolute;
  bottom: 40px;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.item {
  text-align: center;
  padding: 0.5rem;
  line-height: 1.3;
}

.text {
  font-size: 1.2rem;
}

.subtext {
  font-size: 0.8rem;
}

/* .row:last-of-type {
  position: absolute;
  bottom: 3vh;
}

p:last-of-type {
  font-size: 0.7em;
} */
</style>
