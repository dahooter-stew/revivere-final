

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
        if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
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


//MUSIC



const playlist = [
	"City Ruins (Rays of Light)",
	"Amusement Park",
	"Ashes of Dreams (Aratanaru)",
	"Blissful Death",
	"City Ruins (Shade)",
	"Faltering Prayer (Dawn Breeze)",
	"Faltering Prayer (Starry Sky)",
	"Fortress of Lies",
	"Kaine Salvation",
	"Peaceful Sleep",
	"Repose",
	"Shadowlords Castle (Memory)",
	"Song of the Ancients (Devola)",
	"Vague Hope (Cold Rain)",
	"Voice of no Return "
];
let index = 0;
let timeStamp = 0;
let volume = 15;
const musicToggle = document.getElementById("music_toggle");
let musicVolume = document.getElementById("music_volume");
const backgroundMusic = document.getElementById("background_music");

function playNext()
{
	backgroundMusic.src = "./assets/background_music/" + playlist[index].toLowerCase().replace(/\s+/g, "_") + ".mp3";
	backgroundMusic.currentTime = timeStamp;
	backgroundMusic.volume = (volume / 100);
	backgroundMusic.play();
	index = (index + 1) % playlist.length;

	console.log(backgroundMusic.src);
	console.log("music playing", index - 1);
}

function playStop()
{
	timeStamp = backgroundMusic.currentTime;
	backgroundMusic.pause();
}

musicVolume.addEventListener("input", () => {
    volume = musicVolume.value;
   	backgroundMusic.volume = (volume / 100);
});

backgroundMusic.addEventListener("ended", playNext);
musicToggle.addEventListener("change", (event) => {
	if (musicToggle.checked) playNext();
	else 					 playStop();
});