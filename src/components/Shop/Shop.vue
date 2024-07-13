<script setup lang="ts">
import Commisions from "./Commisions.vue";
import HomeShop from "./HomeShop.vue";
import Contact from "../Contact.vue";
import { onMounted, ref } from "vue";
import TShirt from "./TShirt.vue";
import Tattoo from "./Tattoo.vue";

const digital = ref<HTMLElement | null>(null);
const tshirt = ref<HTMLElement | null>(null);
const tattoo = ref<HTMLElement | null>(null);
const contact = ref<HTMLElement | null>(null);

const isElementAbove = (
  topElement: HTMLElement,
  bottomElement: HTMLElement
) => {
  const topRect = topElement;
  bottomElement.style.top =
    topRect.offsetTop + topRect.offsetHeight + 500 + "px";
};

onMounted(async () => {
  for (let i = 0; i < 3; i++) {
    if (digital.value && tshirt.value && tattoo.value && contact.value) {
      isElementAbove(digital.value, tshirt.value);
      isElementAbove(tshirt.value, tattoo.value);
      isElementAbove(tattoo.value, contact.value);
    }
    await new Promise((r) => setTimeout(r, 200));
  }
});
</script>

<template>
  <HomeShop />

  <div
    class="personal_container bg_seperator"
    style="position: absolute"
    id="content_digital"
    ref="digital"
  >
    <Commisions />
  </div>

  <div class="personal_container bg_seperator" id="content_tshirt" ref="tshirt">
    <TShirt />
  </div>

  <div class="personal_container bg_seperator" id="content_tattoo" ref="tattoo">
    <Tattoo />
  </div>

  <div
    class="personal_container bg_seperator"
    id="content_contact"
    ref="contact"
  >
    <Contact />
  </div>
</template>

<style scoped></style>
