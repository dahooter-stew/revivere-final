

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
        if (currentScrollY > lastScrollY && currentScrollY > headerHeight + 50) {
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


//SLIDESHOW
const buttons = document.getElementsByClassName("slideshow_arrow");
buttons[0].addEventListener("click", () => {
	console.log("wow");

	const slides = document.querySelector(".carousel>ul");
	const activeSlide = slides.querySelector("[data-active]");
	let newIndex = [...slides.children].indexOf(activeSlide) - 1;
	newIndex %= slides.children.length;
	if (newIndex < 0) newIndex += slides.children.length;

	console.log(newIndex)

	slides.children[newIndex].dataset.active = true;
	delete activeSlide.dataset.active;
});
buttons[1].addEventListener("click", () => {
	console.log("wow");

	const slides = document.querySelector(".carousel>ul");
	const activeSlide = slides.querySelector("[data-active]");
	let newIndex = [...slides.children].indexOf(activeSlide) + 1;
	newIndex %= slides.children.length;

	slides.children[newIndex].dataset.active = true;
	delete activeSlide.dataset.active;
});