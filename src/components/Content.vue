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

document.addEventListener("DOMContentLoaded", () => {
  let personal = document.getElementById("content_personal") as HTMLElement
  let cv = document.getElementById("content_cv") as HTMLElement
  let skills = document.getElementById("content_skills") as HTMLElement
  let projects = document.getElementById("content_projects") as HTMLElement
  let openFor = document.getElementById("content_open_for") as HTMLElement
  let contact = document.getElementById("content_contact") as HTMLElement

  setTimeout(() => {
    isElementAbove(personal, cv)
    isElementAbove(cv, skills)
    isElementAbove(skills, projects)
    isElementAbove(projects, openFor)
    isElementAbove(openFor, contact)
  }, 200)

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
  <div>
    <Home/>
  </div>
  <div class="personal_container bg_seperator" id="content_personal">
    <PersonalFacts/>
  </div>

  <div class="personal_container bg_seperator" id="content_cv">
    <CV/>
  </div>

  <div class="personal_container bg_seperator" id="content_skills">
    <Skills/>
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