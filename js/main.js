/* Navbar */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      // Aşağı scroll edildiğinde navbar'ın scroll rengini değiştir
      $(".navbar").addClass("navbar-scrolled");
    } else {
      // Başlangıç pozisyonuna dönüldüğünde scroll rengini kaldır
      $(".navbar").removeClass("navbar-scrolled");
    }
  });
});
/* Our Clients */
var swiper = new Swiper(".Swiper-Our-Clients", {
  loop: true,
  slidesPerView: "auto", // Otomatik genişlik ayarı
  spaceBetween: 120, // Genel boşluk
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: ".our-clients-swiper-pagination",
    clickable: true
  }
});
/* Our Clients */
if (window.innerWidth <= 768) {
  swiper.params.spaceBetween = 75;
  swiper.update();
}
/* Testimonials */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  1440: {
    slidesPerView: 3,
  },
});
/* Testimonials */