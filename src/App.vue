<script setup lang="ts">

import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";

document.addEventListener("DOMContentLoaded", () => {
  let wallpaper = document.getElementById("wallpaper")

  onscroll = (event) => {
    const opacity = 1 - (window.pageYOffset / 1000)
    const scale = 1 + (window.pageYOffset / 5000)
    if (opacity <= 0) {
      wallpaper.style.display = "none"
    }
    else {
      wallpaper.style.display = "flex"
      wallpaper.style.opacity = opacity.toString()
      wallpaper.style.transform = "scale(" + scale.toString() + ")"
    }
  }


})

var overAElement = false

var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
  this.node.style.boxShadow = overAElement ? "0 0 1.25rem .5rem #ffaa00" : "0 0 1.25rem .5rem white";


};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 15; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .4;
    y += (nextDot.y - dot.y) * .4;

  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  overAElement = event.target.tagName == "A"
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
</script>

<template>
  <img src="./media/mountain.gif" alt="wallpaper" class="wallpaper" id="wallpaper">
  <div class="home_grid">
    <div><Navbar /></div>
    <div><Content /></div>
   <!-- <div><img src="./media/Joshua_Koch.jdpg" class="square fixed_img"></div> -->
  </div>
</template>

<style scoped>

</style>
