<template>
  <div class="row align-items-center slide__wrapper">
    <svg class="slide__svg" height="1em" viewBox="">
      <text x="0" y="0.75em" fill="#009EFF">
        ASGARD
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "History"
};
</script>

<style>
.slide__wrapper {
  height: calc(100vh - 80px);
  margin-top: 40px;
}
.slide__svg {
  font-size: 110vh;
}
/* .slide__content {
  height: 100%;
  position: relative;
}
.slide__content > span {
  height: inherit;
  position: absolute;
  top: calc(-115vh * 0.6 + 100px);
  font-size: 115vh;
} */
</style>
