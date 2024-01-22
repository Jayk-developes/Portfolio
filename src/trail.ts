document.addEventListener("DOMContentLoaded", () => {
  var overAElement = false
  let cursor = document.createElement("div") as HTMLElement
  cursor.style.position = "fixed"
  cursor.className = "trail"
  document.body.appendChild(cursor)
  document.addEventListener("mousemove", (evt) => {
    let tag = evt.target.tagName
    overAElement = tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON";
    cursor.style.boxShadow =  overAElement ? "0 0 .5rem .3rem #ff44ff" : "0 0 .4rem .3rem white";
    cursor.style.backgroundColor = overAElement ? "#ff44ff" : "white"
    cursor.style.top = evt.clientY + "px"
    cursor.style.left = evt.clientX + "px"
  })
})