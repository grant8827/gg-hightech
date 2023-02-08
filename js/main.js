//screen refresh
$(document).ready(function() {
    window.addEventListener('resize', function() {
        "use strict";
        window.location.reload();
    });
})

//navbar toggle
const menu = document.getElementById('barMenu');
const link = document.getElementById('nav');
const x = document.getElementById('x-bar')

menu.addEventListener('click', () => {

    if (link.style.display = "none") {
        link.style.display = "block";
    } else {
        link.style.display = "none";
    }
    if (menu.style.display = "none") {
        x.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
x.addEventListener("click", () => {
    if (link.style.display = "block") {
        link.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    if (x.style.display = "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});




let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}

var owl = $('.bonner-img');
owl.owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}










let btn = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
btn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}