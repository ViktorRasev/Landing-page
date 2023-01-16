// SWIPER
var swiper = new Swiper(".slide-content", {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 900,
  effect: "coverflow",
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Hamburger Icon
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

// Nav menu links
const navLinks = document.querySelectorAll(".nav-link");
const homeBtn = document.querySelector(".home-link");
const portfolioBtn = document.querySelector(".portfolio-link");
const skillsBtn = document.querySelector(".skills-link");
const contactBtn = document.querySelector(".contact-link");

//Page sections for scrolling
const homeSection = document.querySelector(".home");
const portfolioSection = document.querySelector(".portfolio");
const skillsSection = document.querySelector(".skills");
const contactSection = document.querySelector(".contact");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Scrolling via nav menu
function navScroll(navBtn, section) {
  return navBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
    });
  });
}

navScroll(homeBtn, homeSection);
navScroll(portfolioBtn, portfolioSection);
navScroll(skillsBtn, skillsSection);
navScroll(contactBtn, contactSection);
