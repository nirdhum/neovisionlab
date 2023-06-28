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

// remove and add class on small screen

// const wwa = document.getElementById('wwa')

// function resize() {
//     if (window.innerWidth < 420) { wwa.classList.remove("grid-2-col"); }
// }
// resize()
// window.addEventListener("resize", resize);

jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 600) {
            $('.wwa').removeClass('grid-2-col');
        }
        else if (ww >= 601) {
            $('.wwa').addClass('grid-2-col');
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});