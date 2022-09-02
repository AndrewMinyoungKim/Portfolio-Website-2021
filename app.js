// Navbar

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

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