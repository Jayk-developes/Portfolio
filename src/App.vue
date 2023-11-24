<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";
import "./trail.ts";
import "./scrollIntoView.ts"

document.addEventListener("DOMContentLoaded", () => {
  let wallpaper = document.getElementById("wallpaper")

  onscroll = (event) => {
    const opacity = 1 - (window.pageYOffset / 1000)
    const scale = 1 + (window.pageYOffset / 5000)
    if (opacity <= 0) {
      wallpaper.style.display = "none"
    }
    else {
      wallpaper.style.display = "flex"
      wallpaper.style.opacity = opacity.toString()
      wallpaper.style.transform = "scale(" + scale.toString() + ")"
    }
  }


})
</script>

<template>
  <span style="width: 1px; height: 1px; background-color: transparent" id="veryTop"></span>
  <img src="./media/mountain.gif" alt="wallpaper" class="wallpaper" id="wallpaper">
  <div class="home_grid">
    <div><Navbar /></div>
    <div><Content /></div>
   <!-- <div><img src="./media/Joshua_Koch.jdpg" class="square fixed_img"></div> -->
  </div>
</template>

<style scoped>

</style>
