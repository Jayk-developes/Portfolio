<script setup lang="ts">

document.addEventListener("DOMContentLoaded", () => {
  const joshua = document.getElementById("joshua") as HTMLElement
  const joshua_data_separator = document.getElementById("joshua_data_separator") as HTMLElement
  const top_joshua_separator = document.getElementById("top_joshua_separator") as HTMLElement
  const personalData = document.getElementById("personalData") as HTMLElement
  const cv = document.getElementById("cv") as HTMLElement
  const cv_header = document.getElementById("cv_header") as HTMLElement


  const stretchIfOdd = (element: HTMLElement) => {
    if (element.childNodes.length % 2 != 0) {
      console.log(element.childNodes[element.childNodes.length - 1])

      element.childNodes[element.childNodes.length - 1].style.width = "35rem"
    }
  }

  stretchIfOdd(personalData)

  const isElementOnScreen = (scrollElement: HTMLElement) => {
    const rect = scrollElement.getBoundingClientRect();
    return rect.top < window.innerHeight / 2 + 40;
  }

  const isElementAbove = (scrollElement: HTMLElement) => {
    const rect = scrollElement.getBoundingClientRect();
    return rect.bottom < 70
  }

  addEventListener("scroll", (event) => {
    scrollAnimation(personalData, joshua, top_joshua_separator, joshua_data_separator, cv_header)

  });


  const scrollAnimation = (targetData: HTMLElement, targetHeader: HTMLElement, separatortop?: HTMLElement, separatorbtm: HTMLElement, lowerHeader?: HTMLElement) => {
    const isOnScreen = isElementOnScreen(targetData)
    const dataAbove = isElementAbove(targetData)
    targetData.classList.toggle('scale', isOnScreen);
    targetHeader.classList.toggle('fixed_content', !isOnScreen);
    targetHeader.classList.toggle('scalePointSeven', isOnScreen);
    (isOnScreen) ? document.documentElement.style.setProperty("background-color", "#222266") : document.documentElement.style.setProperty("background-color", "#222222")
    if (separatortop) {
      separatortop.style.display = isOnScreen ? "block" : "none";
    }
    separatorbtm.style.display = isOnScreen ? "none" : "block";
    if (lowerHeader) {
      lowerHeader.style.marginTop = dataAbove ? "0rem" : "30rem"
      lowerHeader.classList.toggle('fixed_content', dataAbove)
    }
  }
})
</script>

<template>
  <div class="center">
    <div style="margin-bottom:65rem; display: none" id="top_joshua_separator"></div>
    <div class="center fixed_content" id="joshua">
      <h1 class="xl_text" style="margin: 0 0 -2rem 0;">Joshua-Daniel Koch</h1>
      <h3> Fachinformatiker in Fachrichtung Anwendungsentwicklung</h3>
    </div>
    <div style="margin-bottom:80rem" id="joshua_data_separator"></div>
    <div class="content_grid" id="personalData">
      <div id="content_personal">
       <p> Technik </p>
      </div>
      <div id="content_personal">
       <p> Digitale Trends </p>
      </div>
      <div id="content_personal">
       <p> Erste Erfahrung mit 18 </p>
      </div>
      <div id="content_personal">
       <p> Gewissenhafte Arbeit </p>
      </div>
      <div id="content_personal">
       <p> Entwicklung und Programmieren </p>
      </div>
    </div>
    <!--    <p>Ich war schon von Kind aus interessiert an Technik und Digitale Trends.-->
    <!--      Trotzdem habe ich erst im Alter von 18 meine ersten Erfahrungen mit Entwicklung und Programmieren gemacht.-->
    <!--      Obwohl ich vergleichsweise Spät mit dem Entwickeln angefangen habe, kann ich mit meiner Gewissenhaften Arbeit-->
    <!--      überzeugen.</p>-->


    <div class=" content_border" id="cv_header">
      <h1 class="mid_text">Lebenslauf</h1>
    </div>

    <div style="margin-bottom:80rem" id="data_cvseparator"></div>
    <div class="content_grid" id="cv">
      <div>
        Fachhochschulreife
      </div>
      <div>
        Engagement
      </div>
      <div>
        Motivation
      </div>
      <div>
        Notendurchschnitt 1.6
      </div>

    </div>
    <h3>Lebenslauf</h3>
    <p>Ich Konnte meine Schullaufbahn mit Bravur bestehen und habe immer Engagement und Motivation gezeigt.
      So habe ich mein Erweiterten Sekundarabschluss I mit einem Notendurchschnitt von 1.6 bestehen können. </p>


    <div class=" content_border">
      <h1 class="mid_text">Skills</h1>
    </div>
    <div class="content_grid">
      <div>HTML / CSS</div>
      <div>Javascript / Typescript</div>
      <div>Vue.js</div>
      <div>Django</div>
      <div>FastAPI</div>
      <div>SQL</div>
    </div>
    <h3>Skills</h3>
    <p>Ich habe mich Spezialisiert in der Entwicklung an Websites, sodass ich nicht nur umfangreiche Erfahrung in
      HTML, CSS und Javascript/Typescript besitze, sondern auch mit Frameworks wie Vue.js und Django arbeite.</p>
    <p>Für Backendaufgaben bin ich zusätzlich offen, da ich auch in diesem Bereich mit FastAPI, Django und SQL
      Daten in Websites angebunden habe.</p>
  </div>
</template>

<style scoped>

</style>