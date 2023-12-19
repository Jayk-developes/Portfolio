<script setup lang="ts">
import "../scrollIntoView.ts"
import URI from "urijs";

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
  const contact_content = document.getElementById("contact_content") as HTMLElement

  const content_personal_sections = document.querySelectorAll("#content_personal_sections")
  const cv_sections = document.querySelectorAll("#cv_sections")
  const skills_sections = document.querySelectorAll("#skills_sections")

  if (joshua.getBoundingClientRect().bottom > 0) {
    joshua.classList.add("fixed_content")
  }

  window.scrollBy(0, 1)

  const isElementOnScreen = (scrollElement: HTMLElement) => {
    const rect = scrollElement.getBoundingClientRect();
    return rect.top < window.innerHeight / 2;
  }

  const isElementAbove = (scrollElement: HTMLElement, maximal: number, minimal: number) => {
    const rect = scrollElement.getBoundingClientRect();
    return maximal < rect.bottom && rect.bottom < minimal
  }

  addEventListener("scroll", (event) => {
    if (!(isElementAbove(personalData, -100000, -270)))
      scrollAnimation(personalData, joshua, top_joshua_separator, joshua_data_separator, cv_header, content_personal_sections, "30rem")
    if (isElementAbove(personalData, -2480, -270)) {
      cv_header.style.marginTop = "0rem"
      scrollAnimation(cv, cv_header, joshua_cv_separator, data_cv_separator, skills_header, cv_sections, "30rem")
      for (let i = 0; i < content_personal_sections.length; i++) {
        content_personal_sections[i].style.display = "none"
      }
    }
    if (isElementAbove(cv, -2000, -270)) {
      skills_header.style.marginTop = "0rem"
      scrollAnimation(skills, skills_header, cv_skills_separator, data_skills_separator, contact_header, skills_sections, "20rem")
      for (let i = 0; i < cv_sections.length; i++) {
        cv_sections[i].style.display = "none"
      }
    }

    //contact_content.classList.toggle('scaleOne', isElementOnScreen(contact_header))
    contact_content.classList.add(isElementOnScreen(contact_header) ? 'scaleOne' : 'scalePointSeven')
    contact_content.classList.remove(isElementOnScreen(contact_header) ? 'scalePointSeven' : 'scaleOne')
    contact_content.style.marginTop = isElementOnScreen(contact_header) ? "4rem" : "0rem"

  });


  const scrollAnimation = (targetData: HTMLElement, targetHeader: HTMLElement, separatortop?: HTMLElement, separatorbtm: HTMLElement, lowerHeader?: HTMLElement, targetDataContent?: HTMLElement, by: string) => {
    const isOnScreen = isElementOnScreen(targetData)
    const dataAbove = isElementAbove(targetData, -2100, -270)
    targetHeader.style.marginTop = "0rem"
    targetData.classList.toggle('scale', isOnScreen);
    if (targetDataContent) {
      let lastChild = targetDataContent.length - 1
      for (let i = 0; i <= lastChild; i++) {
        targetDataContent[i].addEventListener("mouseover", () => {
          targetDataContent[i].style.paddingTop = "12rem"
        })
        targetDataContent[i].addEventListener("mouseout", () => {
          targetDataContent[i].style.paddingTop = "0rem";
        });
        targetDataContent[i].style.display = isOnScreen ? "block" : "none";
      }
    }
    targetHeader.classList.toggle('fixed_content', !isOnScreen);
    targetHeader.style.marginLeft = !isOnScreen ? "0" : "1rem"
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
const OpenMail = () => {
  let body = document.getElementById("Email_body")
  let subject = document.getElementById("Email_subject")

  // "mailto:m.mustermann@domain.de?body=Hallo%20Max,%0D%0A%0D%0Ahier%20steht%20die%20Nachricht."
  // "mailto:m.mustermann@domain.de?subject=Hier%20steht%20der%20Betreff&amp;body=Hallo%20Max,%0D%0A%0D%0Ahier%20steht%20die%20Nachricht."

  body = URI.encode(body.value)
  subject = URI.encode(subject.value)
  let URIString = `mailto:joshua.daniel.koch@gmail.com?subject=${subject}&body=${body}`
  console.log(URIString)
  window.location.href = URIString

}
</script>

<template>
  <div class="center">
    <div style="margin-bottom:85rem; display: none" id="top_joshua_separator"></div>
    <div class="center" id="joshua">
      <h1 class="xl_text" style="margin: 0 0 -2rem 0;">Joshua-Daniel Koch</h1>
      <h3> Fachinformatiker in Fachrichtung Anwendungsentwicklung</h3>
    </div>
    <div style="margin-bottom:100rem" id="joshua_data_separator"></div>
    <div class="flexContainer" id="personalData">
      <div class="flip-card">
        <div class="flip-card-inner" id="content_personal">
          <div class="flip-card-front"><p> Technik </p></div>
          <div class="flip-card-back">
            <p>Joshua hat seine Interesse an Technik schon früh gefunden. Allerdings wusste er nicht genau, was er in
              der
              Branche machen könnte und entschied sich erstmal
              andere Wege einzugehen. Trotzdem hat er sich immer wieder mit dem Thema beschäftigt und hat somit auch
              schon
              früh ein Grundwissen aneignen können.</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner" id="content_personal">
          <div class="flip-card-front"><p> Digitale Trends </p></div>
          <div class="flip-card-back">
            <p>Digitale Trends spielen im Leben von Joshua eine große Rolle. Er nutzt Soziale Medien und erkennt
              aktuelle
              Trends. Somit hat er ein gutes Verstädnis, welche
              Designs und Darstellungen momentan modern sind und wie man diese Umsetzten kann. Da Joshua großes
              Interesse
              hat an der Umsetzung von Design, aber auch funktionalität,
              hat er eine perfekte Balance zwischen Theorie und Praxis im Bereich Back- und Frontend.</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner" id="content_personal">
          <div class="flip-card-front"><p> Beginn in der Branche mit 18 </p></div>
          <div class="flip-card-back">
            <p>Mit dem Programmieren hat Joshua mit 18 angefangen. Hier hat er zunächst mit der Programmiersprache "C#"
              begonnen. Mit dem Anfang der Ausbildung bei der comNET GmbH
              hat sich der Fokus auf "Python" und "JavaScript" gelegt. Aber auch andere Sprachen wie Java oder C++ hat
              er
              sich privat angeeignet.</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner" id="content_personal">
          <div class="flip-card-front"><p> Gewissenhafte Arbeit </p></div>
          <div class="flip-card-back">
            <p>Das Fachgebiet, für welches sich Joshua entschieden hat, ist die Webentwicklung. Er interessiert sich für
              den
              Aufbau und design der Anwendung
              aber auch für die Struktur einer Datenbank und dessen Anbindung. Zusätzlich möchte er sich im Gebiet
              Appentwicklung und Spieleentwicklung ausdehnen.</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner" id="content_personal">
          <div class="flip-card-front"><p> Entwicklung und Programmieren </p></div>
          <div class="flip-card-back">
            <p>Das Fachgebiet, für welches sich Joshua entschieden hat, ist die Webentwicklung. Er interessiert sich für
              den
              Aufbau und design der Anwendung
              aber auch für die Struktur einer Datenbank und dessen Anbindung. Zusätzlich möchte er sich im Gebiet
              Appentwicklung und Spieleentwicklung ausdehnen.</p>
          </div>
        </div>
      </div>
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
      <div style="z-index: 12;position: relative; height: 20.5rem; background-color: transparent; box-shadow: none">
        <div id="content_cv" style="z-index: 12; position: absolute; top: -1rem; left: -1rem">
          <p>Persönliche Daten</p>
        </div>
        <section style="z-index: 11;position: absolute; top: 0; left: 0; height: 12.5rem; width: inherit"
                 id="cv_sections">
          <p>Joshua-Daniel Koch ist am 15. September 2001 in Hannover geboren und ist zum heutigen Stand ledig. Er
            besitzt die deutsche
            Staatsangehörigkeit. Joshua Interessiert sich für Programmieren und Designen. Das sieht man auch an seinem
            regelmäßigen Zeichnen.</p>
          <span style="font-size: 2rem; margin-top: -2rem">&#8964;</span>
        </section>
      </div>
      <div style="z-index: 10;position: relative; height: 20.5rem; background-color: transparent; box-shadow: none">
        <div id="content_cv" style="z-index: 10; position: absolute; top: -1rem; left: -1rem">
          <p>Fachhoch- schulreife</p>
        </div>
        <section style="z-index: 9;position: absolute; top: 0; left: 0; height: 12.5rem; width: inherit"
                 id="cv_sections">
          <p>Joshua konnte mit Abschluss der 12. Klasse, sowie der Ausbildung bei der comNET GmbH seine
            Fachhochschulreife
            ergattern. Im schulischen Teil bestand er die Fachhochschulreife mit dem Notendurchschnitt von 2.7
            Den erweiterten Sekundarabschluss I bestand Joshua sogar mit einem Notendurchschnitt von 1.6. Seine
            Interessen
            lagen hierbei im Fokus bei Kunst und Mathe.</p>
          <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
        </section>
      </div>
      <div
          style="margin-top: -8rem; z-index: 8;position: relative; height: 20.5rem; background-color: transparent; box-shadow: none">
        <div id="content_cv" style="z-index: 8; position: absolute; top: -1rem; left: -1rem">
          <p>Berufserfahrung</p>
        </div>
        <section style=" z-index: 7;position: absolute; top: 0; left: 0; height: 12.5rem; width: inherit"
                 id="cv_sections">
          <p>Durch seine vielfältigen Praktika hat Joshua schon viele Bereiche abgedeckt und ist sich somit sicher, dass
            die IT das Richtige für ihn ist. Er hat beispielsweise ein
            Zweiwöchiges Praktikum als Fahrzeuglackierer absolviert. Zusätzlich hat er auch erste Erfahrungen in der
            Floristik. Das Praktikum und die Ausbildung hat Joshua jedoch
            gezeigt, dass Programmieren das Gebiet ist, in welchem er sich am meisten entfalten kann!</p>
          <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
        </section>
      </div>
      <div
          style="margin-top: -8rem;z-index: 6;position: relative; height: 20.5rem; background-color: transparent; box-shadow: none">
        <div id="content_cv" style="z-index: 6; position: absolute; top: -1rem; left: -1rem">
          <p>Schulische Laufbahn</p>
        </div>
        <section style="z-index: 5;position: absolute; top: 0; left: 0; height: 12.5rem; width: inherit"
                 id="cv_sections">
          <p>Joshua besuchte die Grundschule Entenfang von 2008-2012. Von 2012 bis 2018 erreichte er seinen erweiterten
            Sekundarabschluss I und erlangte auch die Fachhochschulreife im Zeitraum 2018-2020.
            2020-2024 hat er nun Seine Ausbildung absolvieren können.</p>
          <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
        </section>
      </div>
      <div
          style="margin-top: -8rem;z-index: 4;position: relative; height: 20.5rem; background-color: transparent; box-shadow: none">
        <div id="content_cv" style="z-index: 4; position: absolute; top: -1rem; left: -1rem">
          <p>Engagement</p>
        </div>
        <section style="z-index: 3;position: absolute; top: 0; left: 0; height: 12.5rem; width: inherit"
                 id="cv_sections">
          <p>Joshua Koch zeigt viel Engagement und kann komplexe Probleme mit großer Kreativität lösen. Rückschritte
            stören ihn nicht und freut sich über konstruktive Kritik.</p>
          <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
        </section>
      </div>
      <div
          style="margin-top: -8rem; z-index: 2;position: relative; height: 20.5rem; background-color: transparent; box-shadow: none">
        <div id="content_cv" style="z-index: 2; position: absolute; top: -1rem; left: -1rem">
          <p>Motivation</p>
        </div>
        <section style="z-index: 1;position: absolute; top: 0; left: 0; height: 12.5rem; width: inherit"
                 id="cv_sections">
          <p>Motivation wird bei Joshua großgeschrieben. Er ist ambitioniert an seinen Aufgaben und erreicht äußerst
            gute
            Ergebnisse, vorallem wenn sein Interesse geweckt wurde. Er macht nicht
            halt, bevor er ein Ergebnis erreich hat, welches ihn selbst zufriedenstellt.</p>
          <span style="font-size: 2rem; margin-top: -1rem">&#8964;</span>
        </section>
      </div>

    </div>
    <!--    <h3>Lebenslauf</h3>-->
    <!--    <p>Ich Konnte meine Schullaufbahn mit Bravur bestehen und habe immer Engagement und Motivation gezeigt.-->
    <!--      So habe ich mein Erweiterten Sekundarabschluss I mit einem Notendurchschnitt von 1.6 bestehen können. </p>-->

    <div style="margin-bottom:100rem; display: none" id="cv_skills_separator"></div>
    <div class="center" id="skills_header">
      <h1 class="xl_text">Skills</h1>
    </div>
    <div style="margin-bottom:115rem" id="data_skills_separator"></div>
    <div class="content_grid" id="skills">
      <div id="content_skills" class="ContentScrollLeft" style="z-index: 12;">
        <p id="skillHeader"> Vue.js </p>
        <p id="skillContent">Joshua-Daniel Koch ist am 15. September 2001 in Hannover geboren und ist zum heutigen Stand
          ledig. Er besitzt
          die deutsche
          Staatsangehörigkeit. Joshua Interessiert sich für Programmieren und Designen. Das sieht man auch an seinem
          regelmäßigen Zeichnen.</p>
      </div>
      <div id="content_skills" class="ContentScrollLeft" style="z-index: 12;">
        <p id="skillHeader"> Django </p>
        <p id="skillContent">Joshua-Daniel Koch ist am 15. September 2001 in Hannover geboren und ist zum heutigen Stand
          ledig. Er besitzt
          die deutsche
          Staatsangehörigkeit. Joshua Interessiert sich für Programmieren und Designen. Das sieht man auch an seinem
          regelmäßigen Zeichnen.</p>
      </div>
      <div id="content_skills" class="ContentScrollLeft" style="z-index: 12;">
        <p id="skillHeader"> HTML / CSS </p>
        <p id="skillContent">Joshua-Daniel Koch ist am 15. September 2001 in Hannover geboren und ist zum heutigen Stand
          ledig. Er besitzt
          die deutsche
          Staatsangehörigkeit. Joshua Interessiert sich für Programmieren und Designen. Das sieht man auch an seinem
          regelmäßigen Zeichnen.</p>
      </div>
      <div id="content_skills" class="ContentScrollLeft" style="z-index: 12;">
        <p id="skillHeader"> Javascript / Typescript </p>
        <p id="skillContent">Joshua-Daniel Koch ist am 15. September 2001 in Hannover geboren und ist zum heutigen Stand
          ledig. Er besitzt
          die deutsche
          Staatsangehörigkeit. Joshua Interessiert sich für Programmieren und Designen. Das sieht man auch an seinem
          regelmäßigen Zeichnen.</p>
      </div>
      <div id="content_skills" class="ContentScrollLeft" style="z-index: 12;">
        <p id="skillHeader"> FastAPI </p>
        <p id="skillContent">Joshua-Daniel Koch ist am 15. September 2001 in Hannover geboren und ist zum heutigen Stand
          ledig. Er besitzt
          die deutsche
          Staatsangehörigkeit. Joshua Interessiert sich für Programmieren und Designen. Das sieht man auch an seinem
          regelmäßigen Zeichnen.</p>
      </div>
      <div id="content_skills" class="ContentScrollLeft" style="z-index: 12;">
        <p id="skillHeader"> SQL </p>
        <p id="skillContent">Joshua-Daniel Koch ist am 15. September 2001 in Hannover geboren und ist zum heutigen Stand
          ledig. Er besitzt
          die deutsche
          Staatsangehörigkeit. Joshua Interessiert sich für Programmieren und Designen. Das sieht man auch an seinem
          regelmäßigen Zeichnen.</p>
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
    <div class="contact_field scalePointSeven" id="contact_content">
      <div class="contact_grid">
        <div>
          <p>Wenn Sie Fragen oder Interesse haben, können Sie mir hier gerne eine Email hinterlassen!</p>
        </div>
        <div>
          <img src="../media/output-onlinepngtools%20(1).png" alt="" class="img_round ">
        </div>
      </div>
      <input type="text" placeholder="Betreff" id="Email_subject">
      <textarea name="Email_body" id="Email_body" cols="30" rows="10" placeholder="Nachricht"></textarea>

      <button type="button" @click="OpenMail()">E-Mail Vorlage Öffnen</button>
      <p style="font-size: .7rem">Joshua-Daniel Koch - Joshua.Daniel.Koch@gmail.com - +49 176 345 18 116 </p>

    </div>
  </div>

</template>

<style scoped>

</style>