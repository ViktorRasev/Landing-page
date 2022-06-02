

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

console.log(portfolioSection)


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



aboutBtn.addEventListener("click", (e) => {
e.preventDefault()
    window.scrollTo({
        top:aboutSection.offsetTop
    })
})

portfolioSection.addEventListener("click", (e) => {
    e.preventDefault()
        window.scrollTo({
            top:portfolioSection.offsetTop
        })
    })

   skillsBtn.addEventListener("click", (e) => {
        e.preventDefault()
            window.scrollTo({
                top:skillsSection.offsetTop
            })
        })
        contactBtn.addEventListener("click", (e) => {
            e.preventDefault()
                window.scrollTo({
                    top:contactSection.offsetTop
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