const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const contactMenu = document.querySelector('#contact-page')
    const skillsMenu = document.querySelector('#skills-page')
    const experienceMenu = document.querySelector('#experience-page')
    const projectsMenu = document.querySelector('#projects-page')
    const educationMenu = document.querySelector('#education-page')
    const awardsMenu = document.querySelector('#awards-page')
    const moreMenu = document.querySelector('#more-page')
    let scrollPos = window.scrollY
    console.log(scrollPos)

    if(window.innerWidth > 960 && scrollPos < 800) {
        removeHighlightMenu()
        homeMenu.classList.add('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1300) {
        removeHighlightMenu()
        contactMenu.classList.add('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1700) {
        removeHighlightMenu()
        skillsMenu.classList.add('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const removeHighlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const contactMenu = document.querySelector('#contact-page')
    const skillsMenu = document.querySelector('#skills-page')
    const experienceMenu = document.querySelector('#experience-page')
    const projectsMenu = document.querySelector('#projects-page')
    const educationMenu = document.querySelector('#education-page')
    const awardsMenu = document.querySelector('#awards-page')
    const moreMenu = document.querySelector('#more-page')

    homeMenu.classList.remove('highlight')
    contactMenu.classList.remove('highlight')
    skillsMenu.classList.remove('highlight')
    experienceMenu.classList.remove('highlight')
    projectsMenu.classList.remove('highlight')
    educationMenu.classList.remove('highlight')
    awardsMenu.classList.remove('highlight')
    moreMenu.classList.remove('highlight')
};



const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)