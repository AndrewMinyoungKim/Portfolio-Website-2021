// Navbar

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
    const educationMenu = document.querySelector('#education-page')
    const skillsMenu = document.querySelector('#skills-page')
    const experienceMenu = document.querySelector('#experience-page')
    const projectsMenu = document.querySelector('#projects-page')
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
        educationMenu.classList.add('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1700) {
        removeHighlightMenu()
        skillsMenu.classList.add('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 2400) {
        removeHighlightMenu()
        skillsMenu.classList.add('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 800) || elem) {
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const removeHighlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const educationMenu = document.querySelector('#education-page')
    const skillsMenu = document.querySelector('#skills-page')
    const experienceMenu = document.querySelector('#experience-page')
    const projectsMenu = document.querySelector('#projects-page')
    const awardsMenu = document.querySelector('#awards-page')
    const moreMenu = document.querySelector('#more-page')

    homeMenu.classList.remove('highlight')
    educationMenu.classList.remove('highlight')
    skillsMenu.classList.remove('highlight')
    experienceMenu.classList.remove('highlight')
    projectsMenu.classList.remove('highlight')
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

// Copy to Clipboard

document.getElementById("contact__email__clipboard").onclick = function() {copyClipboard("andrew.minyoung.kim@gmail.com")}
document.getElementById("contact__phone__clipboard").onclick = function() {copyClipboard("6474668621")}
document.getElementById("contact__email__clipboard").onmouseout = function() {clipboardOutFunc()}
document.getElementById("contact__phone__clipboard").onmouseout = function() {clipboardOutFunc()}

function copyClipboard () {

    copyText = arguments[0]

    var tooltip = document.getElementById("myTooltip");
    navigator.clipboard.writeText(copyText).then(() => {
        tooltip.innerHTML = "Copied!";
    }, () => {
        window.alert("Link copy failed :(");
    });

}

function clipboardOutFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to Clipboard";
}