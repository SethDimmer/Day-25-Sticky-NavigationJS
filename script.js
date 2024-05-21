const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
// listening for a scroll adn when listening for a scroll i will call a function of fixNav

function fixNav() {
    console.log(window.scrollY, nav.offsetHeight)
    // need to figure out when to turn the active class on when i scroll
    if(window.scrollY > nav.offsetHeight + 150){
        // if window scrollY position is greater than the nav offsetHeight i will add 150
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}