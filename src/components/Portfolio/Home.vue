<script setup lang="ts">

import {onMounted} from "vue";

onMounted(() => {

})

</script>

<template>
  <div class="bg_seperator"></div>
  <div class="clip-text clip-text_one">JOSHUA <br>
    <div id="Daniel">DANIEL</div>
    <br> KOCH
  </div>

  <div class="clip-text_one img_bg">
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #0006"></div>
  </div>
  <div style="display:flex; justify-content: center">
    <router-link :to="{name: 'shop'}" class="shopButton">Zum Shop! <img src="../../media/Arrow-down.svg.png" alt="arrowDown" class="arrowShop" id="arrowShop"></router-link>
  </div>
</template>

<style scoped>
</style>