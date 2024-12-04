const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".wrapper i")
const firstCardWidth = carousel.querySelector(".card").offsetWidth

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "left") {
      carousel.scrollLeft -= firstCardWidth // Scroll sol
    } else if (btn.id === "right") {
      carousel.scrollLeft += firstCardWidth // Scroll sag
    }
  })
})

let isDragging = false
let startX = 0
let startScrollLeft = 0

const dragStart = (e) => {
  isDragging = true
  //mouse un ilk pozisyonunu ve carousel in scroll pozisyonunu kaydeder
  startX = e.pageX
  startScrollLeft = carousel.scrollLeft
  carousel.classList.add("dragging")
}

const dragStop = () => {
  isDragging = false
  carousel.classList.remove("dragging")
}

const dragging = (e) => {
  if (!isDragging) return
  // carouselin scroll poziyonunu maus pozisyonuna gore gunceller
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}

carousel.addEventListener("mouseover", dragging)
carousel.addEventListener("mousedown", dragStart)

document.addEventListener("mouseup", dragStop)
