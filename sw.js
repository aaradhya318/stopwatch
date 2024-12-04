let startStopButton = document.getElementById("start-stop");
let resetButton = document.getElementById("reset");
let timeDisplay = document.getElementById("time-display");

let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

function updateTimeDisplay() {
    let hoursString = hours < 10 ? "0" + hours : hours;
    let minutesString = minutes < 10 ? "0" + minutes : minutes;
    let secondsString = seconds < 10 ? "0" + seconds : seconds;
    timeDisplay.textContent = hoursString + " " + minutesString + " " + secondsString;
}

function startStopwatch() {
    timer = setInterval(function() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        updateTimeDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

startStopButton.addEventListener("click", function() {
    if (running) {
        stopStopwatch();
        startStopButton.textContent = "Start";
    } else {
        startStopwatch();
        startStopButton.textContent = "Stop";
    }
    running = !running;
});

resetButton.addEventListener("click", function() {
    stopStopwatch();
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimeDisplay();
    startStopButton.textContent = "Start";
});