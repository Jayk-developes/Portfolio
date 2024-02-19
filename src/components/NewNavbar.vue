<script setup lang="ts">
import {ref} from "vue";

const Categories = ["Home", "Persönliches", "Lebenslauf", "Skills", "Projekte", "Kontakt"]

const navbar_open_status = ref(false)

const openNavbar = () => {
  if (window.screen.width <= 600) {
    let opener = document.getElementById("navbar_opener") as HTMLElement
    let navbar_container = document.getElementById("navbar_container") as HTMLElement
    navbar_container.style.marginLeft = navbar_open_status.value ? "-18.5rem" : "-6.5rem"
    navbar_container.classList.toggle("closing_color", navbar_open_status.value)

    opener.classList.toggle("rotate90", !navbar_open_status.value)

    navbar_open_status.value = !navbar_open_status.value
  }
}

document.addEventListener("click", () => {
  if (navbar_open_status.value) {
    openNavbar()
  }
})


</script>

<template>
  <div class="navbar_fixed closing_color" id="navbar_container" @click.stop="openNavbar">
    <p id="navbar_opener">&#8801;</p>
    <ul class="navbar_items" id="navbar_items" v-for="category in Categories">
      <li :id="category + '_nav'">{{ category }}</li>


    </ul>
  </div>
</template>

<style scoped>

.closing_color {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

</style>