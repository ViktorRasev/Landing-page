

// Hamburger Icon  
const menuBtn = document.querySelector(".menu-btn")
const navMenu = document.querySelector(".nav-menu")


// Nav menu links 
const navLinks = document.querySelectorAll(".nav-link")
const aboutBtn = document.querySelector(".about-link")
const portfolioBtn = document.querySelector(".portfolio-link")
const skillsBtn = document.querySelector(".skills-link")
const contactBtn = document.querySelector(".contact-link")

//Page sections for scrolling
const aboutSection = document.querySelector(".about")
const portfolioSection = document.querySelector(".portfolio")
const skillsSection = document.querySelector(".skills")
const contactSection = document.querySelector(".contact")


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



// Scrolling via nav menu 
function navScroll(navBtn, section) { 
navBtn.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
        top:section.offsetTop
    })
})
}

navScroll(aboutBtn, aboutSection)
navScroll(portfolioBtn, portfolioSection)
navScroll(skillsBtn, skillsSection)
navScroll(contactBtn, contactSection)

