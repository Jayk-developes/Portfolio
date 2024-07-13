<script setup lang="ts">
import LoopLeftRight from "./LoopLeftRight.vue";
import { onMounted, ref } from "vue";
import PriceListContainer from "./PriceListContainer.vue";
import { useRoute } from "vue-router";

let digitalArtList: string[] = [
  "/2b.jpg",
  "/elf.png",
  "/boy.jpg",
  "/lunartear.png",
  "/demo.jpg",
  "/pipe.png",
  "/dog.jpg",
  "/powerpuff.png",
  "/peep.jpg",
  "/kh.jpg",
];
let urlPrefixDigital = "../../media/shop/tattoo";

const priceObjectTattoo = ref<HTMLImageElement | null>(null);
const digitalArtPriceList = ref<HTMLElement | null>(null);
const TattooPriceList = ref<HTMLDivElement | null>(null);
const digitalArtHead = ref<HTMLElement | null>(null);
const digitalArtTorso = ref<HTMLElement | null>(null);
const digitalArtFull = ref<HTMLElement | null>(null);
    const windowWidth = ref<string>("0px");
const priceList = [
  { Klein: "12€", Mittel: "18€", Gross: "25€"},
  { Skizze: "+0€", Lineart: "+7€", Einfarbig: "+12€"},
  { Skizze: "+0€", Lineart: "+7€", Schwarz: "+12€"},
];

const resizeObject = (obj: HTMLElement, obj2: HTMLElement) => {
    windowWidth.value = window.innerWidth * 0.96 + "px";
  obj.style.width = window.innerWidth * 0.65 + "px";

  if (TattooPriceList.value) {
    let list = TattooPriceList.value.querySelectorAll("section");
    if (window.innerWidth > 650) {
      list.forEach((item) => {
        item.style.fontSize = window.innerWidth * 0.01 + "px"
      });
    }
  }

  if (window.innerWidth <= obj.getBoundingClientRect().width * 2) {
    obj.style.float = "right";
  } else {
    obj.style.float = "none";
  }
  obj2.style.height = obj.getBoundingClientRect().height + "px";

  if (digitalArtHead.value && digitalArtTorso.value && digitalArtFull.value && digitalArtPriceList.value
  ) {
    digitalArtHead.value.style.marginTop =
      digitalArtPriceList.value.getBoundingClientRect().height * -.4 + "px";
    digitalArtTorso.value.style.marginTop =
      digitalArtPriceList.value.getBoundingClientRect().height * .2 + "px";
    digitalArtFull.value.style.marginTop =
      digitalArtPriceList.value.getBoundingClientRect().height * 0.8 + "px";
  }
};

onMounted(async () => {
  if (
    priceObjectTattoo.value &&
    digitalArtPriceList.value &&
    useRoute().path == "/shop"
  ) {
    resizeObject(priceObjectTattoo.value, digitalArtPriceList.value);

    await new Promise((r) => setTimeout(r, 500));
    resizeObject(priceObjectTattoo.value, digitalArtPriceList.value);

    window.addEventListener("resize", () => {
      if (priceObjectTattoo.value && digitalArtPriceList.value) {
        resizeObject(priceObjectTattoo.value, digitalArtPriceList.value);
      }
    });
  }
});
</script>

<template>
  <div>
    <div class="clip-text clip-text_one" id="personal">Tattoo Designer</div>
    <div id="digitalArt">
      <h1>TATTOO DESIGNS</h1>
      <div id="digitalArtExamples" class="loop_3">
        <LoopLeftRight :imgs="digitalArtList" :url-prefix="urlPrefixDigital" />
      </div>
    </div>

    <div id="digitalArtPriceList" ref="digitalArtPriceList">
      <div class="TattooPriceList" ref="TattooPriceList">
        <div class="priceList" ref="digitalArtHead">
            <PriceListContainer :price-list="priceList[0]" title="Größe"/>
        </div>
        <div class="priceList" ref="digitalArtTorso">
            <PriceListContainer :price-list="priceList[1]"  title="Details"/>
        </div>
        <div class="priceList" ref="digitalArtFull" >
            <PriceListContainer :price-list="priceList[2]" title="Schattierung"/>
        </div>
      </div>

      <img
        class="img_price"
        src="../../media/shop/tattoo/kh.jpg"
        alt=""
        ref="priceObjectTattoo"
        id="priceObjectDigital"
      />
    </div>
  </div>
</template>

<style scoped>
.loop_3 {
  width: 100%;
}

#digitalArtPriceList {
  display: grid;
  grid-template-columns: 30% auto;
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
  margin-left: -0.5em;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem #000a;
}
</style>
