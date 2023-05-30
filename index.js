const barIcon = document.getElementById("bar-icon")
const mobileMenu = document.getElementById("mobile-menu")
const closeIcon = document.querySelector(".fa-xmark")

barIcon.addEventListener("click", function (e) {
  console.log(e.target)
  mobileMenu.setAttribute("style", "display:flex")
  barIcon.setAttribute("style", "display:none")
})

closeIcon.addEventListener("click", function (e) {
  console.log(e.target)

  mobileMenu.removeAttribute("style")
  barIcon.removeAttribute("style")
})

window.addEventListener("click", function (e) {
  if (!mobileMenu.contains(e.target) && !barIcon.contains(e.target)) {
    mobileMenu.style.display = "none"
    barIcon.style.display = "block"
  }
})

// Testtimonials Section

// const testimonials = [
//   {
//     name: "Kim Wexler",
//     job: "Chief Executive Officer",
//     image: "Image/Person1.png",
//     testimonial:
//       "Needless to say we are extremely satisfied with the results. Man, this thing is getting better and better as I learn more about it. This app has really helped to improve my productivity.",
//   },

//   {
//     name: "Walter White",
//     job: "CEO sales department",
//     image: "Image/Person2.png",
//     testimonial:
//       "We've used smartwatch app for a while. Smartwatch app has got everything I need. I will let my mum know about this, she could really make use of smartwatch app!",
//   },
//   {
//     name: "Jame McGill",
//     job: "creative developer",
//     image: "Image/Person3.png",
//     testimonial:
//       "Smartwatch app is a user friendly app, and it helps me a lot in tracking my activities. I am very sastified choosing this Smartwatch and I will recommend it to my friends",
//   },
// ]

// let i = 0
// let j = testimonials.length

// let testimonialSlider = document.getElementById("slider")
// let nextBtn = document.getElementById("next")
// let prevBtn = document.getElementById("prev")

// nextBtn.addEventListener("click", function (e) {
//   i = (j + i + 1) % j
//   displayTestimonial()
// })

// prevBtn.addEventListener("click", function (e) {
//   i = (j + i - 1) % j
//   displayTestimonial()
// })

// let displayTestimonial = () => {
//   testimonialSlider.innerHTML = `
//   <div><img src=${testimonials[i].image} /></div>
//   <div class="text">
//     <p class="comment">${testimonials[i].testimonial}</p>
//     <section>
//       <h6>${testimonials[i].name}</h6>
//       <p>${testimonials[i].job}</p>
//     </section>
//   </div>
//   `
// }

// window.onload = displayTestimonial

// ----------------------------------------------> carousel ----------------------------------------------

const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".wrapper i")
const firstCardWidth = document.querySelector(".card").offsetWidth

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth
  })
})

let isDragging = false,
  startX,
  startScrollLeft

const dragStart = (e) => {
  isDragging = true
  carousel.classList.add("dragging")
  // Records the initial cursor and scrolling position of the carousel
  startX = e.pageX
  startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  if (!isDragging) return //if isDragging is false then return;
  // Update the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = (e) => {
  isDragging = false
  carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
