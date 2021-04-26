<template>
  <img ref="sphere" class="sphere" src="@/assets/sphere.png" />
  <base-title color="green">CONTACTEZ-NOUS</base-title>
  <div class="wrapper">
    <div class="item contact-title">
      CONTACT
    </div>
    <div class="item subtitle col-10 col-sm-8 d-none d-sm-block">
      COLLABORATIONS, DISTRIBUTION, QUESTIONS, NOUS VOUS REPONDRONS
    </div>
    <div class="row infos">
      <div class="col col-sm-4 pb-3">
        <span class="info-title glow--blue">TEL</span>
        <br />
        <span class="info-content"
          ><a href="tel:0650876003">0650876003</a></span
        >
      </div>
      <div class="col col-sm-4 pb-3">
        <span class="info-title glow--yellow">MAIL</span>
        <br />
        <span class="info-content"
          ><a href="mailto:hello@asgard.cool">HELLO@ASGARD.COOL</a></span
        >
      </div>
      <div class="col col-sm-4">
        <span class="info-title glow--red">RESEAUX SOCIAUX</span>
        <br />
        <span class="info-content"
          ><a href="https://instagram.com/asgard_drink/">@ASGARD_DRINK</a></span
        >
      </div>
    </div>
  </div>
  <div class="item bottom-line">
    <div class="d-inline-block">Conditions générales de vente /&nbsp;</div>
    <div class="d-inline-block">Mentions légales /&nbsp;</div>
    <div class="d-inline-block">Utilisation des cookies</div>
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
  data() {
    return {
      gsapAnims: [],
      maxX: 1000, // random init
      maxY: 1000
    };
  },
  methods: {
    animateSphere() {
      // vars

      const wrapX = gsap.utils.wrapYoyo(0, this.maxX);
      const wrapY = gsap.utils.wrapYoyo(0, this.maxY);
      const randomX = gsap.utils.random(0, this.maxX, true);
      const randomY = gsap.utils.random(0, this.maxY, true);
      const randomTime = gsap.utils.random(5, 10, true);
      const randomTime2 = gsap.utils.random(5, 10, true);
      const randomAngle = gsap.utils.random(-180, 180, true);

      // functions
      function moveX(target) {
        // anims are (re)saved at the same respective index everytime they restart, 'pushing' them instead would be infinite
        return gsap.to(target, {
          x: randomX(),
          ease: "sine.inOut",
          duration: 7,
          modifiers: (x, y) => {
            wrapX(parseFloat(x)) + "px";
            wrapY(parseFloat(y)) + "px";
          },
          onComplete: moveX,
          onCompleteParams: [target]
        });
      }
      function moveY(target) {
        return gsap.to(target, {
          y: randomY(),
          ease: "sine.inOut",
          duration: 8,
          modifiers: (x, y) => {
            wrapX(parseFloat(x)) + "px";
            wrapY(parseFloat(y)) + "px";
          },
          onComplete: moveY,
          onCompleteParams: [target]
        });
      }
      function rotate(target, direction = 1) {
        return gsap.to(target, {
          rotation: randomAngle() * direction,
          ease: "sine.inOut",
          duration: 9,
          onComplete: rotate,
          onCompleteParams: [target, direction * -1]
        });
      }

      // init
      gsap.set(".sphere", {
        x: 100,
        y: 100
      });

      // save gsap anims for this component
      // this.gsapAnims[0] = moveX(".sphere");
      // this.gsapAnims[1] = moveY(".sphere");
      // this.gsapAnims[2] = rotate(".sphere");
      moveX(".sphere");
      moveY(".sphere");
      rotate(".sphere");
    }
  },
  mounted() {
    const sphereWidth = this.$refs.sphere.clientWidth;
    this.maxX = window.innerWidth - sphereWidth;
    this.maxY = window.innerHeight - sphereWidth;
    this.animateSphere();
  }
};
</script>

<style scoped>
.sphere {
  position: absolute;
  will-change: transform;
  height: 30vh;
  z-index: 10;
}
.wrapper {
  height: 100%;
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
  margin-bottom: -2rem; /* reduce white-space below of 20% font-size */
  line-height: normal;
  user-select: none; /* requires prefix */
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
  font-size: 0.7em;
}
.bottom-line {
  position: absolute;
  width: 100%;
  bottom: 50px;
  font-size: 0.5rem;
  color: #707070;
}
.col {
  text-align: center;
}
span {
  line-height: 0.9;
  white-space: nowrap;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: underline;
}

/* md breakpoint */
@media (max-width: 768px) {
  .info-content {
    font-size: 1.5rem;
  }
  .subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
  }
  .sphere {
    height: 10vh;
  }
}

/* sm breakpoint */
@media (max-width: 576px) {
  .info-content {
    font-size: 1.5rem;
  }
  .subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}
</style>
