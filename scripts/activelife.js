let video = document.getElementById("video");
let playBtn = document.getElementById("play-btn");
let bottomBar = document.getElementById("vid-bot");

playBtn.addEventListener("click", () => {
    video.play();
    video.controls = true;
    playBtn.style.visibility = "hidden"
    if (bottomBar) {
        bottomBar.style.display = "none"
    }
});

video.addEventListener("pause", () => {
    video.controls = false;
    playBtn.style.visibility = "visible"
    if (bottomBar) {
        bottomBar.style.display = "flex"
    }
});