<script setup lang="ts">

import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";

document.addEventListener("DOMContentLoaded", () => {
  const wallpaper = document.getElementById("wallpaper")


})
</script>

<template>
  <img src="./media/mountain.gif" alt="wallpaper" class="wallpaper" id="wallpaper">
  <div class="home_grid">
    <div><Navbar /></div>
    <div><Content /></div>
    <div><img src="./media/Joshua_Koch.jpg" class="square fixed_img"></div>
  </div>
</template>

<style scoped>

</style>
