<template>
  <div class="wrapper">
    <div class="item title">
      <span>CE SITE EST RÉSERVÉ</span>
      <br />
      <span>AUX PERSONNES MAJEURES.</span>
    </div>
    <div class="item subtitle">POURQUOI ?</div>
    <div class="item text col-8 col-lg-6">
      <!-- eslint-disable-next-line prettier/prettier -->
      La loi entend protéger les mineurs de l’incitation à la consommation d’alcool. Outre les mesures de restrictions de la publicité destinées à les protéger, la loi prévoit plusieurs mesures destinées à limiter la possibilité pour les mineurs d‘accéder à l’alcool. Il est interdit de vendre ou d’offrir à titre gratuit dans les lieux publics de l’alcool à des mineurs de moins de 18 ans. Il est également interdit de recevoir dans les débits de boissons alcooliques des mineurs de moins de seize ans qui ne sont pas accompagnés de l’un de leurs parents ou d’un majeur responsable. Le non-respect de ces interdictions est pénalement sanctionné.
    </div>
    <div class="item subtext">
      (article L3353-4 du code de la santé publique)
    </div>
    <div class="item buttons col-8 col-lg-6">
      <button class="button button1">J'AI — DE 18 ANS</button>
      <button class="button button2" @click="allowAccess">
        J'AI + DE 18 ANS
      </button>
    </div>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  name: "AgeCheck",
  methods: {
    allowAccess() {
      VueCookies.set("asgard_age_check", "allowed", 0);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
/* MAIN */
.wrapper {
  position: relative;
  height: calc(100vh - 80px);
  top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item {
  text-align: center;
}
/* ELEMENTS */
.title {
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  line-height: 0.9em;
  flex-grow: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* wide screens */
@media (min-aspect-ratio: 12/10) {
  .title {
    font-size: 12vh;
  }
}

/* tall screens */
@media (max-aspect-ratio: 12/10) {
  .title {
    font-size: 10vw;
  }
}
.subtitle {
  font-size: 1.2rem;
}
.text {
  font-size: 0.7rem;
}
.subtext {
  font-size: 0.5rem;
}
.subtitle,
.text,
.subtext,
.buttons {
  flex-grow: 0.06;
}

/* BUTTONS */
.buttons {
  display: flex;
}
.button {
  flex-grow: 1;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  border-style: solid;
  border-radius: 4px;
  border-width: 3px;
}
.button:hover {
  background: #fff;
  color: #000;
}
.button:after {
  content: "";
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}
.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
.button:focus {
  outline: 0;
}
.button1 {
  background-color: inherit;
  box-shadow: 0 5px 15px #6d4a00;
  border-color: #ffee00;
}
.button2 {
  background-color: inherit;
  box-shadow: 0 5px 15px #004472;
  border-color: #009eff;
}
.button1:hover {
  box-shadow: 0px 2px 10px 5px #d4ca3b;
}
.button2:hover {
  box-shadow: 0px 2px 10px 5px #4cbadb;
}
.button1:after {
  background: #d4ca3b;
}
.button2:after {
  background: #4cbadb;
}
</style>
