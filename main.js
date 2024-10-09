const slides = document.querySelectorAll("#slides li")
const desktopSlides = document.querySelectorAll("#desktopSlides li")
const mobileNav = document.querySelector("#mobileNav")
const overlay = document.querySelector("#overlay")
let slideIndex = 0

const showSlide = (index) => {
    if (index >= slides.length) {
        slideIndex = 0
    } else if (index < 0) {
        slideIndex = slides.length - 1
    }
    slides.forEach((slide) => {
        slide.classList.add("hidden")
    })
    slides[slideIndex].classList.remove("hidden")
}

const prevSlide = () => {
    slideIndex--
    showSlide(slideIndex)
}

const nextSlide = () => {
    slideIndex++
    showSlide(slideIndex)
}

const showMobileNav = () => {
    mobileNav.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const hideMobileNav = () => {
    mobileNav.classList.add("hidden")
    overlay.classList.add("hidden")
}

const desktopShowSlide = (index) => {
    if (index >= desktopSlides.length) {
        slideIndex = 0
    } else if (index < 0) {
        slideIndex = desktopSlides.length - 1
    }
    desktopSlides.forEach((slide) => {
        slide.classList.add("hidden")
    })
    desktopSlides[slideIndex].classList.remove("hidden")
}

const desktopPrevSlide = () => {
    slideIndex--
    desktopShowSlide(slideIndex)
}

const desktopNextSlide = () => {
    slideIndex++
    desktopShowSlide(slideIndex)
}
