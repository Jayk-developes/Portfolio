<script setup lang="ts">
import URI from "urijs";
import {onMounted, ref} from "vue";

const paper = ref<HTMLElement|null>(null)

onMounted(() => {
  paper.value.style.height = paper.value.getBoundingClientRect().width * 1.5 +"px"
})

const OpenMail = () => {
    let body = document.getElementById("Email_body")
    let subject = document.getElementById("Email_subject")

    // "mailto:m.mustermann@domain.de?body=Hallo%20Max,%0D%0A%0D%0Ahier%20steht%20die%20Nachricht."
    // "mailto:m.mustermann@domain.de?subject=Hier%20steht%20der%20Betreff&amp;body=Hallo%20Max,%0D%0A%0D%0Ahier%20steht%20die%20Nachricht."

    body = URI.encode(body.value)
    subject = URI.encode(subject.value)
    let URIString = `mailto:joshua.daniel.koch@gmail.com?subject=${subject}&body=${body}`
  window.location.href = URIString

  }
</script>

<template>
 <div class="clip-text clip-text_one" id="personal">Kontaktiere Mich!</div>
  <div style="margin-top: 3rem;" class="flex_container">
    <div class="content">
      <div class="content_paper" id="contact_content" ref="paper">
        <div class="paper_pin"></div>
        <p style="line-height: 0">Betreff</p>
        <input type="text" placeholder="Betreff" id="Email_subject">
        <p style="line-height: 0">Inhalt</p>
        <textarea name="Email_body" id="Email_body" placeholder="Inhalt"></textarea>
        <input type="button" value="E-mail öffnen" @click="OpenMail()">
      </div>
    </div>
  </div>
</template>

<style scoped>
::placeholder {
  color: #aaa !important;
  opacity: 0.5;
}

::-ms-input-placeholder { /* Edge 12-18 */
  color: red;
}

input, textarea {
  width: 80% !important;
  position: relative !important;
}

#Email_body {
  height: 50%;
}



</style>