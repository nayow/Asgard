<template>
  <img ref="sphere" class="sphere" src="@/assets/sphere.png" />
  <base-title color="green">CONTACTEZ-NOUS</base-title>
  <div class="wrapper">
    <div class="item contact-title">
      CONTACT
    </div>
    <div class="item subtitle col-8">
      COLLABORATIONS, DISTRIBUTION, QUESTIONS, NOUS VOUS REPONDRONS
    </div>
    <div class="row infos">
      <div class="col col-md-4 col-sm-4 pb-3">
        <span class="info-title glow--blue">TEL</span>
        <br />
        <span class="info-content"
          ><a href="tel:0650876003">0650876003</a></span
        >
      </div>
      <div class="col col-md-4 col-sm-4 pb-3">
        <span class="info-title glow--yellow">MAIL</span>
        <br />
        <span class="info-content"
          ><a href="mailto:hello@asgard.cool">HELLO@ASGARD.COOL</a></span
        >
      </div>
      <div class="col col-md-4 col-sm-8">
        <span class="info-title glow--red">RESEAUX SOCIAUX</span>
        <br />
        <span class="info-content"
          ><a href="https://instagram.com/asgard_drink/">@ASGARD_DRINK</a></span
        >
      </div>
    </div>
    <div class="item bottom-line">
      Conditions générales de vente / Mentions légales / Utilisation des cookies
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle.vue";
import { gsap } from "gsap";
export default {
  name: "Contact",
  components: {
    BaseTitle
  },
  methods: {
    animateSphere() {
      // vars
      const sphereWidth = this.$refs.sphere.clientWidth;
      const maxX = window.innerWidth - sphereWidth;
      const maxY = window.innerHeight - sphereWidth;
      const wrapX = gsap.utils.wrapYoyo(0, maxX);
      const wrapY = gsap.utils.wrapYoyo(0, maxY);
      const randomX = random(0, maxX);
      const randomY = random(0, maxY);
      const randomTime = random(10, 20);
      const randomTime2 = random(5, 10);
      const randomAngle = random(-180, 180);

      // functions
      function moveX(target, direction) {
        gsap.to(target, {
          x: randomX(),
          ease: "power3.easeInOut",
          duration: randomTime(),
          modifiers: (x, y) => {
            wrapX(parseFloat(x)) + "px";
            wrapY(parseFloat(y)) + "px";
          },
          onComplete: moveX,
          onCompleteParams: [target, direction]
        });
      }
      function moveY(target, direction) {
        gsap.to(target, {
          y: randomY(),
          ease: "power3.easeInOut",
          duration: randomTime(),
          modifiers: (x, y) => {
            wrapY(parseFloat(y)) + "px";
            wrapX(parseFloat(x)) + "px";
          },
          onComplete: moveY,
          onCompleteParams: [target, direction]
        });
      }
      function rotate(target, direction) {
        gsap.to(target, {
          rotation: randomAngle(direction),
          ease: "Sine.easeInOut",
          duration: randomTime2(),
          onComplete: rotate,
          onCompleteParams: [target, direction * -1]
        });
      }
      function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
      }

      // init
      gsap.set(".sphere", {
        x: 500,
        y: 500
      });
      moveX(".sphere", 1);
      moveY(".sphere", -1);
      rotate(".sphere", 1);
    }
  },
  mounted() {
    // let x = gsap.utils.random(50, 70) + "vw";
    // gsap.to(".sphere", { left: x, bottom: "50vh" });
    this.animateSphere();
  }
};
</script>

<style scoped>
.sphere {
  position: absolute;
  height: 30vh;
  z-index: 9;
}
.wrapper {
  position: relative;
  height: calc(100vh - 80px);
  /* bottom: 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.item {
  text-align: center;
  /* flex-shrink: auto; */
}
.contact-title {
  font-family: "Futhark", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: -0.1em; /* reduce white-space below of 20% font-size */
}
@supports (-moz-appearance: none) {
  .contact-title {
    line-height: 1;
  }
}
@-moz-document url-prefix() {
  .contact-title {
    line-height: 1;
  }
}
/* wide screens */
@media (min-aspect-ratio: 12/10) {
  .contact-title {
    font-size: 45vh;
  }
}
/* tall screens */
@media (max-aspect-ratio: 12/10) {
  .contact-title {
    font-size: 35vw;
  }
}
.subtitle {
  font-size: 1rem;
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
  font-size: 0.6rem;
  color: #707070;
}
.col {
  text-align: center;
}
span {
  line-height: 0.9;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: underline;
}
</style>
