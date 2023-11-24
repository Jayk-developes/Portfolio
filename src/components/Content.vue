<script setup lang="ts">
import "../scrollIntoView.ts"
document.addEventListener("DOMContentLoaded", () => {
  const joshua = document.getElementById("joshua") as HTMLElement
  const joshua_data_separator = document.getElementById("joshua_data_separator") as HTMLElement
  const top_joshua_separator = document.getElementById("top_joshua_separator") as HTMLElement
  const personalData = document.getElementById("personalData") as HTMLElement
  const cv = document.getElementById("cv") as HTMLElement
  const cv_header = document.getElementById("cv_header") as HTMLElement
  const joshua_cv_separator = document.getElementById("joshua_cv_separator") as HTMLElement
  const data_cv_separator = document.getElementById("data_cv_separator") as HTMLElement
  const skills_header = document.getElementById("skills_header") as HTMLElement
  const cv_skills_separator = document.getElementById("cv_skills_separator") as HTMLElement
  const data_skills_separator = document.getElementById("data_skills_separator") as HTMLElement
  const skills = document.getElementById("skills") as HTMLElement
  const contact_header = document.getElementById("contact_header") as HTMLElement

  const content_personal_sections = document.querySelectorAll("#content_personal_sections")

  if (joshua.getBoundingClientRect().bottom > 0) {
    joshua.classList.add("fixed_content")
  }

  window.scrollBy(0, 1)

  const isElementOnScreen = (scrollElement: HTMLElement) => {
    const rect = scrollElement.getBoundingClientRect();
    return rect.top < window.innerHeight / 2 - 200;
  }

  const isElementAbove = (scrollElement: HTMLElement, maximal: number, minimal: number) => {
    const rect = scrollElement.getBoundingClientRect();
    console.log(rect.bottom)
    return maximal < rect.bottom && rect.bottom < minimal
  }

  addEventListener("scroll", (event) => {
    if(!(isElementAbove(personalData, -100000, -270)))
    scrollAnimation(personalData, joshua, top_joshua_separator, joshua_data_separator, cv_header, content_personal_sections)
    if (isElementAbove(personalData, -2480, -270)) {
      cv_header.style.marginTop = "0rem"
      scrollAnimation(cv, cv_header, joshua_cv_separator, data_cv_separator, skills_header)
      for(let i = 0; i < content_personal_sections.length; i++) {
        content_personal_sections[i].style.display = "none"
      }
    }
    if (isElementAbove(cv, -2000, -320)) {
      skills_header.style.marginTop = "0rem"
      scrollAnimation(skills, skills_header, cv_skills_separator, data_skills_separator, contact_header)
    }

  });


  const scrollAnimation = (targetData: HTMLElement, targetHeader: HTMLElement, separatortop?: HTMLElement, separatorbtm: HTMLElement, lowerHeader?: HTMLElement, targetDataContent?: HTMLElement) => {
    const isOnScreen = isElementOnScreen(targetData)
    const dataAbove = isElementAbove(targetData, -2100, -270)
    targetHeader.style.marginTop = "0rem"
    targetData.classList.toggle('scale', isOnScreen);
    if (targetDataContent) {
      for (let i = 0; i < targetDataContent.length; i++) {
        targetDataContent[i].style.display = isOnScreen ? "block" : "none";
      }
    }
    targetHeader.classList.toggle('fixed_content', !isOnScreen);
    targetHeader.style.marginLeft = !isOnScreen ? "0": "1rem"
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
    <div style="margin-bottom:85rem; display: none" id="top_joshua_separator"></div>
    <div class="center" id="joshua">
      <h1 class="xl_text" style="margin: 0 0 -2rem 0;">Joshua-Daniel Koch</h1>
      <h3> Fachinformatiker in Fachrichtung Anwendungsentwicklung</h3>
    </div>
    <div style="margin-bottom:100rem" id="joshua_data_separator"></div>
    <div class="content_grid" id="personalData">
      <div id="content_personal" style="z-index: 10;">
        <p> Technik </p>
      </div>
      <div id="content_personal" style="z-index: 8;">
        <p> Digitale Trends </p>
      </div>

      <div id="content_personal" style="z-index: 6;">
        <p> Erste Erfahrung mit 18 </p>
      </div>
      <div id="content_personal" style="z-index: 4;">
        <p> Gewissenhafte Arbeit </p>
      </div>
      <div id="content_personal" style="z-index: 2;">
        <p> Entwicklung und Programmieren </p>
      </div>
      <section style="z-index: 9;" id="content_personal_sections">
        <p>Joshua hat seine Interesse an Technik schon früh gefunden. Allerdings wusste er nicht genau, was er in der Branche machen könnte und entschied sich erstmal
        andere Wege einzugehen. Trotzdem hat er sich immer wieder mit dem Thema beschäftigt und hat somit auch schon früh ein Grundwissen aneignen können.</p>
        <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
      </section>
      <section style="z-index: 7;" id="content_personal_sections">
        <p>Digitale Trends spielen im Leben von Joshua eine große Rolle. Er nutzt Soziale Medien und erkennt aktuelle Trends. Somit hat er ein gutes Verstädnis, welche
        Designs und Darstellungen momentan modern sind und wie man diese Umsetzten kann. Da Joshua großes Interesse hat an der Umsetzung von Design, aber auch funktionalität,
        hat er eine perfekte Balance zwischen Theorie und Praxis im Bereich Back- und Frontend.</p>
        <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
      </section>
      <section style="z-index: 5;" id="content_personal_sections">
        <p>Mit dem Programmieren hat Joshua mit 18 angefangen. Hier hat er zunächst mit der Programmiersprache "C#" begonnen. Mit dem Anfang der Ausbildung bei der comNET GmbH
        hat sich der Fokus auf "Python" und "JavaScript" gelegt. Aber auch andere Sprachen wie Java oder C++ hat er sich privat angeeignet.</p>
        <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
      </section>
      <section style="z-index: 3;" id="content_personal_sections">
        <p>Joshua ist ehrgeizig und schafft es auch in stressigen Situationen seine Arbeit zu vervollständigen. Er möchte stets ein Produkt liefern,
        welches die Anforderungen konkret umsetzt und ist sich nicht scheu Fehler einzustehen und diese zu beheben.</p>
        <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
      </section>
      <section style="z-index: 1;" id="content_personal_sections">
        <p>Das Fachgebiet, für welches sich Joshua entschieden hat, ist die Webentwicklung. Er interessiert sich für den Aufbau und design der Anwendung
        aber auch für die Struktur einer Datenbank und dessen Anbindung. Zusätzlich möchte er sich im Gebiet Appentwicklung und Spieleentwicklung ausdehnen.</p>
        <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
      </section>

    </div>
    <!--    <p>Ich war schon von Kind aus interessiert an Technik und Digitale Trends.-->
    <!--      Trotzdem habe ich erst im Alter von 18 meine ersten Erfahrungen mit Entwicklung und Programmieren gemacht.-->
    <!--      Obwohl ich vergleichsweise Spät mit dem Entwickeln angefangen habe, kann ich mit meiner Gewissenhaften Arbeit-->
    <!--      überzeugen.</p>-->

    <div style="margin-bottom:85rem; display: none" id="joshua_cv_separator"></div>
    <div class="center" id="cv_header">
      <h1 class="xl_text">Lebenslauf</h1>
    </div>

    <div style="margin-bottom:100rem" id="data_cv_separator"></div>
    <div class="content_grid" id="cv">
      <div>
        <p>Fachhoch- schulreife</p>
      </div>
      <div>
        <p>Engagement</p>
      </div>
      <div>
        <p>Motivation</p>
      </div>
      <div>
        <p>Durchschnitt ⌀1.6</p>
      </div>

    </div>
    <!--    <h3>Lebenslauf</h3>-->
    <!--    <p>Ich Konnte meine Schullaufbahn mit Bravur bestehen und habe immer Engagement und Motivation gezeigt.-->
    <!--      So habe ich mein Erweiterten Sekundarabschluss I mit einem Notendurchschnitt von 1.6 bestehen können. </p>-->

    <div style="margin-bottom:85rem; display: none" id="cv_skills_separator"></div>
    <div class="center" id="skills_header">
      <h1 class="xl_text">Skills</h1>
    </div>
    <div style="margin-bottom:100rem" id="data_skills_separator"></div>
    <div class="content_grid" id="skills">
      <div>
        <p> HTML / CSS </p>
      </div>
      <div>
        <p> Javascript / Typescript </p>
      </div>
      <div>
        <p> Vue.js </p>
      </div>
      <div>
        <p> Django </p>
      </div>
      <div>
        <p> FastAPI </p>
      </div>
      <div>
        <p> SQL </p>
      </div>
    </div>
    <!--    <h3>Skills</h3>-->
    <!--    <p>Ich habe mich Spezialisiert in der Entwicklung an Websites, sodass ich nicht nur umfangreiche Erfahrung in-->
    <!--      HTML, CSS und Javascript/Typescript besitze, sondern auch mit Frameworks wie Vue.js und Django arbeite.</p>-->
    <!--    <p>Für Backendaufgaben bin ich zusätzlich offen, da ich auch in diesem Bereich mit FastAPI, Django und SQL-->
    <!--      Daten in Websites angebunden habe.</p>-->
    <div class="center" id="contact_header">
      <h1 class="xl_text">Kontakt</h1>
    </div>
  </div>

</template>

<style scoped>

</style>