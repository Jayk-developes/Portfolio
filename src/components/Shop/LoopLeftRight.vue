<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  imgs: string[],
  imgMix?: string[],
  urlPrefixMix?: string,
  urlPrefix: string
}>()

let leftScroll = props.imgMix ? `calc(-${10 * (18 + 3)}rem)` : `calc(-${props.imgs.length * (18 + 3)}rem)`
let imgURLList: string[] = [];
let imgMixURLList: string[] = []
const imgContainer = ref<HTMLDivElement | null>(null)
const imgMixElementList = ref<NodeListOf<HTMLElement> | null>(null)
const imgMixElementListDup = ref<NodeListOf<HTMLElement> | null>(null)
const imgElementList = ref<NodeListOf<HTMLElement> | null>(null)
const imgElementListDup = ref<NodeListOf<HTMLElement> | null>(null)

if (props.imgMix) {
  for (let i = 0; i < 10; i++) {
    let RandomImg = Math.floor(Math.random() * props.imgs.length)
    let RandomImgMix = Math.floor(Math.random() * props.imgMix.length)
    imgURLList.push(new URL(props.urlPrefix + props.imgs[RandomImg], import.meta.url).href)
    imgMixURLList.push(new URL(props.urlPrefixMix + props.imgMix[RandomImgMix], import.meta.url).href)
  }
} else {
  props.imgs.forEach((img: string) => {
    imgURLList.push(new URL(props.urlPrefix + img, import.meta.url).href)
  })


}

onMounted(() => {
  const marginTopList = ["0", "3rem", "-1rem"]
  if (imgMixElementList.value && imgMixElementListDup.value && imgElementList.value && imgElementListDup.value) {
    for (let i = 0; i < imgMixElementList.value?.length; i++) {
      let randomMarginTop = Math.floor(Math.random() * marginTopList.length)
      let randomHue = Math.floor(Math.random() * 10) * 36
      imgMixElementList.value[i].style.marginTop = marginTopList[randomMarginTop]
      imgMixElementListDup.value[i].style.marginTop = marginTopList[randomMarginTop]

      imgElementList.value[i].style.filter = `invert(.3) sepia(1%) saturate(150) hue-rotate(${randomHue}deg)`
      imgElementListDup.value[i].style.filter = `invert(.3) sepia(1%) saturate(150) hue-rotate(${randomHue}deg)`
    }
  }
})

</script>

<template>
  <div class="imgContainer img" :id="'imgContainer_' + urlPrefix" ref="imgContainer">
    <img v-for="img in imgURLList" ref="imgElementList" :src="img" alt=""
         onclick="window.open('https://www.instagram.com/jayk_draws')">
    <img v-for="img in imgURLList" ref="imgElementListDup" :src="img" alt=""
         onclick="window.open('https://www.instagram.com/jayk_draws')">
    <div v-if="props.imgMix" class="imgMix imgContainer">
      <img class="imgMixSingle" ref="imgMixElementList" v-for="img in imgMixURLList" :src="img" alt=""
           onclick="window.open('https://www.instagram.com/jayk_draws')">
      <img class="imgMixSingle" ref="imgMixElementListDup" v-for="img in imgMixURLList" :src="img" alt=""
           onclick="window.open('https://www.instagram.com/jayk_draws')">
    </div>
    <div class="bgDimmer"></div>
  </div>

</template>

<style scoped>

.imgContainer {
  position: relative;
  overflow: hidden;
  display: flex;
  height: 20rem;
  gap: 3rem;
  border-radius: .75rem;
  box-shadow: 0 0 1.5rem .5rem #000a inset;
}

.img {
  width: 80%;
  margin: 2rem 10%;
}

img {
  z-index: 10;
  width: 18rem;
  height: 18rem;
  object-fit: cover;
  flex: 0 0 auto;
  position: relative;
  border-radius: .5rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all ease-in-out .2s;

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.05);
  }

  &:first-child {
    animation: LeftToRight infinite 20s linear;
    margin-left: -10rem;
  }
}

@keyframes LeftToRight {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: v-bind(leftScroll);
  }
}

.bgDimmer {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0007;
}

.imgMix {
  position: absolute;
}

.imgMixSingle {
  pointer-events: none;
  margin-top: -1rem;
  padding: 7rem;
  border-radius: 8rem;
}


</style>