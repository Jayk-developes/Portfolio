<script setup lang="ts">

import Home from "./Home.vue";
import PersonalFacts from "./PersonalFacts.vue";
import CV from "./CV.vue";
import Skills from "./Skills.vue";
import RandomArrayIndex from "../assets.ts";
import Projects from "./Projects.vue";
import OpenFor from "./OpenFor.vue";
import Contact from "./Contact.vue";

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

document.addEventListener("DOMContentLoaded", () => {
  let personal = document.getElementById("content_personal") as HTMLElement
  let cv = document.getElementById("content_cv") as HTMLElement
  let skills = document.getElementById("content_skills") as HTMLElement
  let projects = document.getElementById("content_projects") as HTMLElement
  let openFor = document.getElementById("content_open_for") as HTMLElement
  let contact = document.getElementById("content_contact") as HTMLElement
  let BG1 = document.getElementById("BG1") as HTMLElement
  let loop_1 = document.getElementById("loop_1") as HTMLElement
  let loop_2 = document.getElementById("loop_2") as HTMLElement

  setTimeout(() => {
    isElementAbove(personal, cv)
    isElementAbove(cv, skills)
    isElementAbove(skills, projects)
    isElementAbove(projects, openFor)
    isElementAbove(openFor, contact)

    isElementAboveBG(personal, BG1)
    loop_1.animate([
      {marginTop: -loop_1.offsetHeight / 2 + "px"},
      {marginTop: 0}
    ], {
      easing: "linear",
      duration: 10000,
      iterations: Infinity
    })
    loop_2.animate([
      {marginTop: 0},
      {marginTop: -loop_2.offsetHeight * 0.5 + "px"}
    ], {
      easing: "linear",
      duration: 10000,
      iterations: Infinity
    })
  }, 100)

  let pins = document.querySelectorAll(".paper_pin")
  let prevColor: int;
  let prevColor2: int;
  pins.forEach((pin) => {
    let newColor = RandomArrayIndex(prevColor, prevColor2, pinColors.length)
    pin.style.backgroundColor = pinColors[newColor]
    prevColor2 = prevColor
    prevColor = newColor
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

  <div style="position: absolute;" class="BG" id="BG1">
    <img src="../media/real_loop_trans1.png" alt="real_loop1" id="loop_1">
    <img src="../media/real_loop_trans2.png" alt="real_loop2" id="loop_2">
  </div>

  <div class="personal_container bg_seperator" id="content_skills">
    <Skills/>
  </div>

  <div style="position: absolute;" class="BG" id="BG2">
    <div>
      <img src="../media/projects/OldDesignedCss.png" alt="OldDesign">
      <img src="../media/projects/RedesignedCss.png" alt="Redesign">
    </div>
    <div>
      <img src="../media/projects/OldDesignedCss_2.png" alt="OldDesign_2">
      <img src="../media/projects/RedesignedCss_2.png" alt="Redesign_2">
    </div>
    <div>
      <img src="../media/projects/axisAlerting.png" alt="axisAlerting">
    </div>
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