<script setup lang="ts">
import RandomArrayIndex from "../assets.ts";
import {ref} from "vue";

const polaroidColors = [
    "#FFBBBB",
    "#BBFFBB",
    "#BBBBFF",
    "#FFFFBB",
    "#FFBBFF",
    "#BBFFFF"
]

let project_sensor = ref(false)
let project_redesign = ref(false)
let project_portfolio = ref(false)
let project_mockup = ref(false)
let project_algorithmus = ref(false)

let projectActives = [project_sensor, project_redesign, project_portfolio, project_mockup, project_algorithmus]

document.addEventListener("DOMContentLoaded", () => {

  let polaroids = document.querySelectorAll(".content_polaroid")
  let polaroids_inside = document.querySelectorAll(".no_real_class_1")

  let prevColor: int;
  let prevColor2: int;

  polaroids.forEach((polaroid) => {

    polaroid.style.rotate = ((Math.random() * 10) - 5) + "deg"
    polaroid.style.height = (polaroid.clientWidth * 1.2) + "px"
  })
  let i = 0
  polaroids_inside.forEach((inside) => {
    let newColor = RandomArrayIndex(prevColor, prevColor2, polaroidColors.length)
    // inside.style.backgroundColor = polaroidColors[newColor]
    // console.log(newColor)
    prevColor2 = prevColor
    prevColor = newColor
    i = i + 1
  })

  let notes = document.querySelectorAll(".project_note")
  let index = 0
  let prevColor_: int;
  let prevColor2_: int;
  notes.forEach((note) => {
    note.style.rotate = ((Math.random() * 8) - 4) + "deg"

    let rectangle = document.getElementById(projects[index].header + "_1") as HTMLElement
    let triangle = document.getElementById(projects[index].header + "_2") as HTMLElement

    let newColor = RandomArrayIndex(prevColor_, prevColor2_, polaroidColors.length)
    rectangle.style.backgroundColor = polaroidColors[newColor]
    rectangle.style.boxShadow = " -.2rem .25rem .25rem 0 #00000088"
    triangle.style.borderLeft = "2.25rem solid" + polaroidColors[newColor]

    note.addEventListener("mouseover", () => {
      rectangle.style.filter = "brightness(80%)"
      triangle.style.filter = "brightness(80%)"
    })
    note.addEventListener("mouseout", () => {
      rectangle.style.filter = "brightness(100%)"
      triangle.style.filter = "brightness(100%)"
    })

    prevColor2_ = prevColor_
    prevColor_ = newColor
    index = index + 1
  })

projects.forEach((project, index) => {
    let button = document.getElementById(project.header + "_button");
    if (button) {
      button.addEventListener("click", () => {
        projectActives[index].value = true;
      });
    }
  });
})

const projects = [
  {header: "Sensorik-Website", content: "Hier war ich verantwortlich für das <strong>Design</strong> und für die <strong>Erstellung von Schlüsselfunktionen</strong>, die zur Auslesung der Daten genutzt wurde.<br><br> Beispielsweise hatte ich neben dem Design auch die Aufgabe, <strong>Daten für das Migrieren in die Datenbank</strong> bereitzustellen und diese <strong>Funktionen im Backend</strong> letztendlich auch zu vervollständigen."},
  {header: "comNET Redesign", content: "Ich war einzig und allein verantwortlich für das gesamte Redesign unserer internen Websites. Es sollte <strong>simpel</strong>, aber <strong>nutzerfreundlich</strong> sein! <br><br>Ich habe versucht, das ursprüngliche Design wenig zu verändern. Ich wollte aber die <strong>Nutzung</strong> und die <strong>Darstellung</strong> optimieren."},
  {header: "Portfolio", content: "Richtig! Diese Website ist ebenfalls eines meiner Projekte. In dieser Website stecken viele <strong>viele Stunden an Arbeit</strong> und zeigt wunderbar, was ich kann. <br><br> Diese Website wurde <strong>ausschließlich von mir programmiert</strong>. Hier wurden keine vorgefertigten Templates oder der gleichen verwendet. <strong>Ich präsentiere euch somit stolz diese Website</strong>."},
  {header: "Figma Mock-Up", content: "Auch in Figma habe ich schon einige Erfahrungen machen können. Hier auf der Seite wird mein <strong>Mock-Up von einer To-Do-Website</strong> dargestellt. Dafür habe ich <strong>Funktionalität und Nutzerfreundlichkeit</strong> in den Fokus gestellt."},
  {header: "Quiz - Algorithmus", content: "Für den Algorithmus haben wir als Team ein Front- und Backend angelegt, welches ein Rätzel anhand <strong>eines Bildes analysiert</strong> und die <strong>Datenbank nach möglichen Lösungen</strong> abfragt."},
  {header: "Private Projekte", content: "Ich habe auch zahlreiche private Projekte erstellen können. Unter einigen Übungsprojekten erstellte ich auch Projekte, welche mich privat unterstützen, wie ein Music-Converter.<span style='text-align: center; display: block'><br><strong >Habe ich Ihr Interesse geweckt? Schaut euch gerne meine Profile an!<br><br></strong><strong>Mein öffentliches Github</strong><br><a href='https://github.com/Jayk-developes' id='ancer'>GitHub - Jayk-Developes</a></span> "}
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
        <div class="stick_note note project_note"  :id='project.header + "_button"' v-if="project.header != 'Quiz - Algorithmus' && project.header != 'Private Projekte'">
          <div class="rectangle" :id="project.header + '_1'">Zum Projekt</div>
          <div class="triangle" :id="project.header + '_2'" ></div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="project_sensor" class="show_cert">
    <div class="close_cert" @click="project_sensor = false">&#10005;</div>
    <div class="cert_container">
      <img src="../media/projects/axisAlerting.png" alt="axisAlerting" class="projects">
    </div>
  </div>
  <div v-if="project_redesign" class="show_cert">
    <div class="close_cert" @click="project_redesign = false">&#10005;</div>
    <div class="cert_container">
      <img src="../media/projects/RedesignedCss.png" alt="Redesign" class="projects">
      <img src="../media/projects/RedesignedCss_2.png" alt="Redesign_2" class="projects">
      <img src="../media/projects/RedesignCss_3.png" alt="Redesign_3" class="projects">
    </div>
  </div>
  <div v-if="project_portfolio" class="show_cert">
    <div class="close_cert" @click="project_portfolio = false">&#10005;</div>
    <div class="cert_container">
      <img src="../media/projects/OldPortfolio.png" alt="oldPortfolio" class="projects">
      <img src="../media/projects/OldPortfolio2.png" alt="oldPortfolio2" class="projects">
      <img src="../media/projects/OldPortfolio3.png" alt="oldPortfolio3" class="projects">
      <img src="../media/projects/OldPortfolio4.png" alt="oldPortfolio4" class="projects">
      <img src="../media/projects/NewPortfolio.png" alt="newPortfolio" class="projects">
    </div>
  </div>
  <div v-if="project_mockup" class="show_cert">
    <div class="close_cert" @click="project_mockup = false">&#10005;</div>
    <div class="cert_container">
      <img src="../media/projects/Mockup.gif" alt="MockUp" class="projects">
    </div>
  </div>
  <div v-if="project_algorithmus" class="show_cert">
    <div class="close_cert" @click="project_algorithmus = false">&#10005;</div>
    <div class="cert_container">
      <img src="../media/projects/axisAlerting.png" alt="axisAlerting" class="projects">
    </div>
  </div>
</template>

<style scoped>

</style>