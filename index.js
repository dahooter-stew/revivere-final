const playlist = [
	"City Ruins"
];
let index = 0;
let timeStamp = 0;
const musicToggle = document.getElementById("music_toggle");
const backgroundMusic = document.getElementById("background_music");

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(musicToggle);

function playNext()
{
	backgroundMusic.src = "./assets/background_music/" + playlist[index].toLowerCase().replace(" ", "_") + ".mp3";
	console.log(backgroundMusic.src);
	backgroundMusic.currentTime = timeStamp;
	backgroundMusic.play();
	index = (index + 1) % playlist.length;

	console.log("music playing", index);
}

function playStop()
{
	timeStamp = backgroundMusic.currentTime;
	backgroundMusic.pause();
}

backgroundMusic.addEventListener("ended", playNext);
musicToggle.addEventListener("change", (event) => {
	if (musicToggle.checked) playNext();
	else 					 playStop();
});

const buttons = document.getElementsByClassName("slideshow_arrow");
buttons[0].addEventListener("click", () => {
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
	const slides = document.querySelector(".carousel>ul");
	const activeSlide = slides.querySelector("[data-active]");
	let newIndex = [...slides.children].indexOf(activeSlide) + 1;
	newIndex %= slides.children.length;

	slides.children[newIndex].dataset.active = true;
	delete activeSlide.dataset.active;
});