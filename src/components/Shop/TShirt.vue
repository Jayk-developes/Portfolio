<script setup lang="ts">
import LoopLeftRight from "./LoopLeftRight.vue";
import {ref} from "vue";

let tshirtColors = [
  "#fff",
  "#222",
  "#777",
  "#a77",
  "#7a7",
  "#77a",
  "#a7a",
  "#aa7",
  "#7aa",
]

const tShirtList: string[] = ["/tshirt.png", "/tshirtBack.png", "/tshirtV.png"]
const digitalArtList: string[] = ["/Ahri.jpg", "/Bruno.jpg", "/Diamond.jpg", "/DuaLipa.jpg", "/Frey.jpg", "/Jayk.jpg", "/Nier.jpg", "/Rose.jpg", "/Halsey.jpg", "/Detroid.jpg"]
const urlPrefixTShirt: string = "../../media/shop/tshirt"
let urlPrefixDigital = "../../media/shop/digitalArt"

const svgTshirt = ref<HTMLElement | null>(null)
const tshirtContainer = ref<HTMLElement | null>(null)
const svgTshirtFill = ref<HTMLElement | null>(null)
const selectedImage = ref<HTMLElement | null>(null)
const scaler = ref<HTMLElement | null>(null)
const selectedImageContainer = ref<HTMLElement | null>(null)

const loadReactivity = async () => {
  if (svgTshirt.value) {
    svgTshirt.value.style.height = svgTshirt.value.getBoundingClientRect().width * 1.25 + "px"
    while (!svgTshirtFill.value) {
      svgTshirtFill.value = svgTshirt.value.contentWindow.document.getElementById("tshirtFill")
      await new Promise(r => setTimeout(r, 200));
    }
    if (tshirtContainer.value && selectedImage.value && selectedImageContainer.value) {
      tshirtContainer.value.style.height = svgTshirt.value?.getBoundingClientRect().height < window.innerHeight ? svgTshirt.value?.getBoundingClientRect().height + "px" : window.innerHeight * 0.7 + "px"
      svgTshirt.value.style.height = svgTshirt.value?.getBoundingClientRect().height < window.innerHeight ? svgTshirt.value?.getBoundingClientRect().height + "px" : window.innerHeight * 0.7 + "px"
      selectedImage.value.style.height = svgTshirt.value?.getBoundingClientRect().height * 0.3 + "px"
      selectedImageContainer.value.style.height = selectedImage.value.getBoundingClientRect().height * 1.5 + "px"
      selectedImageContainer.value.style.width = selectedImage.value.getBoundingClientRect().width * 1.5 + "px"
    }
  }

  let colorCircles = document.querySelectorAll("div#leftSelect div, div#rightSelect div") as NodeListOf<HTMLDivElement>
  while (!colorCircles) {
    colorCircles = document.querySelectorAll("div#leftSelect div, div#rightSelect div")
  }
  if (colorCircles) {
    colorCircles.forEach((circle) => {
      circle.style.height = circle.getBoundingClientRect().width + "px"
    })
  }
}

const recolorTshirt = (color: string | any) => {
  if (typeof color !== "string") {
    color = typeof color !== "string" ? color.target.value : color
  }
  if (svgTshirtFill.value) {
    svgTshirtFill.value.style.fill = color
  }
}

