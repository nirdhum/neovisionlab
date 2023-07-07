// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

// dynamic copyright year
document.getElementById('year').innerHTML = (new Date().getFullYear())

// Tech Stack slider
let copy = document.querySelector('.slide').cloneNode(true)
document.querySelector('.tech-stack').appendChild(copy)

// Scroll To Top

const toTop_btn = document.getElementById('toTop')

window.onscroll = function () { scrollToTop() }

function scrollToTop() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        toTop_btn.style.display = "block";
    } else {
        toTop_btn.style.display = "none";
    }
}

toTop_btn.addEventListener('click', function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

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

// Swiper
const testimonialsSwiper = new Swiper(".testimonials", {
    slidesPerView: 1,
    spaceBetween: 5,
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
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 1,
        }
    },
})


