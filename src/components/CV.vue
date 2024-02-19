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
  {header: "Allgemein", content: "Name: Joshua-Daniel Koch<br>Geboren am: 15. September 2001<br>Gebiren in: Hannover<br>Familienstand: Ledig<br>Staatsangehörigkeit: Deutsch<span style='display: block; text-align: center; font-weight: bold'>Kontaktdaten</span>- joshua.daniel.koch@gmail.com<br>- +49 176 345 18 116<br>- <a href='https://www.linkedin.com/in/joshua-daniel-koch-517971208/'>LinkedIn - Joshua-Daniel Koch</a><br>- <a href='https://github.com/Jayk-developes'>GitHub - Jayk-Developes</a>"}
]

document.addEventListener("DOMContentLoaded", () => {

  let postits = document.querySelectorAll(".content_postit")
  let prevColor: int;

  postits.forEach((postit) => {
    let newColor = RandomArrayIndex(prevColor, postItColors.length)
    postit.style.rotate = ((Math.random() * 8) - 4) + "deg"
    postit.style.height = postit.clientWidth + "px"
    postit.style.backgroundColor = postItColors[newColor]
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