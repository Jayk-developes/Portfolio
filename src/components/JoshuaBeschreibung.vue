<script setup lang="ts">

import {ref} from "vue";

const date = new Date()

const alter = date.getFullYear() - 2001

</script>

<template>
<div>
  <h1>Joshua-Daniel Koch</h1>
  <p>Ich bin Joshua-Daniel Koch.
  Ich bin geboren am 15.09.2001 geboren, und bin somit {{alter}} Jahre alt.
  Ich wurde in Hannover geboren und bin dort auch mein ganzes Leben aufgewachsen. Ich bin sehr Loyal zu meiner Heimat.</p>
  <p>Als ich mit 18 Jahren erkannt habe, dass ich ein großes Interesse am Programmieren habe, habe ich mich entschlossen
  gezielt mir diesen Bereich anzueignen. Mit Meiner Ausbildung bei der comNET Solutions GmbH wurde mir bewusst, wie viel
  Spaß mir diese Arbeit bringt und was für ein Potential in mir lebt.
  Dennoch ist Programmieren nicht das einzige, was mich interessiert. So habe ich großes Interesse an Design, wie zum Beispiel
  im Bereich "Webdesign" oder "Gamedesign". Aber auch für Technik im allgemeinen konnte ich mein Interessengebiet finden.
  Hier hab ich beispielsweise mich mit WLAN, Sensorik und Switching auseinandergesetzt. Weitere meiner Skills finden Sie
  unter dem Bereich Skills.</p>
</div>
</template>

<style scoped>

</style>