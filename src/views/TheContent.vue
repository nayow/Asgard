<template>
  <div id="fullpage">
    <div class="section">
      <intro ref="home"></intro>
    </div>
    <!-- <div class="section">
      <history ref="histoire"></history>
    </div>
    <div class="section">
      <drink ref="boisson"></drink>
    </div> -->
    <div class="section">
      <contact ref="contact"></contact>
    </div>
  </div>
</template>

<script>
import fullpage from "fullpage.js";
import Intro from "@/components/Intro.vue";
// import History from "@/components/History.vue";
// import Drink from "@/components/Drink.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "TheContent",
  components: {
    Intro,
    // History,
    // Drink,
    Contact
  },
  data() {
    return {
      fullpageObj: ""
    };
  },
  mounted() {
    if (!this.fullpageObj) {
      console.log("OKKKKKKKKKKKKKKK");
      this.fullpageObj = new fullpage("#fullpage", {
        licenseKey: "abc",
        // anchors: ["home", "histoire", "boisson", "contact"],
        anchors: ["home", "contact"],
        scrollingSpeed: 1200,
        menu: "#nav",
        fixedElements: "#nav, #footer",
        paddingTop: "40px",
        paddingBottom: "40px",
        normalScrollElements: "#legal-mentions, #general-conditions",
        // TODO TRY WITH GSAP TICKER ADD ()
        // onLeave: (orig, desti, dir) => {
        //   (async function playVisibleAnims() {
        //     that.$refs[desti.anchor].gsapAnims.forEach(anim => {
        //       anim.play();
        //     });
        //   })();
        // },
        onLeave: (orig, desti, dir) => {
          // prevent scroll if the mask is being dragged
          if (orig.anchor == "home" && this.$refs.home.isDragging) return false;
        },
        afterLoad: (orig, desti, dir) => {
          // pause all hidden anims
          // (async function pauseInvisibleAnims() {
          //   let anchors = ["home", "histoire", "boisson", "contact"];
          //   anchors.splice(desti.index, 1); // only keep invisible sections
          //   anchors.forEach(invisibleSection => {
          //     that.$refs[invisibleSection].gsapAnims.forEach(anim => {
          //       anim.pause();
          //     });
          //   });
          // })();

          // drink section from scroll
          if (
            desti.anchor == "boisson" &&
            dir == "down" &&
            this.$refs.boisson.scrollComplete == false
          ) {
            window.fullpage_api.setAllowScrolling(false, "down");
            window.fullpage_api.setKeyboardScrolling(false, "down");
            this.$refs.boisson.startAnimations();
          }
          if (desti.anchor == "histoire" && dir == "up") {
            window.fullpage_api.setAllowScrolling(true, "down");
            window.fullpage_api.setKeyboardScrolling(true, "down");
          }
        }
      });
    }
  }
};
</script>

<style scoped>
#fullpage {
  overflow: hidden;
  will-change: transform;
}
</style>
