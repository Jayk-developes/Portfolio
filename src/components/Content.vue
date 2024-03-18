<script setup lang="ts">

import Home from "./Home.vue";
import PersonalFacts from "./PersonalFacts.vue";
import CV from "./CV.vue";
import Skills from "./Skills.vue";
import RandomArrayIndex from "../assets.ts";
import Projects from "./Projects.vue";
import OpenFor from "./OpenFor.vue";
import Contact from "./Contact.vue";
import Projects_Images from "./Projects_Images.vue";
import {onMounted} from "vue";
import PersonalImages from "./PersonalImages.vue";


const pinColors = [
  "#e65d5d",
  "#68e568",
  "#7474ef",
  "#f3f33d",
  "#e853e8",
  "#54e3e3"
]

const isElementAbove = (topElement: HTMLElement, bottomElement: HTMLElement) => {
  const topRect = topElement
  bottomElement.style.top = (topRect.offsetTop + topRect.offsetHeight + 500) + "px"
}

const isElementAboveBG = (topElement: HTMLElement, bgElement: HTMLElement) => {
  const topRect = topElement
  bgElement.style.top = (topRect.offsetTop + topRect.offsetHeight - 50) + "px"
}

console.log(PersonalFacts)

onMounted(() => {
  let personal = document.getElementById("content_personal") as HTMLElement
  let cv = document.getElementById("content_cv") as HTMLElement
  let skills = document.getElementById("content_skills") as HTMLElement
  let projects = document.getElementById("content_projects") as HTMLElement
  let openFor = document.getElementById("content_open_for") as HTMLElement
  let contact = document.getElementById("content_contact") as HTMLElement
  let BG1 = document.getElementById("BG1") as HTMLElement
  let BG2 = document.getElementById("BG2") as HTMLElement
  let loop_2 = document.getElementById("loop_2") as HTMLElement
  let loop_1 = document.querySelectorAll(".loop_1")


  const LoadPage = () => {

    isElementAbove(personal, cv)
    isElementAbove(cv, skills)
    isElementAbove(skills, projects)
    isElementAbove(projects, openFor)
    isElementAbove(openFor, contact)

    isElementAboveBG(personal, BG1)
    isElementAboveBG(skills, BG2)
    let loop_duration = [15000, 25000]
    let i = 0
    loop_1.forEach((loop) => {
      let loop_margin = [loop.offsetHeight / 2 + "px", 0]
      loop.animate([
        {marginTop: loop_margin[i]},
        {marginTop: -loop.offsetHeight / 2 + "px"},
      ], {
        easing: "linear",
        duration: loop_duration[i],
        iterations: Infinity

      })
      i = i + 1
    })
    loop_2.animate([
      {marginTop: -loop_2.offsetHeight / 2 + "px"},
      {marginTop: loop_2.offsetHeight / 2 + "px"},
    ], {
      easing: "linear",
      duration: loop_duration[0],
      iterations: Infinity
    })

    let pins = document.querySelectorAll(".paper_pin")
    let prevColor: int;
    let prevColor2: int;
    pins.forEach((pin) => {
      let newColor = RandomArrayIndex(prevColor, prevColor2, pinColors.length)
      pin.style.backgroundColor = pinColors[newColor]
      prevColor2 = prevColor
      prevColor = newColor
    })
  }


  LoadPage()

  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      LoadPage()
    }, 300)
  }



  let CurrentWindowWidth = window.innerWidth
  window.addEventListener("resize", () => {
    if ((window.innerWidth <= 600 && window.innerWidth != CurrentWindowWidth) || (window.innerWidth > 600)) {
      LoadPage()
    }
    CurrentWindowWidth = window.innerWidth

  })
})

</script>

<template>
  <div class="home">
    <Home/>
  </div>
  <div class="personal_container bg_seperator" style="position: absolute" id="content_personal">
    <PersonalFacts/>
  </div>

  <div class="personal_container bg_seperator" id="content_cv">
    <CV/>
  </div>

  <PersonalImages />

  <div class="personal_container bg_seperator" id="content_skills">
    <Skills/>
  </div>

  <div class="BG" id="BG2">
    <Projects_Images/>
  </div>

  <div class="personal_container bg_seperator" id="content_projects">
    <Projects/>
  </div>

  <div class="personal_container bg_seperator" id="content_open_for">
    <OpenFor/>
  </div>

  <div class="personal_container bg_seperator" id="content_contact">
    <Contact/>
  </div>

</template>

<style scoped>

</style>