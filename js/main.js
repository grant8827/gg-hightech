//screen refresh
/*$(document).ready(function() {
    window.addEventListener('resize', function() {
        "use strict";
        window.location.reload();
    });
})*/

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

//cart start
$(function () {

    $("#items-basket").text("(" + ($("#list-item").children().length) + ")");

    $(".item ").on("click", function () {
       
        $(this).addClass('disabled')  
            //add items to basket
            $(this).each(function () {
               let name = $(this).children(".item-detail").children("h4").text();
               let remove = "<button class='remove'> x </button>";
                let cena = "<span class='eachPrice'>" + (parseFloat($(this).children(".item-detail").children(".prices").children(".price").text())) + "</span>";
                $("#list-item").append("<li>" + name + "&#09; - &#09;" + "$" + cena + remove + "</li>");

                //number of items in basket
                $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
                $("#items-basket").text();

                //calculate total price
                var totalPrice = 0;
                $(".eachPrice").each(function () {
                    var cenaEach = parseFloat($(this).text());
                    totalPrice += cenaEach;
                });
                $("#total-price").text( "$" +totalPrice );
            });

        //remove items from basket
        $(".remove").on("click", function () {
            $(this).parent().remove();
            var totalPrice = 0;
            $(".eachPrice").each(function () {
                var cenaEach = parseFloat($(this).text());
                totalPrice += cenaEach;
            });
            $("#total-price").text(totalPrice + "$");
            $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
        });
    });

   //clear cart 
});
$(document).ready(function(){
    $(".clear-cart").on("click", function () {
        $("#list-item").empty();
       
    });
    $(".clear-cart").on("click", function () {
        $("#total-price").empty();
       
    });
    $(".clear-cart").on("click", function () {
        $("#items-basket").empty();
       
    });
});

// cart popup
$(document).ready(function(){
    $(".cart-toggle").click(function(){
        $(".in-cart").fadeIn(500);
    })
    $(".close").click(function(){
        $(".in-cart").fadeOut(500);
    });
});


//cart pages
$(document).ready(function(){

    $('.addToCart').click(function (){
        itemCount ++;
        $('#itemCart').html(itemCount).css('display', 'block');

$(".addToCart").click(function(){
    $("ol").append("<li></li>")
})
       
      }); 
      
      $('.clear').click(function() {
        itemCount = 0;
        $('#itemCount').html('').css('display', 'none');
        $('#cartItems').html('');
      }); 
});
var itemCount = 0;
//cart end

// slider in header start
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
});
// head slider end

//border carousel start
(async ()=>   // async IIFE code for slider.
  {
  const
    interval       = 1500  // ms
  , paddingRight   = 0
  , slideContainer = document.querySelector('.carousel') 
  , slidesWrapper  = document.querySelector('.carousel-slides')
  , slides         = document.querySelectorAll('.carousel-slides > li')
  , delay          = ms => new Promise(r => setTimeout(r, ms))
  , movLeft = (el, mov) => new Promise(r =>
    {
    el.ontransitionend =_=>
      {
      el.ontransitionend = null
      el.style.transition = 'none';
      r()
      }
    el.style.transition = '1s';
    el.style.transform  = `translateX(${-mov}px)`;
    });

  let index = 0;

  while (true) // infinite carrousel loop
    {
    await delay( interval )
    await movLeft( slidesWrapper, slides[index].clientWidth + paddingRight  )

    slidesWrapper.appendChild( slides[index] )  // mov first slide to the end
    slidesWrapper.style.transform    = `translateX(0)` // rest translateX
    index = ++index % slides.length
    }
  })()
//border carousel end






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

$(document).ready(function(){ 
   $(window).scroll(function(){ 
       if ($(this).scrollTop() > 300) { 
           $('#toTop').fadeIn(); 
       } else { 
           $('#toTop').fadeOut(); 
       } 
   }); 
   $('#toTop').click(function(){ 
       $("html, body").animate({ scrollTop: 0 }, 600); 
       return false; 
   }); 
});






/*let btn = document.getElementById("toTop");

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

*/

//about page




















