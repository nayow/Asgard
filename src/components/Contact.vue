<template>
  <div class="wrapper">
    <div class="row justify-content-center">
      <span class="text-center">CONTACT</span>
    </div>
    <div class="row align-items-center justify-content-center">
      <div id="subtext" class="text-center">
        COLLABORATIONS, DISTRIBUTION, QUESTIONS
        <br />
        NOUS VOUS REPONDRONS
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-sm-5 col-md-3 text-center">TEL</div>
      <div class="col-sm-5 col-md-3 text-center">MAIL</div>
      <div class="col-5 col-md-3 text-center">RESEAUX SOCIAUX</div>
    </div>
  </div>
</template>

<script>
import DrinkBackground from "./DrinkBackground.vue";
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
  height: calc(100vh - 80px);
}
/* wide screens */
@media (min-aspect-ratio: 1.2/1) {
  .wrapper .row:nth-child(1) {
    font-size: 50vh;
    position: relative;
    bottom: 15%;
  }
}
/* high screens */
@media (max-aspect-ratio: 1.2/1) {
  .wrapper .row:nth-child(1) {
    font-size: 35vw;
    position: relative;
    top: 6%;
    /* margin-top: 0.5em; */
  }
}
.wrapper .row:nth-child(1) {
  /* margin-top: -8vh; */
}
.wrapper .row:nth-child(2) {
  /* margin-top: -8vh; */
}
.wrapper .row:nth-child(3) {
  /* margin-top: -8vh; */
}
#contact {
}
</style>
