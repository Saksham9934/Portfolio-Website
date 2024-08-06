$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
    // slide up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
    //toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
    // see more 1 script
    $(".seemore1").click(function () {
      $(".seemore1").toggleClass("show");
      $(".content1").toggleClass("show");
    });
    // see more 2 script
    $(".seemore2").click(function () {
      $(".seemore2").toggleClass("show");
      $(".content2").toggleClass("show");
    });
    // see more 3 script
    $(".seemore3").click(function () {
      $(".seemore3").toggleClass("show");
      $(".content3").toggleClass("show");
    });
    // see more 4 script
    $(".seemore4").click(function () {
      $(".seemore4").toggleClass("show");
      $(".content4").toggleClass("show");
    });
    // see more 5 script
    $(".seemore5").click(function () {
      $(".seemore5").toggleClass("show");
      $(".content5").toggleClass("show");
    });
    // see more 6 script
    $(".seemore6").click(function () {
      $(".seemore6").toggleClass("show");
      $(".content6").toggleClass("show");
    });
    // see more 7 script
    $(".seemore7").click(function () {
      $(".seemore7").toggleClass("show");
      $(".content7").toggleClass("show");
    });
    // see more 7 script
    $(".seemore8").click(function () {
      $(".seemore8").toggleClass("show");
      $(".content8").toggleClass("show");
    });
    // read more script
    $(".readmore").click(function () {
      $(".readmore").toggleClass("show");
      $(".readmorecontent").toggleClass("show");
    });
    // typing animation script
    var typed = new Typed(".typing", {
      strings: [
        "a Full Stack Web Developer",
        "Learning DSA",
        "Looking for new opportunities...",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "a Full Stack Web Developer",
        "Learning DSA",
        "Looking for new opportunities...",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    //owl carousel script
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });