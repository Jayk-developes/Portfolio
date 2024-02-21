<script setup lang="ts">

import RandomArrayIndex from "../assets.ts";

const polaroidColors = [
    "#FFBBBB",
    "#BBFFBB",
    "#BBBBFF",
    "#FFFFBB",
    "#FFBBFF",
    "#BBFFFF"
]

document.addEventListener("DOMContentLoaded", () => {

  let polaroids = document.querySelectorAll(".content_polaroid")
  let polaroids_inside = document.querySelectorAll(".content_polaroid_inside")

  let prevColor: int;
  let prevColor2: int;

  polaroids.forEach((polaroid) => {

    polaroid.style.rotate = ((Math.random() * 8) - 4) + "deg"
    polaroid.style.height = (polaroid.clientWidth * 1.15) + "px"
  })

  polaroids_inside.forEach((inside) => {
    let newColor = RandomArrayIndex(prevColor, prevColor2, polaroidColors.length)
    inside.style.backgroundColor = polaroidColors[newColor]
    console.log(newColor)
    prevColor2 = prevColor
    prevColor = newColor
  })
})

const skills = [
  {header: "Frontend", content: "<strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>Fortgeschritten</strong><br>- <strong>Vue.js</strong><br>- <strong>JavaScript / TypeScript</strong>"}
]

</script>

<template>
  <div class="clip-text clip-text_one" id="personal">Skills</div>
  <div style="margin-top: 3rem;" class="flex_container">
    <div class="content">
      <div class="content_polaroid" v-for="skill in skills">
        <div class="paper_pin"></div>
        <div class="content_polaroid_inside ">
          <p>{{skill.header}}</p>
          <p v-html="skill.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>