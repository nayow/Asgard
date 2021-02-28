<template>
  <div class="wrapper">
    <div class="row justify-content-center">
      <div class="text-center">CONTACT</div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div id="subtext" class="text-center">
        COLLABORATIONS, DISTRIBUTION, QUESTIONS
        <br />
        NOUS VOUS REPONDRONS
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-sm-5 col-md-3 text-center">
        <span>TEL</span>
        <span>06 77 88 99 66</span>
      </div>
      <div class="col-sm-5 col-md-3 text-center">MAIL</div>
      <div class="col-5 col-md-3 text-center">RESEAUX SOCIAUX</div>
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
.row:nth-child(1) {
  margin-bottom: -0.2em;
}

.row:nth-child(2),
.row:nth-child(3) {
  padding: 0.3em;
}

/* wide screens */
@media (min-aspect-ratio: 12/10) {
  .row:nth-child(1) {
    font-size: 50vh;
  }
  .wrapper {
    position: relative;
    top: -10vh;
  }
}

/* square-ish screens */
@media (min-aspect-ratio: 1/1) and (max-aspect-ratio: 12/10) {
  .row:nth-child(1) {
    font-size: 35vw;
  }
  .wrapper {
    position: relative;
    top: 0vh;
  }
}

/* tall screens */
@media (max-aspect-ratio: 1/1) {
  .row:nth-child(1) {
    font-size: 35vw;
  }
  .wrapper {
    position: relative;
    top: 5vh;
  }
}
</style>
