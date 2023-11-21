var overAElement = false,
    scroll_mouse_pos = 0,
    scroll_offset = 0,
    dots = [],
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
  this.node.style.boxShadow = overAElement ? "0 0 1rem .33rem #ff44ff" : "0 0 .5rem .25rem white";


};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 10; i++) {
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
  scroll_mouse_pos = event.pageY
  scroll_offset = pageYOffset
  console.log(scroll_mouse_pos)
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

addEventListener("scroll", () => {
  // Update the mouse position when scrolling
  mouse.y = scroll_mouse_pos + pageYOffset - scroll_offset;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();