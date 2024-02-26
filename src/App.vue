<script setup lang="ts">
import NewNavbar from "./components/NewNavbar.vue";
import Content from "./components/Content.vue";

document.addEventListener("DOMContentLoaded", () => {
  let ArrowDown = document.getElementById("arrowDown")

  ArrowDown.addEventListener("click", () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth"
    })
  })

  let navbar_items = document.querySelectorAll(".note_2")
  navbar_items.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.getAttribute("data-target") == "content_home") {
        window.scroll({top: 0, behavior: "smooth"})
      } else {
        document.getElementById(item.getAttribute("data-target")).scrollIntoView({behavior: "smooth", block: "start"})
      }
    })
  })
})


</script>

<template>
  <NewNavbar/>
  <div class="wrapper">
    <img src="./media/Arrow-down.svg.png" alt="arrowDown" class="arrowDown" id="arrowDown">

    <Content/>
  </div>
</template>

<style scoped>

</style>