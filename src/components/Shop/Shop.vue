<script setup lang="ts">
import NavbarShop from "./NavbarShop.vue";
import Commisions from "./Commisions.vue";
import HomeShop from "./HomeShop.vue";
import {onMounted, ref} from "vue";

const digital = ref<HTMLElement | null>(null);
const tshirt = ref<HTMLElement | null>(null);

const isElementAbove = (topElement: HTMLElement, bottomElement: HTMLElement) => {
  const topRect = topElement
  bottomElement.style.top = (topRect.offsetTop + topRect.offsetHeight + 500) + "px"
}

const isElementAboveBG = (topElement: HTMLElement, bgElement: HTMLElement) => {
  const topRect = topElement
  bgElement.style.top = (topRect.offsetTop + topRect.offsetHeight - 50) + "px"
}

onMounted(() => {
  isElementAbove(digital.value, tshirt.value)
})


</script>

<template>
  <NavbarShop/>
  <HomeShop/>

  <div class="personal_container bg_seperator" style="position: absolute" id="content_personal" ref="digital">
      <Commisions/>
  </div>

  <div class="personal_container bg_seperator"  id="content_cv" ref="tshirt">
      <TShirt/>
  </div>
</template>

<style scoped>

</style>