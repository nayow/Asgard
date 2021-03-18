<template>
  <div class="wrapper">
    <div class="item title">
      CONTACT
    </div>
    <div class="item subtitle col-8">
      COLLABORATIONS, DISTRIBUTION, QUESTIONS, NOUS VOUS REPONDRONS
    </div>
    <div class="row infos">
      <div class="col col-md-4 col-sm-4 pb-3">
        <span class="info-title glow--blue">TEL</span>
        <br />
        <span class="info-content">0677889966</span>
      </div>
      <div class="col col-md-4 col-sm-4 pb-3">
        <span class="info-title glow--yellow">MAIL</span>
        <br />
        <span class="info-content">HELLO@ASGARD.COOL</span>
      </div>
      <div class="col col-md-4 col-sm-8">
        <span class="info-title glow--red">RESEAUX SOCIAUX</span>
        <br />
        <span class="info-content">@ASGARD_DRINK</span>
      </div>
    </div>
    <div class="item bottom-line">
      Conditions générales de vente / Mentions légales / Utilisation des cookies
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  data() {
    return {
      style: {}
    };
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: calc(100vh - 40px);
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.item {
  text-align: center;
  flex-shrink: auto;
}
.title {
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  line-height: 1.2;
}
/* wide screens */
@media (min-aspect-ratio: 12/10) {
  .title {
    font-size: 50vh;
  }
}
/* tall screens */
@media (max-aspect-ratio: 12/10) {
  .title {
    font-size: 35vw;
  }
}
.subtitle {
  font-size: 1.2rem;
  line-height: 1.2;
}
.infos {
  width: 80vw;
  justify-content: space-evenly;
}
.info-content {
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 2rem;
}
.info-title {
  font-size: 0.8em;
}
.bottom-line {
  font-size: 0.7rem;
}
.col {
  text-align: center;
}
span {
  line-height: 0.9;
}
</style>
