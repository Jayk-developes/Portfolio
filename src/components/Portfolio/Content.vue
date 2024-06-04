<script setup lang="ts">

import Home from "./Home.vue";
import PersonalFacts from "./PersonalFacts.vue";
import CV from "./CV.vue";
import Skills from "./Skills.vue";
import RandomArrayIndex from "../../assets.ts";
import Projects from "./Projects.vue";
import OpenFor from "./OpenFor.vue";
import Contact from "../Contact.vue";
import Projects_Images from "./Projects_Images.vue";
import {onMounted, ref} from "vue";
import PersonalImages from "./PersonalImages.vue";
import NewNavbar from "./NewNavbar.vue";


const pinColors = [
  "#e65d5d",
  "#68e568",
  "#7474ef",
  "#f3f33d",
  "#e853e8",
  "#54e3e3"
]

const isElementAbove = (topElement: HTMLElement | null, bottomElement: HTMLElement | null, pixelAmount: number) => {
  if (bottomElement && topElement) {
    bottomElement.style.top = (topElement.offsetTop + topElement.offsetHeight + pixelAmount) + "px"
  }
}

let personal = ref<HTMLElement | null>(null)
let cv = ref<HTMLElement | null>(null)
let skills = ref<HTMLElement | null>(null)
let projects = ref<HTMLElement | null>(null)
let openFor = ref<HTMLElement | null>(null)
let contact = ref<HTMLElement | null>(null)

const Animate = (element: HTMLElement, margin: string | number, duration: number, negative: boolean) => {
  element.animate([
        {marginTop: margin},
        {marginTop: negative ? -element.offsetHeight / 2 + "px" : element.offsetHeight / 2 + "px"}
      ], {easing: "linear", duration: duration, iterations: Infinity}
  )
}

onMounted(async () => {
  let BG1 = document.getElementById("BG1") as HTMLElement
  let BG2 = document.getElementById("BG2") as HTMLElement
  let loop_2 = document.getElementById("loop_2") as HTMLElement
  let loop_1 = document.querySelectorAll(".loop_1") as NodeListOf<HTMLElement>
  let navbar_items = document.querySelectorAll(".note_2")

  let ArrowDown = document.getElementById("arrowDown") as HTMLElement

  ArrowDown.addEventListener("click", () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth"
    })
  })
  navbar_items.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.getAttribute("data-target") == "content_home") {
        window.scroll({top: 0, behavior: "smooth"})
      } else {
        let scroller = document.getElementById(item.getAttribute("data-target")) as HTMLElement
        if (scroller) {
          scroller.scrollIntoView({behavior: "smooth", block: "start"})
        }
      }
    })
  })
  const LoadPage = () => {
    let elementList = [personal.value, cv.value, skills.value, projects.value, openFor.value, contact.value, BG1, BG2]

    let index = 0
    for (let i = 0; i < elementList.length; i++) {
      if (i <= 4) {
        isElementAbove(elementList[i], elementList[i + 1], 500)
      } else if (i >= 6) {
        isElementAbove(elementList[index], elementList[i], -50)
        index += 2
      }
    }

    const loop_duration = [15000, 25000]
    for (let i = 0; i < loop_1.length; i++) {
      const loop_margin = [loop_1[0].offsetHeight / 2 + "px", 0]
      Animate(loop_1[i], loop_margin[i], loop_duration[i], true)
    }
    Animate(loop_2, -loop_2.offsetHeight / 2 + "px", loop_duration[0], false)


    let pins = document.querySelectorAll(".paper_pin") as NodeListOf<HTMLElement>, prevColor: number, prevColor2: number
    pins.forEach((pin) => {
      let newColor = RandomArrayIndex(prevColor, prevColor2, pinColors.length)
      pin.style.backgroundColor = pinColors[newColor]
      prevColor2 = prevColor
      prevColor = newColor
    })
  }

  LoadPage()

  for (let i = 0; i < 3; i++) {
    await new Promise(r => setTimeout(r, 700));
    LoadPage()
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
  <NewNavbar/>
  <img src="../../media/Arrow-down.svg.png" alt="arrowDown" class="arrowDown" id="arrowDown">
  <div class="home">
    <Home/>
  </div>
  <div class="personal_container bg_seperator" style="position: absolute" id="content_personal" ref="personal">
    <PersonalFacts/>
  </div>

  <div class="personal_container bg_seperator" id="content_cv" ref="cv">
    <CV/>
  </div>

  <PersonalImages/>

  <div class="personal_container bg_seperator" id="content_skills" ref="skills">
    <Skills/>
  </div>

  <div class="BG" id="BG2" ref="BG2">
    <Projects_Images/>
  </div>

  <div class="personal_container bg_seperator" id="content_projects" ref="projects">
    <Projects/>
  </div>

  <div class="personal_container bg_seperator" id="content_open_for" ref="openFor">
    <OpenFor/>
  </div>

  <div class="personal_container bg_seperator" id="content_contact" ref="contact">
    <Contact/>
  </div>

</template>

<style scoped>

</style>