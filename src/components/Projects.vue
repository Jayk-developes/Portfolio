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

const images = [
    0, 1, 'url("/src/media/Redesign.png")', 3, 4, 5, 6, 7, 8, 9, 10
]

document.addEventListener("DOMContentLoaded", () => {

  let polaroids = document.querySelectorAll(".content_polaroid")
  let polaroids_inside = document.querySelectorAll(".no_real_class_1")

  let prevColor: int;
  let prevColor2: int;

  polaroids.forEach((polaroid) => {

    polaroid.style.rotate = ((Math.random() * 10) - 5) + "deg"
    polaroid.style.height = (polaroid.clientWidth * 1.15) + "px"
  })
  let i = 0
  polaroids_inside.forEach((inside) => {
    let newColor = RandomArrayIndex(prevColor, prevColor2, polaroidColors.length)
    inside.style.backgroundColor = polaroidColors[newColor]
    inside.addEventListener("mouseover", () => {
      inside.style.backgroundImage = images[i]
      console.log(inside.style.backgroundImage, images[i])
      inside.style.backgroundColor = "transparent"
      inside.classList.add("transparent_text")

    })
    inside.addEventListener("mouseout", () => {
      inside.style.backgroundColor = polaroidColors[newColor]
      inside.style.backgroundImage = "None"
      inside.classList.remove("transparent_text")
    })
    // inside.style.backgroundColor = polaroidColors[newColor]
    // console.log(newColor)
    prevColor2 = prevColor
    prevColor = newColor
    i = i+1
  })
})

const projects = [
  {header: "Sensorik-Website", content: "Hier war ich verantwortlich für das <strong>Design</strong> und für die <strong>Erstellung von Schlüsselfunktionen</strong>, die zur Auslesung der Daten genutzt wurde."},
  {header: "comNET Redesign", content: "Ich war einzig und allein verantwortlich für das gesamte Redesign unserer Internen Websites. Es sollte <strong>simple</strong>, aber <strong>Nutzerfreundlich</strong> sein"}
]

</script>

<template>
  <div class="clip-text clip-text_one" id="personal">Projekte</div>
  <div style="margin-top: 3rem;" class="flex_container">
    <div class="content">
      <div class="content_polaroid" id="project_polaroid" v-for="project in projects">
        <div class="paper_pin"></div>
        <div class="content_polaroid_inside no_real_class_1">
          <p>{{project.header}}</p>
          <p v-html="project.content" id="project_content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>