document.addEventListener("DOMContentLoaded", () => {
  var overAElement = false
  var cursorAcitve = false
  let cursorButton = document.getElementById("disableCursor")

  let cursor = document.createElement("div") as HTMLElement
  cursor.style.position = "fixed"
  cursor.className = "trail"
  document.body.appendChild(cursor)
  document.body.className = "hide_cursor"

  cursorButton.addEventListener("click", () => {
    cursorAcitve = !cursorAcitve
    cursorButton.value = cursorAcitve ? "Enable Custom Cursor" : "Disable Custom Cursor"
    cursor.style.display = cursorAcitve ? "none" : "block"
    document.body.style.cursor = cursorAcitve ? "auto" : "none"
    document.body.classList.toggle("hide_cursor", !cursorAcitve)
    document.body.classList.toggle("show_cursor", cursorAcitve)
  })

  document.addEventListener("mousemove", (evt) => {
    if (!cursorAcitve) {
      document.body.style.cursor = "none"
      let tag = evt.target.tagName
      overAElement = tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON";
      cursor.style.boxShadow = overAElement ? "0 0 .5rem .3rem #ff44ff" : "0 0 .4rem .3rem white";
      cursor.style.backgroundColor = overAElement ? "#ff44ff" : "white"
      cursor.style.top = evt.clientY + "px"
      cursor.style.left = evt.clientX + "px"
    }
  })
})