<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  imgs: string[],
  urlPrefix: string
}>()

let leftScroll = `calc(-${props.imgs.length * (18 + 3)}rem)`
let imgURLList: string[] = [];
const imgContainer = ref<HTMLDivElement | null>(null)

props.imgs.forEach((img: string) => {
  imgURLList.push(new URL(props.urlPrefix + img, import.meta.url).href)
})

</script>

<template>
  <div class="imgContainer" :id="'imgContainer_' + urlPrefix" ref="imgContainer">
    <img v-for="img in imgURLList" :src="img" alt="" onclick="window.open('https://www.instagram.com/jayk_draws')">
    <img v-for="img in imgURLList" :src="img" alt="" onclick="window.open('https://www.instagram.com/jayk_draws')">
    <div class="bgDimmer"></div>
  </div>

</template>

<style scoped>

.imgContainer {
  position: relative;
  overflow: hidden;
  width: 80%;
  display: flex;
  height: 20rem;
  gap: 3rem;
  margin: 2rem 10%;
  border-radius: .75rem;
  box-shadow: 0 0 1.5rem .5rem #000a inset;
}

img {
  z-index: 10;
  width: 18rem;
  height: 18rem;
  object-fit: cover;
  flex: 0 0 auto;
  position: relative;
  border-radius: .5rem;
  box-shadow: 0 .5rem .5rem #0003;
  margin: 1rem 0;
  cursor: pointer;
  transition: all ease-in-out .2s;

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.1);
  }

  &:first-child {
    animation: LeftToRight infinite 12s linear;
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


</style>