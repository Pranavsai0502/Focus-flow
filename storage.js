// ======================================
// FocusFlow Storage Manager
// Handles Local Storage Operations
// ======================================

// ---------- USER ----------

// Get current user
function getUser() {

    return JSON.parse(localStorage.getItem("focusflowUser"));

}

// ---------- TASKS ----------

// Get all tasks
function getTasks() {

    const tasks = localStorage.getItem("tasks");

    if (tasks) {

        return JSON.parse(tasks);

    }

    return [];

}

// Save tasks
function saveTasks(tasks) {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// ---------- FOCUS SESSIONS ----------

// Get focus session count
function getSessionCount() {

    const count = localStorage.getItem("focusSessions");

    if (count) {

        return parseInt(count);

    }

    return 0;

}

// Increase session count
function increaseSessionCount() {

    let count = getSessionCount();

    count++;

    localStorage.setItem("focusSessions", count);

}

// ---------- THEME ----------

// Save theme
function saveTheme(theme) {

    localStorage.setItem("theme", theme);

}

// Load theme
function getTheme() {

    return localStorage.getItem("theme");

}

// ---------- LOGIN ----------

// Check if user logged in
function isLoggedIn() {

    return localStorage.getItem("isLoggedIn") === "true";

}

// Logout
function logout() {

    localStorage.removeItem("isLoggedIn");

}