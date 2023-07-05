// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

// dynamic copyright year
document.getElementById('year').innerHTML = (new Date().getFullYear())

// Tech Stack slider
let copy = document.querySelector('.slide').cloneNode(true)
document.querySelector('.tech-stack').appendChild(copy)


// Animation on scroll effect

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

// Swiper
const swiper = new Swiper(".team-card", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        }
    },
})

console.log(swiper);


