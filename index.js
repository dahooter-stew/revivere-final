

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
	"Shadowlords Castle (Memory)",
	"City Ruins (Rays of Light)",
	"Song of the Ancients (Devola)",
	"Ashes of Dreams (Aratanaru)",
	"Blissful Death",
	"Faltering Prayer (Dawn Breeze)",
	"Fortress of Lies",
	"City Ruins (Shade)",
	"Amusement Park",
	"Kaine Salvation",
	"Peaceful Sleep",
	"Vague Hope (Cold Rain)",
	"Faltering Prayer (Starry Sky)",
	"Voice of no Return ",
	"Repose"
];
let index = 0;
let timeStamp = 0;
let volume = 15;
let entered = false;
const musicToggle = document.getElementById("music_toggle");
let musicVolume = document.getElementById("music_volume");
const backgroundMusic = document.getElementById("background_music");

function playNext()
{
	console.log("ended")

	backgroundMusic.src = "./assets/background_music/" + playlist[index].toLowerCase().replace(/\s+/g, "_") + ".mp3";
	backgroundMusic.currentTime = timeStamp;
	backgroundMusic.volume = 0.2 * (volume / 100);
	backgroundMusic.play();
	index = (index + 1) % playlist.length;

	console.log(backgroundMusic.src);
	console.log("music playing", index - 1);
	console.log(index)
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
	if (musicToggle.checked) 
	{
		backgroundMusic.src = "./assets/background_music/" + playlist[index].toLowerCase().replace(/\s+/g, "_") + ".mp3";
		backgroundMusic.currentTime = timeStamp;
		backgroundMusic.volume = 0.2 * (volume / 100);
		backgroundMusic.play();

		if (!entered) index += 1;
		entered = true;
	}
	else playStop();
});


//COMMITTEES
const committeeButtons = document.querySelectorAll('.com_butt');
const profilesContainer = document.querySelectorAll('.profile_box');

committeeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Use data-target to find the correct member group ID
        const targetId = button.getAttribute('data-target');
        profilesContainer.forEach(group => group.classList.remove('hidden-members'));
        profilesContainer.forEach(group => group.classList.add('hidden-members'));
        
        // Show the corresponding member group
        const targetGroup = document.getElementById(targetId);
        if (targetGroup) {
            targetGroup.classList.remove('hidden-members');
        }
    });
});