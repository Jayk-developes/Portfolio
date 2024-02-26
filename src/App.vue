<script setup lang="ts">
import NewNavbar from "./components/NewNavbar.vue";
import Content from "./components/Content.vue";

document.addEventListener("DOMContentLoaded", () => {
  let ArrowDown = document.getElementById("arrowDown")

  ArrowDown.addEventListener("click", () =>  {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth"})
  })

})


</script>

<template>
  <NewNavbar />
  <div class="wrapper">
    <img src="./media/Arrow-down.svg.png" alt="arrowDown" class="arrowDown" id="arrowDown">

    <Content />
  </div>
</template>

<style scoped>

</style>