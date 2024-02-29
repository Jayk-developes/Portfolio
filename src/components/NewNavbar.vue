<script setup lang="ts">
import {ref} from "vue";
import RandomArrayIndex from "../assets.ts";

const Categories = ["home", "personal", "cv", "skills", "projects","open_for", "contact"]
const Categories_ger = ["Home", "Persönliches", "Lebenslauf","Skills", "Projekte", "Offen Für", "Kontakt"]
const noteColors = [
  "#FFBBBB",
  "#BBFFBB",
  "#BBBBFF",
  "#FFFFBB",
  "#FFBBFF",
  "#BBFFFF"
]

const navbar_open_status = ref(false)

document.addEventListener("DOMContentLoaded", () => {
  let notes = document.querySelectorAll(".note_2")
  let container = document.getElementById("navbar_container") as HTMLElement
  let i = 0
  let index = 0
  let prevColor_: int;
  let prevColor2_: int;
  notes.forEach((note) => {
    note.style.rotate = ((Math.random() * 8) - 4) + "deg"


    i = (Math.floor(Math.random() * 2))

    let rectangle = document.getElementById(Categories[index] + "_1") as HTMLElement
    let triangle = document.getElementById(Categories[index] + "_2") as HTMLElement

    let newColor = RandomArrayIndex(prevColor_, prevColor2_, noteColors.length)

    if (i == 0) {
      rectangle.classList.add("rectangle")
      rectangle.style.boxShadow = " -.4rem .5rem .5rem 0 #00000088"
      rectangle.style.backgroundColor = noteColors[newColor]
      rectangle.innerText = Categories_ger[index]
      triangle.classList.add("triangle")
      triangle.classList.add("triangle_left")
      triangle.style.borderLeft = "2.25rem solid" + noteColors[newColor]
    } else {
      rectangle.classList.add("triangle")
      rectangle.classList.add("triangle_right")
      rectangle.style.borderRight = "2.25rem solid" + noteColors[newColor]

      triangle.classList.add("rectangle")
      triangle.style.boxShadow = " .45rem .5rem .5rem 0 #00000088"
      triangle.style.backgroundColor = noteColors[newColor]
      triangle.innerText = Categories_ger[index]
    }

    note.addEventListener("mouseover", () => {
      note.style.filter = 'brightness(70%)';
    })
    note.addEventListener("mouseout", () => {
      note.style.filter = 'brightness(100%)';
    })

    prevColor2_ = prevColor_
    prevColor_ = newColor
    index = index + 1
  })
  container.addEventListener("click", () => {
    if (window.innerWidth <= 1000 && navbar_open_status.value == false) {
      container.style.marginLeft = "0"
    } else if (window.innerWidth <= 1000 && navbar_open_status.value == true) {
      container.style.marginLeft = "-13rem"
    }
    navbar_open_status.value = !navbar_open_status.value
  })
  document.addEventListener("click", () => {
    if (window.innerWidth <= 1000 && navbar_open_status.value == true) {
      navbar_open_status.value = !navbar_open_status.value
      container.style.marginLeft = "-13rem"
      return
    }
  })
})


</script>

<template>
  <div class="navbar_fixed" id="navbar_container" @click.stop="openNavbar">
    <p id="navbar_opener">&#8801;</p>
    <div class="stick_note note_2" :id="item + '_0'" :data-target="'content_' + item" v-for="item in Categories">
      <div :id="item + '_1'"><span>_</span></div>
      <div :id="item + '_2'"><span>_</span></div>
    </div>
  </div>
</template>

<style scoped>

</style>