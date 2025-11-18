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