const showImage = (image) => {
  image = image.target.files[0]
  if (image && image.type.startsWith("image/") && selectedImage.value) {
    const reader = new FileReader();
    reader.onload = function (e) {
      if (selectedImage.value && e.target) {
        selectedImage.value.src = e.target.result;
      }
    };
    reader.readAsDataURL(image);
    scaler.value.style.opacity = "1"
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadReactivity()
  window.addEventListener("resize", async () => {
    await loadReactivity()
  })
  window.onzoom = loadReactivity()

  selectedImage.value?.addEventListener("mousedown", (e) => {
    let initMarginTop = parseInt(selectedImage.value.style.marginTop) || 0;
    let initMarginLeft = parseInt(selectedImage.value.style.marginLeft) || 0;
    const initMousePosY = e.screenY;
    const initMousePosX = e.screenX;
    const Boundary = svgTshirtFill.value?.getBoundingClientRect()
    let imgBoundary: any;
    if (selectedImage.value) {
      imgBoundary = selectedImage.value.getBoundingClientRect()
    }
    if (selectedImage.value) {
      selectedImage.value.style.marginTop = selectedImage.value.style.marginTop || "0"
      selectedImage.value.style.marginLeft = selectedImage.value.style.marginLeft || "0"
    }
    if (Boundary) {
      const maxMarginTop = ((Boundary.height - imgBoundary.height) / -7)
      const maxMarginBottom = ((Boundary.height - imgBoundary.height) / 2)
      const maxMarginLeft = ((Boundary.width - imgBoundary.width) / -6)
      const maxMarginRight = ((Boundary.width - imgBoundary.width) / 6)


      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (Boundary && selectedImage.value) {
          const margin: number[] = [initMarginTop + moveEvent.screenY - initMousePosY, initMarginLeft + moveEvent.screenX - initMousePosX]

          selectedImage.value.style.marginTop = scaler.value.style.marginTop = maxMarginTop < margin[0] && margin[0] < maxMarginBottom
              ? `${margin[0]}px`
              : maxMarginTop > margin[0]
                  ? `${maxMarginTop + 2}px`
                  : `${maxMarginBottom - 2}px`;

          selectedImage.value.style.marginLeft = scaler.value.style.marginLeft = maxMarginLeft < margin[1] && margin[1] < maxMarginRight
              ? `${margin[1]}px`
              : maxMarginLeft > margin[1]
                  ? `${maxMarginLeft + 2}px`
                  : `${maxMarginRight - 2}px`;
        }
      };


      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        svgTshirt.value?.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      svgTshirt.value?.addEventListener("mouseup", handleMouseUp);
    }
  });
  scaler.value?.addEventListener("mousedown", (mouseEvent: MouseEvent) => {
    const initImgSize = parseInt(selectedImage.value.style.height)
    const marginTop = parseInt(scaler.value.style.marginTop) || 0
    const initMousePosY = mouseEvent.screenY;
    const initMousePosX = mouseEvent.screenX;

    scaler.value.style.opacity = "0"

    const HandleMouseMove = (mouseEvent: MouseEvent) => {
      scaler.value.style.marginTop = (marginTop + mouseEvent.screenY - initMousePosY) * 0.9 + "px"
      selectedImage.value.style.height = initImgSize + mouseEvent.screenY - initMousePosY + "px"
    }

    const handleMouseUp = () => {
      scaler.value.style.opacity = "1"
      document.removeEventListener("mousemove", HandleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      svgTshirt.value?.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", HandleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    svgTshirt.value?.addEventListener("mouseup", handleMouseUp);
  })
})
</script>

<template>
  <div>
    <div class="clip-text clip-text_one" id="personal">T-Shirt Designer</div>
    <div id="TShirtExamples" class="loop_3">
      <LoopLeftRight :imgs="tShirtList" :url-prefix="urlPrefixTShirt" :img-mix="digitalArtList"
                     :url-prefix-mix="urlPrefixDigital"/>
    </div>
    <div class="TShirtDesigner" ref="tshirtContainer">
      <h1 style="white-space: nowrap">Design your Shirt!</h1>
      <div id="leftSelect" class="selector">
        <div>
          <img src="../../media/shop/colorSelect.png" alt="">
          <input type="color" name="" id="colorTshirtSelector" value="#ffffff" @input="recolorTshirt">
        </div>
        <div v-for="color in tshirtColors" :style="'background-color:' + color" @click="recolorTshirt(color)">
        </div>
      </div>
      <div>
        <div class="selectedImage" ref="selectedImageContainer">
          <img src="#" alt="" ref="selectedImage" class="selectedImage" draggable="false">
          <div class="scaler" ref="scaler" draggable="false"><img src="src/media/shop/resizeIcon.png" draggable="false" alt="" class="scaleIcon">
          </div>
        </div>
        <iframe class="tshirt" ref="svgTshirt" id="svgTshirt" src="src/media/shop/tshirt/tshirt.svg" width="100%"
                height="auto"></iframe>
      </div>
      <div id="rightSelect" class="selector">
        <div id="localFile"><img src="src/media/shop/imgIcon.png" alt=""><input type="file" name="selectFile"
                                                                                id="selectFile" accept="image/*"
                                                                                @input="showImage"></div>
        <div id="internetFile"><img src="src/media/shop/linkIcon.png" alt=""></div>
        <div id="takeFotoFile"><img src="src/media/shop/cameraIcon.png" alt=""></div>
        <div id="save" style="background-color:#99f;"><img src="src/media/shop/saveIcon.png" alt=""></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.TShirtDesigner {
  margin-top: 5rem;
  padding-top: 1rem;
  position: relative;
  width: 80%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  margin-left: 10%;
  border-radius: .5rem;
  background-color: #fff;

  h1 {
    position: absolute;
    color: #000;

    top: 0;
    left: 50%;
    transform: translate(-50%);

  }
}

.selector {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15% 5%;
  justify-content: space-around;
  align-items: center;
  background-color: #334;
  border-radius: 2rem;
  gap: 2rem;
  overflow: hidden;
  padding: 1.1rem 0;
  box-shadow: 0 0 1rem #0007;

  div {
    position: relative;
    width: 60%;
    margin: 0 20%;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 .5rem .25rem #0007 inset;
    cursor: pointer;
    transition: all ease-in-out .2s;
    border: transparent;

    input {
      cursor: pointer;
      width: 20em;
      height: 20em;
      margin: -2rem 0 -10rem -2rem;

    }

    img {
            -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      pointer-events: none;
      margin: 30% 0 0 0;
      position: absolute;
      background-size: cover;
      width: 80%;
      filter: drop-shadow(0 0 .5rem #000);
    }
  }

  div:hover {
    box-shadow: none;
  }
}

#rightSelect {
  justify-content: space-around;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    background-size: contain;

    img {

      margin-top: 0;
      width: 80%;
      filter: drop-shadow(0 0 0 #0000);

    }
  }
}

iframe, img {
        -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
}

.tshirt {
  border: none;
}

.selectedImage {
  z-index: 1000;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scaler {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: row-resize;
  opacity: 0;
  position: absolute;
  width: 10rem;
  height: 10rem;
  background: radial-gradient(circle, rgba(153, 153, 255, 1) 0%, rgba(153, 153, 255, 1) 15%, rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0) 100%);
  border-radius: 50%;
  top: 100%;
  left: 100%;
  transform: translate(-50%, -50%);
  transition: all ease-in-out .2s;
}

.scaleIcon {
          -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  pointer-events: none;
  width: 1.25rem;
}
</style>