/* ----------- codigo do Navbar ----------- */
const nav = document.querySelector(".nav");

function stickNavbar(){
  if (window.matchMedia('(min-width: 801px)').matches) {
    nav.classList.toggle("scrolled",window.scrollY  > 0);
  }
}

stickNavbar();

window.addEventListener("scroll", stickNavbar);

// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});


var swiper = new Swiper('.testimoials-slider-swiper', {
    grapCursor: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination:{
        el: '.js-testimoials-pagination',
        clickable: true
    },
    breakpoints:{
        767:{
            slidesPerView: 2
        }
    }
});
var swiper = new Swiper('.testimoials-slider-swiper-2', {
    grapCursor: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination:{
        el: '.js-testimoials-pagination',
        clickable: true
    },
    breakpoints:{
        767:{
            slidesPerView: 2
        }
    }
});
// FAQ
var acc = document.getElementsByClassName("accordion");
var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.parentElement.classList.toggle("active");

      var pannel = this.nextElementSibling;

      if (pannel.style.display === "block") {
        pannel.style.display = "none";
      } else {
        pannel.style.display = "block";
      }
    });
  }
var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);