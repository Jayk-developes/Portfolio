<script setup lang="ts">
import PaperStripes from "../paperStripes.ts";
import RandomArrayIndex from "../assets.ts";
let today = new Date()
let age = today.getMonth() == 8 && today.getDate() < 15 || today.getMonth() < 8 ? today.getFullYear() - 2002: today.getFullYear() -2001;
const personalFacts = [
  {id: "Ich", content: `- Joshua-Daniel Koch <br>- ${age} Jahre alt<br>- Fachinformatiker (Anwendungsentwickler)<br><br><span style="display: block; text-align: center; font-weight: bold">Schwerpunkte<br>Web-Entwicklung</span>- Frontend (Vue.js, TypeScript, HTML, CSS)<br><br>- Backend (Django, SQL, FastAPI, Python, Java)<br><br>- Design (UI/UX, Figma, Blender, Procreate)`},
  {id: "Früher", content: `- Frühes Interesse aber leider ohne Anhaltspunkte<br>- Mein Horizont erweitert in anderen Bereichen (KFZ, Botanik, Architektur)<br><br><span style="display: block; text-align: center; font-weight: bold">Lieber spät als nie!</span><span style="text-align: justify; display: block; hyphens: auto">Auch mit einem verzögerten Start konnte ich mich und andere von meinen Kompetenzen und Fähigkeiten überzeugen!</span>`},
  {id: "Heute", content: `- Seit 2021 Aktiv<br>- Liebe für Design<br>- Liebe für Frontend<br>- Backendbegeistert<br>- Wissbegierig<br><br><span style="display: block; text-align: center; font-weight: bold">Volltreffer</span> In der Entwicklung hat mich jeden Bereich angesprochen. Ich lerne gerne dazu und fächer mich gerne in weiteren Bereichen aus!`},
  {id: "Entwicklung", content: `- Schnelles Verständnis<br>- Exponentielles Lernen<br>- Hoch motiviert<br>- Teamfähig u. Tolerant<br><br><span style="display: block; text-align: center; font-weight: bold">Junior Developer</span>Als Junior-Developer biete ich überdurchschnittliche Kompetenzen und kann Aufgaben und Probleme oft schneller und gewissenhafter lösen als vergleichbare Junior-Developer.`}
]

const pinColors = [
    "radial-gradient(circle, rgba(30, 27, 78, 1) 0%, rgba(60, 57, 107, 1) 40%, rgba(2, 0, 36, 1) 40%, rgba(40, 38, 90, 1) 56%, rgba(66, 64, 127, 1) 72%, rgba(32, 30, 78, 1) 88%, rgba(2, 0, 36, 1) 100%);",
    "radial-gradient(circle, rgba(78,27,27,1) 0%, rgba(107,57,57,1) 40%, rgba(36,0,0,1) 40%, rgba(127,64,64,1) 72%, rgba(78,30,30,1) 88%, rgba(36,0,0,1) 100%);",
    "radial-gradient(circle, rgba(27,78,28,1) 0%, rgba(59,107,57,1) 40%, rgba(0,36,0,1) 40%, rgba(66,127,64,1) 72%, rgba(33,78,30,1) 88%, rgba(4,36,0,1) 100%);",
    "radial-gradient(circle, rgba(78,27,76,1) 0%, rgba(106,57,107,1) 40%, rgba(35,0,36,1) 40%, rgba(124,64,127,1) 72%, rgba(72,30,78,1) 88%, rgba(34,0,36,1) 100%);",
    "radial-gradient(circle, rgba(125,97,43,1) 0%, rgba(158,121,72,1) 40%, rgba(36,22,0,1) 40%, rgba(178,126,73,1) 72%, rgba(94,62,29,1) 88%, rgba(36,17,0,1) 100%);"
]

document.addEventListener("DOMContentLoaded", () => {
  const PersonalLoaded = () => {
    let papers = document.querySelectorAll(".content_paper")
    let pins = document.querySelectorAll(".paper_pin")


    papers.forEach((paper) => {
      paper.style.height = paper.offsetWidth * 1.6 + "px"
      let rotation = (Math.random() * 8) - 4
      paper.style.rotate = rotation + "deg"

    })

    let prevColor: int;

    pins.forEach((pin) => {
      let newColor = RandomArrayIndex(prevColor, pinColors.length)
      pin.style.background = pinColors[newColor]
      prevColor = newColor
    })
  }

    PersonalLoaded()
  window.addEventListener("resize", () => {
    PersonalLoaded()
  })
})

</script>

<template>
  <div class="clip-text clip-text_one" id="personal">Persönliches</div>
  <div style="margin-top: 3rem;" class="flex_container">
    <div class="content">
      <div class="content_paper" id="content_paper" v-for="fact in personalFacts">
        <div class="paper_pin"></div>
<!--        <p v-for="stripe in PaperStripes" class="stripe">{{stripe}}</p>-->
        <div id="content">
          <p id="personal_header">{{fact.id}}<br></p>
          <div v-html="fact.content" id="v-html_content"></div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>