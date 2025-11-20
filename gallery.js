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


//MUSIC
const playlist = [
    "City Ruins (Rays of Light)",
    "Shadowlords Castle (Memory)",
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
let volume = 50;
let presses = 0;
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
    backgroundMusic.volume = 0.2 * (volume / 100);
});

backgroundMusic.addEventListener("ended", playNext);
musicToggle.addEventListener("change", (event) => {
    if (musicToggle.checked) 
    {

        backgroundMusic.src = "./assets/background_music/" + playlist[index].toLowerCase().replace(/\s+/g, "_") + ".mp3";
        backgroundMusic.currentTime = timeStamp;
        backgroundMusic.volume = 0.2 * (volume / 100);
        backgroundMusic.play();

        if (presses < 1) index += 1;

        presses += 1;
        console.log(presses);
    }
    else 
    {
        if (presses == 1) index -= 1;
        playStop();
    }
});

const hrefs = document.querySelectorAll('a');

hrefs.forEach(href => {
  href.addEventListener('click', () => {
    //const lastTime = parseFloat(localStorage.getItem("musicTime"));

    localStorage.setItem("musicTime", timeStamp.toString());
  });
});

if (document.referrer)
{
    timeStamp = parseFloat(localStorage.getItem("musicTime"));
}