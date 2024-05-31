<script setup lang="ts">
import Navbar from "./components/Portfolio/Navbar.vue";
import Content from "./components/Content_old.vue";
import "./trail.ts";
import "./scrollIntoView.ts"
import {ref, watch} from "vue";
import NewNavbar from "./components/Portfolio/NewNavbar.vue";

document.addEventListener("DOMContentLoaded", () => {
  let wallpaper = document.getElementById("wallpaper")
  let wallpaper2 = document.getElementById("wallpaper2")
  let wallpaper3 = document.getElementById("wallpaper3")
  let wallpaper4 = document.getElementById("wallpaper4")
  let wallpaper5 = document.getElementById("wallpaper5")
  let arrowDown = document.getElementById("arrowDown")
  let dateShow = document.getElementById("dateShow")

  wallpaper3.style.opacity = 0
  wallpaper2.style.opacity = 0
  wallpaper4.style.opacity = 0
  wallpaper5.style.opacity = 0

  onscroll = (event) => {
    const opacityArrow = 1 - (window.pageYOffset / 400)
    const opacity = 1 - (window.pageYOffset / 1000)
    const scale = 1 + (window.pageYOffset / 5000)
    if (opacity <= 0) {
      wallpaper.style.display = "none"
      dateShow.style.display = "none"
    } else {
      wallpaper.style.display = "flex"
      wallpaper.style.opacity = opacity.toString()
      wallpaper.style.transform = "scale(" + scale.toString() + ")"
      dateShow.style.display = "flex"
      dateShow.style.opacity = opacity.toString()
    }

    if (opacityArrow <= 0) {
      arrowDown.style.display = "none"
    } else {
      arrowDown.style.display = "block"
      arrowDown.style.opacity = opacityArrow.toString()

    }
  }


})

const imageShow = (imageNum: number) => {
  image.value = imageNum
}

const image = ref(0)

watch(image, (neww, oldd) => {
  wallpaper3.style.opacity = 0
  wallpaper2.style.opacity = 0
  wallpaper5.style.opacity = 0
  wallpaper4.style.opacity = 0
  if (neww == 1) {
    wallpaper2.style.opacity = 1
  } else if (neww == 2) {
    wallpaper3.style.opacity = 1
  } else if (neww == 3) {
    wallpaper4.style.opacity = 1
  } else if (neww == 4) {
    wallpaper5.style.opacity = 1
  }
})

let currentDay = new Date()

const month = [
    "JAN", "FEB", "MAR", "APR", "MAI", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
]
console.log(currentDay.getDate())
</script>

<template>
  <!-- <img src="./media/Arrow-down.svg.png" alt="arrowDown" class="arrowDown" id="arrowDown">
  <img src="./media/smoke.gif" alt="wallpaper" class="wallpaper" id="wallpaper">
  <img src="./media/ColorSmoke.gif" alt="wallpaper2" id="wallpaper2" class="wallpaper"
       style="filter: brightness(30%); transition: all ease-in-out .3s;">
  <img src="./media/PurpleBlueSmoke.gif" alt="wallpaper3" id="wallpaper3" class="wallpaper"
       style="filter: brightness(50%); transition: all ease-in-out .3s;">
  <img src="./media/cigarSmoke.gif" alt="wallpaper4" id="wallpaper4" class="wallpaper"
       style="filter: brightness(60%); transition: all ease-in-out .3s;">
  <img src="./media/greenSmoke.gif" alt="wallpaper5" id="wallpaper5" class="wallpaper"
       style="filter: brightness(60%); transition: all ease-in-out .3s;"> !-->
  <NewNavbar />
  <div class="home_grid">
    <div>
     <!-- <Navbar/> !-->
    </div>

    <div>
      <Content @image_show="imageShow"/>
    </div>
    <div class="dateShow" id="dateShow">
        <p v-if="currentDay.getDate()< 10">0{{currentDay.getDate()}}</p><p v-else>{{currentDay.getDate()}}</p>
        <p id="dateMonth">{{month[currentDay.getMonth()]}}</p>
      <p id="dateText">Offen Für Stellenangebote</p>
      <input type="button" value="Contact Me!" id="contactButton">
    </div>
    <!-- <div><img src="./media/Joshua_Koch.jdpg" class="square fixed_img"></div> -->
  </div>
</template>

<style scoped>

</style>
