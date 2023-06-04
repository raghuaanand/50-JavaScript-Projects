// to show video when watch now button is clicked
const buttonEl = document.querySelector("button");
const trailerContainer = document.querySelector(".trailer-container")
buttonEl.addEventListener("click", () => {
    trailerContainer.classList.remove('hidden');
    trailerContainer.classList.add('flex');
});

// to close the video popup when the close icon is clicked.
// and to see the video at the pause condition and at the begining when re watched

const closeIconEl = document.querySelector(".close-icon");
const videoEl = document.querySelector("iframe")
closeIconEl.addEventListener("click", () => {
    trailerContainer.classList.add('hidden');
    videoEl.pause();  // pauses the video when the watch now button is reclicked after clicking the close icon
    videoEl.currentTime = 0; // set the current time of the video at 0 when reopened.

})