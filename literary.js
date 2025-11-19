//NAVBAR
const stickyNav = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) 
    {
        // Scrolling DOWN
        stickyNav.classList.add('nav-hidden');
    } 
    else 
    {
        // Scrolling UP
        stickyNav.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
});