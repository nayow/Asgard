<template>
  <base-title color="blue">L'HISTOIRE</base-title>
  <div class="flex-container">
    <history-background ref="historyBackground"></history-background>
    <div class="item text col-10 col-md-8 col-lg-6">
      <span>Il existe un royaume,</span>
      <br />
      <span>bien au dessus du nôtre, nommé Asgard.</span>
    </div>
    <div class="item subtext col-10 col-md-8 col-lg-6">
      Royaume où règnent des déesses nordiques aux pouvoirs innombrables. Dans
      ce lieu, des clans se sont formés autour de chacunes des déesses. Mais
      alors que ces clans se donnaient à une guerre éternelle, un portail s’est
      ouvert vers notre monde.
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
  },
  data() {
    return {
      gsapAnims: []
    };
  },
  mounted() {
    this.gsapAnims = this.$refs.historyBackground.gsapAnims.flat();
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding-bottom: 3vh; /* keep some space below */
}

.item {
  text-align: center;
  padding: 0.5rem;
}

.text {
  font-size: 1.2rem;
}

.subtext {
  font-size: 0.8rem;
}
</style>
