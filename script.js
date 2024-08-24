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
        "a Front End Web Developer",
        "Learning DSA",
        "Looking for new opportunities...",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "a Front End Web Developer",
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
// Function to speak text using Web Speech API
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";  // You can set the language as per your preference
  window.speechSynthesis.speak(speech);
}

// Welcome Message on Page Load
window.onload = function() {
  speak("Welcome to our portfolio. Hello, my name is Saksham Jha.");
};

// Adding Event Listeners for Different Sections
document.querySelector('.menu a[href="#home"]').addEventListener('click', () => {
  speak("Home page");
});

document.querySelector('.facebookicon a').addEventListener('click', () => {
  speak("Facebook");
});

document.querySelector('.telegramicon a').addEventListener('click', () => {
  speak("Telegram");
});

document.querySelector('.linkedinicon a').addEventListener('click', () => {
  speak("LinkedIn");
});

document.querySelector('.githubicon a').addEventListener('click', () => {
  speak("GitHub");
});

document.querySelector('.downloadcv').addEventListener('click', () => {
  speak("Downloading my CV");
});

document.querySelector('.hire-me').addEventListener('click', () => {
  speak("If you want to talk to me, please do so via email");
});

document.querySelector('.menu a[href="#about"]').addEventListener('click', () => {
  speak("About me");
  setTimeout(() => {
      speak("Hello, My name is Saksham Jha, and I am currently pursuing a Diploma in Computer Engineering from Delhi Skill Entrepreneurship University. I have a strong passion for technology and a deep interest in exploring the world of computers and software development. Throughout my academic journey, I have gained a solid foundation in various programming languages, computer networks and database management. I am excited about the opportunities that lie ahead in my career and eager to learn many new technologies. Thank you for considering my introduction, and I look forward to engaging in meaningful discussions and collaborations in the field of computer engineering.");
  }, 1000);  // Adding a delay for natural reading flow
});

// Services section speech
document.querySelector('.menu a[href="#services"]').addEventListener('click', function() {
  speak("My Services");
  const services = document.querySelectorAll('#services .card .box .text');
  services.forEach((service, index) => {
      setTimeout(() => speak(service.innerText), index * 5000);  // 5 second gap
  });
});

// Skills section speech
document.querySelector('.menu a[href="#skills"]').addEventListener('click', function() {
  speak("My Skills");
  const skillsText = document.querySelector('#skills .column.left').innerText;
  speak(skillsText);
});

// Projects section speech
document.querySelector('.menu a[href="#projects"]').addEventListener('click', () => {
  speak("My projects");
  const projects = document.querySelectorAll('#projects .card .box .text');
  projects.forEach((project, index) => {
      setTimeout(() => speak(project.innerText), index * 5000);  // 5 second gap
  });
});

// Contact section speech
document.querySelector('.menu a[href="#contact"]').addEventListener('click', () => {
  speak("Contact me");
  setTimeout(() => {
      speak("I would love to hear from you! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out. I'd appreciate your feedback on my overall portfolio. Could you kindly complete the evaluation form to share your thoughts");
  }, 1000);  // Adding a delay for natural reading flow
});
