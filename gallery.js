//NAVBAR
const stickyNav = document.getElementById('navbar');
const mainHeader = document.getElementById('start');
let lastScrollY = window.scrollY;

const headerHeight = window.innerHeight;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    // Condition 1: Hide/Show logic
    if (currentScrollY > headerHeight) {
        // Only show/hide the sticky nav once we are past the main header
        if (currentScrollY > lastScrollY && currentScrollY > headerHeight + 64) {
            // Scrolling DOWN
            stickyNav.classList.add('nav-hidden');
        } else {
            // Scrolling UP
            stickyNav.classList.remove('nav-hidden');
        }
    } else {
        // If we scroll back up into the main header area, keep the sticky nav hidden
    }
    lastScrollY = currentScrollY;
});