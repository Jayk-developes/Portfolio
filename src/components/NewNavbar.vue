<script setup lang="ts">
import {ref} from "vue";
import RandomArrayIndex from "../assets.ts";

const Categories = ["Home", "Persönliches", "Lebenslauf", "Skills", "Projekte", "Kontakt"]

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
      rectangle.innerText = Categories[index]
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
      triangle.innerText = Categories[index]
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
})


</script>

<template>
  <div class="navbar_fixed" id="navbar_container" @click.stop="openNavbar">
    <p id="navbar_opener">&#8801;</p>
          <div class="stick_note note_2" v-for="item in Categories">
        <div :id="item + '_1'"><span>_</span></div>
        <div :id="item + '_2'"><span>_</span></div>
      </div>
<!--    <ul class="navbar_items" id="navbar_items" v-for="category in Categories">-->
<!--      <li :id="category + '_nav'">{{ category }}</li>-->


<!--    </ul>-->
  </div>
</template>

<style scoped>

.closing_color {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

</style>