

// Hamburger Icon  
const menuBtn = document.querySelector(".menu-btn")
const navMenu = document.querySelector(".nav-menu")

const navLinks = document.querySelectorAll(".nav-link")
// const aboutBtn = document.querySelector(".about-link")
// const portfolioBtn = document.querySelector(".portfolio-link")
// const skillsBtn = document.querySelector(".skills-link")
// const contactBtn = document.querySelector(".contact-link")


menuBtn.addEventListener("click", () => { 
    menuBtn.classList.toggle("active")
    navMenu.classList.toggle("active")
})


navLinks.forEach((link) => { 
    link.addEventListener("click", () => { 
        menuBtn.classList.remove("active")
        navMenu.classList.remove("active")
    })
})










// portfolioBtn.addEventListener("click", () => { 
//     menuBtn.classList.remove("active")
//     navMenu.classList.remove("active")
// })
// skillsBtn.addEventListener("click", () => { 
//     menuBtn.classList.remove("active")
//     navMenu.classList.remove("active")
// })
// aboutBtn.addEventListener("click", () => { 
//     menuBtn.classList.remove("active")
//     navMenu.classList.remove("active")
// })
// contactBtn.addEventListener("click", () => { 
//     menuBtn.classList.remove("active")
//     navMenu.classList.remove("active")
// })