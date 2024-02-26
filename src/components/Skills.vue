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

    polaroid.style.rotate = ((Math.random() * 10) - 5) + "deg"
    polaroid.style.height = (polaroid.clientWidth * 1.15) + "px"
  })

  polaroids_inside.forEach((inside) => {
    console.log(inside.clientWidth)
    inside.style.height = inside.clientWidth + "px"

    let newColor = RandomArrayIndex(prevColor, prevColor2, polaroidColors.length)
    inside.addEventListener("mouseover", () => {
      inside.style.backgroundColor = polaroidColors[newColor]
    })
    inside.addEventListener("mouseout", () => {
      inside.style.backgroundColor = "#070707"
    })
    prevColor2 = prevColor
    prevColor = newColor
  })
})

const skills = [
  {header: "Frontend", content: "<strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>Fortgeschritten</strong><br>- <strong>Vue.js / Node.js</strong><br>- <strong>JavaScript / TypeScript</strong><br>- <strong>HTML / CSS / SASS</strong><br><br><strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>Weitere Kenntnisse</strong><br>- Tailwind und Bootstrap<br> - Django<br>- Markdown<br>- XML"},
  {header: "Backend", content: "<strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>Fortgeschritten</strong><br>- <strong>FastAPI / Django</strong><br>- <strong>Python</strong><br>- <strong>SQL</strong><br>- <strong>Docker / Docker Compose</strong><br><br><strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>Weitere Kenntnisse</strong><br>- Java<br>- SQLAlchemy / Pydantic<br>- Axios"},
  {header: "Design", content: "<strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>Fortgeschritten</strong><br>- <strong>Figma</strong><br> - <strong>Markdown</strong><br>- <strong>Procreate</strong><br>- <strong>Analoges Design</strong><br><br><strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>Weitere Kenntnisse</strong><br>- Blender<br>- Adobe Photoshop<br>"},
  {header: "Software", content: "- <strong>PyCharm Proffesional</strong><br>- <strong>Intellij Ultimate</strong><br>- <strong>Microsoft / Libre Office</strong><br>- <strong>Windows</strong><br>- <strong>Linux (Ubuntu, Debian)</strong><br>- <strong>Jetbrains</strong><br>- <strong>HeidiSQL</strong>"},
  {header: "Projektmanagement", content: "<strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>Vorgehensmodelle</strong><br>- <strong>Scrum</strong><br>- <strong>Kanban</strong><br>- <strong>Wasserfallmethode</strong><br><br><strong style='text-align: center; display: block; margin: -.5rem 0-1rem'>UML-Diagramme</strong><br>- <strong>Klassendiagramm</strong><br>- <strong>Sequenzdiagramm</strong><br>- <strong>Aktivitätsdiagramm</strong><br>- <strong>Use-Case-Diagramm</strong>"}
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