// ======================================
// FocusFlow Dashboard Logic
// ======================================

// DOM Elements
const usernameEl = document.getElementById("username");
const logoutBtn = document.getElementById("logoutBtn");
const themeBtn = document.querySelector(".theme");

// Stats elements
const sessionCountEl = document.getElementById("sessionCount");
const completedTasksEl = document.getElementById("completedTasks");
const pendingTasksEl = document.getElementById("pendingTasks");

// ======================================
// INIT DASHBOARD
// ======================================

function initDashboard() {

    // Check login
    if (!isLoggedIn()) {
        window.location.href = "login.html";
        return;
    }

    // Load user
    const user = getUser();

    if (user && usernameEl) {
        usernameEl.innerText = user.name;
    }

    // Load theme
    const theme = getTheme();

    if (theme === "dark") {
        document.body.classList.add("dark");
    }

    // Load stats
    updateStats();

}

// ======================================
// UPDATE STATS
// ======================================

function updateStats() {

    const tasks = getTasks();

    const completed = tasks.filter(t => t.completed).length;
    const pending = tasks.length - completed;

    if (completedTasksEl) {
        completedTasksEl.innerText = completed;
    }

    if (pendingTasksEl) {
        pendingTasksEl.innerText = pending;
    }

    if (sessionCountEl) {
        sessionCountEl.innerText = getSessionCount();
    }

}

// ======================================
// LOGOUT
// ======================================

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        logout();

        window.location.href = "login.html";

    });

}

// ======================================
// THEME TOGGLE
// ======================================

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        saveTheme(isDark ? "dark" : "light");

    });

}

// ======================================
// AUTO UPDATE STATS
// ======================================

setInterval(() => {

    updateStats();

}, 2000);

// ======================================
// RUN ON LOAD
// ======================================

initDashboard();