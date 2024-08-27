<script setup lang="ts">
import LoopLeftRight from "./LoopLeftRight.vue";

const websiteList: string[] = ["/Portfolio.png", "/Crave.png", "/Booking.png"];
const urlPrefixWebsite: string = "../../media/shop/website";

const scrollToContact= () => {
  let contact = document.getElementById("contact_content")
  contact?.scrollIntoView({behavior: "smooth"})
}
</script>

<template>
  <div>
    <div class="clip-text clip-text_one" id="personal">Website Designer</div>
    <LoopLeftRight :imgs="websiteList" :url-prefix="urlPrefixWebsite" />
  </div>

  <div class="website" ref="digitalArtPriceList">
    <div>
      <h2>Jede Website ist verschieden vom Preis.</h2>
      <p>
        Bitte sende mir eine E-Mail für jede Anfrage bezüglich einer Website!
      </p>
      <input type="button" value="Kontakt" class="shopButton" @click="scrollToContact">
    </div>
  </div>
</template>

<style scoped>

</style>
