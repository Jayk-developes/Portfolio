<script setup lang="ts">
import RandomArrayIndex from "../assets.ts";

const postItColors = [
    "#FFBBBB",
    "#BBFFBB",
    "#BBBBFF",
    "#FFFFBB",
    "#FFBBFF",
    "#BBFFFF"
]

const CV = [
  {header: "Allgemein", content: "Name: Joshua-Daniel Koch<br>Geboren am: 15. September 2001<br>Gebiren in: Hannover<br>Familienstand: Ledig<br>Staatsangehörigkeit: Deutsch<span style='display: block; text-align: center; font-weight: bold'>Kontaktdaten</span>- joshua.daniel.koch@gmail.com<br>- +49 176 345 18 116<br>- <a href='https://www.linkedin.com/in/joshua-daniel-koch-517971208/'>LinkedIn - Joshua-Daniel Koch</a><br>- <a href='https://github.com/Jayk-developes'>GitHub - Jayk-Developes</a>"},
  {header: "Schulische Laufbahn", content: "<span style='text-align: center; display: block;'><span style='font-weight: bold'>11.10.2021 - 06.2024</span><br> Multimedia BBS, Hannover<br></brY><br><span style='font-weight: bold'> 08.2018 -07.2020</span><br> IGS Linden, Hannover<br><br> <span style='font-weight: bold'>08.2012 - 06.2018</span> <br>IGS Stöcken, Hannover<br><br><span style='font-weight: bold'> 08.2008 - 07.2012 </span><br>Grundschule Entenfang, Hannover</span>"},
  {header: "Berufspraxis", content: "<span style='text-align: center; display: block;'><span style='font-weight: bold'>11.10.2021 - 06.2024</span><br><span style='white-space: nowrap'>Ausbildung - Anwendungsentwicklung</span><span style='font-size: .5rem; white-space: normal'><br>Frontend, Backend, Design</span><br><br><span style='font-weight: bold'>05.2021 - 10.2021</span><br>Berufsvorbereitung - Wirtschaft<br><br><span style='font-weight: bold'>09.2017 und 08.2016</span><br>Praktika<br>Floristik und Fahrzeuglackeirer"},
  {header: "Interessen", content: "-<strong> Programmieren</strong><br>-<strong> Designen</strong><br><br>- Zeichnen <br>- Musizieren <br>- 3D-Modelieren<br>- Neues lernen"},
  {header: "Sprachen", content: "<span style='display: block; text-align: center; font-weight: bold'>Deutsch</span>- C2, Muttersprache<br><br><span style='display: block; text-align: center; font-weight: bold'>Englisch</span>- C1 in Schrift und Sprache<br><br><span style='display: block; text-align: center; font-weight: bold'>Spanisch</span>- A2, Grundkenntnisse"}
]

document.addEventListener("DOMContentLoaded", () => {

  let postits = document.querySelectorAll(".content_postit")
  let prevColor: int;
  let prevColor2: int;

  postits.forEach((postit) => {
    let newColor = RandomArrayIndex(prevColor, prevColor2, postItColors.length)
    postit.style.rotate = ((Math.random() * 8) - 4) + "deg"
    postit.style.height = postit.clientWidth + "px"
    postit.style.backgroundColor = postItColors[newColor]
    prevColor2 = prevColor
    prevColor = newColor
  })
})

</script>

<template>
  <div class="clip-text clip-text_one" id="personal">Lebenslauf</div>
  <div style="margin-top: 3rem;" class="flex_container">
    <div class="content">
      <div v-for="entry in CV" class="content_postit" id="content_postit">
        <p>{{ entry.header }}</p>
        <p v-html="entry.content"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>