<script setup lang="ts">
import RandomArrayIndex from "../assets.ts";

const noteColors = [
  "#FFBBBB",
  "#BBFFBB",
  "#BBBBFF",
  "#FFFFBB",
  "#FFBBFF",
  "#BBFFFF"
]


document.addEventListener("DOMContentLoaded", () => {
  let notes = document.querySelectorAll(".stick_note")
  let i = 0
  let index = 0
  let prevColor: int;
  let prevColor2: int;
  notes.forEach((note) => {
    note.style.rotate = ((Math.random() * 8) - 4) + "deg"


    i = (Math.floor(Math.random() * 2))

    let rectangle = document.getElementById(interests[index] + "_1") as HTMLElement
    let triangle = document.getElementById(interests[index] + "_2") as HTMLElement

    let newColor = RandomArrayIndex(prevColor, prevColor2, noteColors.length)

    if (i == 0) {
      rectangle.classList.add("rectangle")
      rectangle.style.boxShadow = " -.4rem .5rem .5rem 0 #00000088"
      rectangle.style.backgroundColor = noteColors[newColor]
      rectangle.innerText = interests[index]
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
      triangle.innerText = interests[index]
    }

    prevColor2 = prevColor
    prevColor = newColor
    index = index + 1
  })
})
const interests = [
  "Frontend Development",
  "Fullstack Development",
  "UI / UX Design",
  "Mockups",
  "Projektmanagement",
  "User-Interfaces",
  "Digital Consulting"
]
</script>

<template>
  <div class="clip-text clip-text_one" id="personal"><span id="connect">Let's Connect!</span><br>Offen für</div>
  <div style="margin-top: 3rem;" class="flex_container">
    <div class="content">
      <div class="stick_note" v-for="item in interests">
        <div :id="item + '_1'"><span>_</span></div>
        <div :id="item + '_2'"><span>_</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>