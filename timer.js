// ======================================
// FocusFlow Pomodoro Timer
// ======================================

// 25 minutes in seconds
let totalSeconds = 25 * 60;

// Timer variable
let timer = null;

// Check whether timer is running
let isRunning = false;

// HTML Elements
const bellSound = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// ==============================
// Update Timer Display
// ==============================

function updateTimer() {

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.innerText = displayMinutes + ":" + displaySeconds;

}

// Show 25:00 when page opens
updateTimer();

// ==============================
// Start Timer
// ==============================

function startTimer() {

    if (isRunning)
        return;

    isRunning = true;

    timer = setInterval(function () {

        totalSeconds--;

        updateTimer();
        if (totalSeconds <= 0) {

    clearInterval(timer);

    isRunning = false;

    // increase session
    increaseSessionCount();

    // force dashboard update
    if (typeof updateStats === "function") {
        updateStats();
    }

    alert("🎉 Great Job! Focus session completed.");

    resetTimer();
}

    }, 1000);

}

// ==============================
// Pause Timer
// ==============================

function pauseTimer() {

    clearInterval(timer);

    isRunning = false;

}

// ==============================
// Reset Timer
// ==============================

function resetTimer() {

    clearInterval(timer);

    isRunning = false;

    totalSeconds = 25 * 60;

    updateTimer();

}

// ==============================
// Button Events
// ==============================

if (startBtn) {

    startBtn.addEventListener("click", startTimer);

}

if (pauseBtn) {

    pauseBtn.addEventListener("click", pauseTimer);

}

if (resetBtn) {

    resetBtn.addEventListener("click", resetTimer);

}