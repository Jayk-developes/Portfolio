<script setup lang="ts">

import Home from "./Home.vue";
import PersonalFacts from "./PersonalFacts.vue";
import CV from "./CV.vue";

const isElementAbove = (topElement: HTMLElement, bottomElement: HTMLElement) => {
  const topRect = topElement
  bottomElement.style.top = (topRect.offsetTop + topRect.offsetHeight + 400) + "px"
}

document.addEventListener("DOMContentLoaded", () => {
  let personal = document.getElementById("content_personal") as HTMLElement
  let cv = document.getElementById("content_cv") as HTMLElement

  isElementAbove(personal, cv)
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
    <CV />
  </div>
</template>

<style scoped>

</style>