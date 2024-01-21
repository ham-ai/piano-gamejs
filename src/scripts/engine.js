const pianokeys = document.querySelectorAll(".piano-keys .key");

let audio  = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();
};

pianokeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key))
});

// keydown event 
document.addEventListener("keydown", (e) => {
    playTune(e.key);
})