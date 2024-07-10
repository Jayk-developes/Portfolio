<script setup lang="ts">
import LoopLeftRight from "./LoopLeftRight.vue";
import { onMounted, ref } from "vue";
import PriceListContainer from "./PriceListContainer.vue";
import { useRoute } from "vue-router";

let digitalArtList: string[] = [
  "/Ahri.jpg",
  "/Bruno.jpg",
  "/Diamond.jpg",
  "/DuaLipa.jpg",
  "/Frey.jpg",
  "/Jayk.jpg",
  "/Nier.jpg",
  "/Rose.jpg",
  "/Halsey.jpg",
  "/Detroid.jpg",
];
let urlPrefixDigital = "../../media/shop/digitalArt";

const priceObjectDigital = ref<HTMLImageElement | null>(null);
const digitalArtPriceList = ref<HTMLElement | null>(null);
const digitalArtHead = ref<HTMLElement | null>(null);
const digitalArtTorso = ref<HTMLElement | null>(null);
const digitalArtFull = ref<HTMLElement | null>(null);
const windowWidth = ref<string>("0px");
const priceList = [
  { Skizze: "10€", Lineart: "15€", Flat: "20€", Schattierung: "32€" },
  { Skizze: "18€", Lineart: "25€", Flat: "32€", Schattierung: "48€" },
  { Skizze: "25€", Lineart: "32€", Flat: "40€", Schattierung: "60€" },
];

const resizeObject = (obj: HTMLElement, obj2: HTMLElement) => {
  windowWidth.value = window.innerWidth * 0.96 + "px";
  if (window.innerWidth > window.innerHeight) {
    obj.style.height = window.innerHeight - 128 + "px";
    obj.style.width = "auto";
  } else {
    obj.style.width = window.innerWidth - 64 + "px";
    obj.style.height = "auto";
  }
  if (window.innerWidth <= obj.getBoundingClientRect().width * 2) {
    obj.style.float = "right";
  } else {
    obj.style.float = "none";
  }
  obj2.style.height = obj.getBoundingClientRect().height + "px";

  if (
    digitalArtHead.value &&
    digitalArtTorso.value &&
    digitalArtFull.value &&
    digitalArtPriceList.value
  ) {
    digitalArtHead.value.style.marginTop =
      digitalArtPriceList.value.getBoundingClientRect().height * 0.275 + "px";
    digitalArtTorso.value.style.marginTop =
      digitalArtPriceList.value.getBoundingClientRect().height * 0.575 + "px";
    digitalArtFull.value.style.marginTop =
      digitalArtPriceList.value.getBoundingClientRect().height * 0.875 + "px";
  }
};

onMounted(async () => {
  if (
    priceObjectDigital.value &&
    digitalArtPriceList.value &&
    useRoute().path == "/shop"
  ) {
    console.log(useRoute().path);

    resizeObject(priceObjectDigital.value, digitalArtPriceList.value);
    await new Promise((r) => setTimeout(r, 500));
    resizeObject(priceObjectDigital.value, digitalArtPriceList.value);

    window.addEventListener("resize", () => {
      if (priceObjectDigital.value && digitalArtPriceList.value) {
        resizeObject(priceObjectDigital.value, digitalArtPriceList.value);
      }
    });
  }
});
</script>

<template>
  <div>
    <div class="clip-text clip-text_one" id="personal">Commisions</div>
    <div id="digitalArt">
      <h1>DIGITAL ART</h1>
      <div id="digitalArtExamples" class="loop_3">
        <LoopLeftRight :imgs="digitalArtList" :url-prefix="urlPrefixDigital" />
      </div>
      <h1>PREISE</h1>
      <div id="digitalArtPriceList" ref="digitalArtPriceList">
        <div class="priceList" ref="digitalArtHead">
          <PriceListContainer :price-list="priceList[0]" title="KOPF" />
          <div class="actualSeparator" ref="actual"></div>
        </div>
        <div class="priceList" ref="digitalArtTorso">
          <PriceListContainer :price-list="priceList[1]" title="TORSO" />
          <div class="actualSeparator" ref="actual"></div>
        </div>
        <div class="priceList" ref="digitalArtFull">
          <PriceListContainer
            :price-list="priceList[2]"
            title="FULL ‎ ‎ BODY"
          />
          <div class="actualSeparator" ref="actual"></div>
        </div>
        <img
          class="img_price"
          src="../../media/shop/digitalArt/Frey.jpg"
          alt=""
          ref="priceObjectDigital"
          id="priceObjectDigital"
        />
      </div>
      <p>(Weitere Anfragen und Kosten auf Absprache verhandelbar)</p>
    </div>
  </div>
</template>

<style scoped>
.loop_3 {
  width: 100%;
}

#digitalArtPriceList {
  position: relative;
  width: 100%;
}

.actualSeparator {
  position: relative;
  width: v-bind(windowWidth);
  margin-left: -1rem;
  background-color: #fff;
}

.priceList {
  position: absolute;
  margin-top: v-bind(digitalArtHead);
}

.img_price {
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem #000a;
}
</style>
