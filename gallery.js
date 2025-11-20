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
const musicVolume = document.getElementById("music_volume");
const volumeContainer = document.getElementById("toggle_mus")
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
        volumeContainer.classList.add("hidden");

        if (presses == 1) index -= 1;
        playStop();
    }
});