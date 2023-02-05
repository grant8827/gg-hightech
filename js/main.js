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
});














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