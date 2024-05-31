<script setup lang="ts">

import {onMounted, ref} from "vue";

const props = defineProps<{
  priceList: any
  title: string
}>()

const priceList = ref<HTMLElement | null>(null)
const isLessThan800 = ref<boolean>(false)

onMounted(() => {
  isLessThan800.value = window.innerWidth < 800
  priceList.value.style.top = -(priceList.value.getBoundingClientRect().height) + "px"
  priceList.value.style.fontSize = window.innerWidth / 400 >= 1 ? "1rem" : window.innerWidth / 400 + "rem"

  if (window.innerWidth < 800 && window.innerWidth < window.innerHeight) {
    priceList.value.style.width = "2rem"
    priceList.value.style.paddingRight = "-2rem"
    priceList.value.style.paddingLeft = "2rem"
    priceList.value.style.marginLeft = "-1rem"

  } else {
    priceList.value.style.width = "20rem"
  }


  window.addEventListener("resize", () => {
    isLessThan800.value = window.innerWidth < 800
    console.log(isLessThan800)
    priceList.value.style.top = -(priceList.value.getBoundingClientRect().height) + "px"
    priceList.value.style.fontSize = window.innerWidth / 400 >= 1 ? "1rem" : window.innerWidth / 400 + "rem"

    if (window.innerWidth < 800 && window.innerWidth < window.innerHeight) {
      priceList.value.style.width = "2rem"
      priceList.value.style.paddingRight = "-2rem"
      priceList.value.style.paddingLeft = "2rem"
      priceList.value.style.marginLeft = "-1rem"

    } else {
      priceList.value.style.width = "20rem"
    }

  })
})

const expandPrice = () => {
  if (window.innerWidth < 800) {
    priceList.value.style.width = parseInt(priceList.value.style.width) > 2 ? "1.5rem" : "15rem"
  }
}

document.addEventListener("click", () => {
 if (window.innerWidth < 800) {
    priceList.value.style.width = "1.5rem"
  }
})

</script>

<template>
  <div class="digitalArtPriceList" ref="priceList" @click.stop="expandPrice">
    <div class="title" ref="title"><img src="../../media/Arrow-down.svg.png" alt="arrowDown" class="arrowShop"
                                        v-if="isLessThan800">
      <div v-for="char in props.title">{{ char }}</div>
    </div>
    <div v-for="(key, value) in props.priceList" class="priceContainer">
      <div>{{ value }}:</div>
      <div> {{ key }}</div>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.digitalArtPriceList {
  overflow: hidden;
  transition: all ease-in-out .2s;
}

@media screen and (max-width: 800px) {
  .priceContainer {
    padding-left: 1rem;
    transition: all ease-in-out .2s;
  }

  .title {
    position: absolute;
    width: 1.5rem;
    white-space: pre-line;
    flex-direction: column;

    div {
      height: 1.2rem;
      margin-left: -1.5rem;
    }
  }
}

.arrowShop {
  margin-left: -2.5rem;
  margin-top: -.5rem;
  margin-bottom: .25rem;
  width: 1.5rem;
  filter: invert(100%);
}

.arrowShop:hover {
  filter: invert(0);
}
</style>