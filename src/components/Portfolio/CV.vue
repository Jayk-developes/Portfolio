<script setup lang="ts">
import RandomArrayIndex from "../../assets.ts";
import {onMounted, ref} from "vue";

const postItColors = [
  "#FFBBBB",
  "#BBFFBB",
  "#BBBBFF",
  "#FFFFBB",
  "#FFBBFF",
  "#BBFFFF"
]


const certActive = ref(false)
const cvActive = ref(false)

const CV = [
  {
    header: "Allgemein",
    content: "Name: Joshua-Daniel Koch<br>Geboren am: 15. September 2001<br>Geboren in: Hannover<br>Familienstand: Ledig<br>Staatsangehörigkeit: Deutsch<span style='display: block; text-align: center; font-weight: bold'>Kontaktdaten</span>- <span id='name_mail'>joshua.daniel.koch@gmail.com</span><br>- +49 176 345 18 116<br>- <a href='https://www.linkedin.com/in/joshua-daniel-koch-517971208/'>LinkedIn - Joshua-Daniel Koch</a><br>- <a href='https://github.com/Jayk-developes'>GitHub - Jayk-Developes</a><br><input type='button' id='cv_button' value='Mein Lebenslauf' class='zeugnis_button'>"
  },
  {
    header: "Schulische Laufbahn",
    content: "<span style='text-align: center; display: block;'><span style='font-weight: bold'>11.10.2021 - 06.2024</span><br> Multimedia BBS, Hannover<br><br><span style='font-weight: bold'> 08.2018 -07.2020</span><br> IGS Linden, Hannover<br><br> <span style='font-weight: bold'>08.2012 - 06.2018</span> <br>IGS Stöcken, Hannover<br><br><span style='font-weight: bold'> 08.2008 - 07.2012 </span><br>Grundschule Entenfang, Hannover <br><input type='button' id='certificate_button' value='Meine Zeugnisse' class='zeugnis_button'></span>"
  },
  {
    header: "Berufspraxis",
    content: "<span style='text-align: center; display: block;'><span style='font-weight: bold'>11.10.2021 - 06.2024</span><br><span style='white-space: nowrap'>Ausbildung <br> Anwendungsentwicklung</span><span style='font-size: .5rem; white-space: normal'><br>Frontend, Backend, Design</span><br><br><span style='font-weight: bold'>05.2021 - 10.2021</span><br>Berufsvorbereitung - Wirtschaft<br><br><span style='font-weight: bold'>09.2017 und 08.2016</span><br>Praktika<br>Floristik und Fahrzeuglackierer"
  },
  {
    header: "Interessen",
    content: "-<strong> Programmieren</strong><br>-<strong> Designen</strong><br><br>- Zeichnen <br>- Musizieren <br>- 3D-Modelieren<br>- Troubleshooten<br><br> (Ich liebe es aktiv Probleme zu bewältigen. Solche Erfolge geben mir Serotonin und Motivation.)"
  },
  {
    header: "Sprachen",
    content: "<span style='display: block; text-align: center; font-weight: bold'>Deutsch</span>- C2, Muttersprache<br><br><span style='display: block; text-align: center; font-weight: bold'>Englisch</span>- C1 in Schrift und Sprache<br>(Meine mit Abstand liebste Sprache. Ich bewältige nahezu alles in Englisch und freue mich jedes Mal, wenn ich Englisch anwenden kann.)<br><br><span style='display: block; text-align: center; font-weight: bold'>Spanisch</span>- A2, Grundkenntnisse"
  }
]
onMounted(() => {
  const CVLoaded = () => {
    
    let postits = document.querySelectorAll(".content_postit")
    let prevColor: int;
    let prevColor2: int;

    postits.forEach((postit) => {
      let newColor = RandomArrayIndex(prevColor, prevColor2, postItColors.length)
      postit.style.rotate = ((Math.random() * 8) - 4) + "deg"
      postit.style.height = postit.clientWidth + "px"
      postit.style.backgroundColor = postItColors[newColor]
      postit.addEventListener("click", () => {
        newColor = RandomArrayIndex(prevColor, prevColor2, postItColors.length)
        postit.style.backgroundColor = postItColors[newColor]
        prevColor2 = prevColor
        prevColor = newColor
      })
      prevColor2 = prevColor
      prevColor = newColor
    })

    let cert_button = document.getElementById("certificate_button") as HTMLElement

    cert_button.addEventListener("click", () => {
      certActive.value = true
    })

    let cv_button = document.getElementById("cv_button") as HTMLElement

    cv_button.addEventListener("click", () => {
      cvActive.value = true
    })
  }
  CVLoaded()
  let CurrentWindowWidth = window.innerWidth

  window.addEventListener("resize", () => {
    if ((window.innerWidth <= 600 && window.innerWidth != CurrentWindowWidth) || (window.innerWidth > 600)) {
      CVLoaded()
    }
    CurrentWindowWidth = window.innerWidth

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

  <div v-if="certActive" class="show_cert">
    <div class="close_cert" @click="certActive = false">&#10005;</div>
    <div class="cert_container">
      <img src="../../media/certificates/MMBBS-2022.png" alt="MMBBS2022">
      <img src="../../media/certificates/MMBBS-2023.png" alt="MMBBS2023">
      <img src="../../media/certificates/Zwischenzeugnis_1.png" alt="ZwZeug1">
      <img src="../../media/certificates/Zwischenzeugnis_2.png" alt="ZwZeug2">
      <img src="../../media/certificates/Fachabi.png" alt="Fachabi">
      <img src="../../media/certificates/Fachabi_Bescheinigung.png" alt="Fachabi2">
      <img src="../../media/certificates/Sekundar_1.png" alt="Sek1">
    </div>
  </div>
  <div v-if="cvActive" class="show_cert">
    <div class="close_cert" @click="cvActive = false">&#10005;</div>
    <div class="cert_container">
      <img src="../../media/cv/cv.png" alt="cv_1">
    </div>
  </div>
</template>

<style scoped>

</style>