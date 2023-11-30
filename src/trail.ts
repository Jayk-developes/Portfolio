document.addEventListener("DOMContentLoaded", () => {
  var overAElement = false
  let cursor = document.createElement("div") as HTMLElement
  cursor.style.position = "fixed"
  cursor.className = "trail"
  document.body.appendChild(cursor)
  document.addEventListener("mousemove", (evt) => {
    let tag = evt.target.tagName
    overAElement = tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON";
    cursor.style.boxShadow =  overAElement ? "0 0 .75rem .75rem #ff44ff" : "0 0 .6rem .5rem white";
    cursor.style.backgroundColor = overAElement ? "#ff44ff" : "white"
    cursor.style.top = evt.clientY + "px"
    cursor.style.left = evt.clientX + "px"
  })
})