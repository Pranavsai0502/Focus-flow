// ======================================
// FocusFlow To-Do List
// ======================================

// Get task list container
const taskList = document.getElementById("taskList");

// Get input and button
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");

// ==============================
// Load tasks from storage
// ==============================

function renderTasks() {

    if (!taskList) return;

    taskList.innerHTML = "";

    const tasks = getTasks();

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text ${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div class="task-buttons">

                <button class="complete-btn" onclick="toggleTask(${index})">
                    ✔
                </button>

                <button class="delete-btn" onclick="deleteTask(${index})">
                    🗑
                </button>

            </div>
        `;

        taskList.appendChild(li);
        if (typeof updateStats === "function") {
    updateStats();
}

    });

}

// ==============================
// Add Task
// ==============================

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") return;

    const tasks = getTasks();

    tasks.push({
        text: text,
        completed: false
    });

    saveTasks(tasks);

    taskInput.value = "";

    renderTasks();
    if (typeof updateStats === "function") {
    updateStats();
}

}

// ==============================
// Toggle Complete
// ==============================

function toggleTask(index) {

    const tasks = getTasks();

    tasks[index].completed = !tasks[index].completed;

    saveTasks(tasks);

    renderTasks();
    if (typeof updateStats === "function") {
    updateStats();
}

}

// ==============================
// Delete Task
// ==============================

function deleteTask(index) {

    const tasks = getTasks();

    tasks.splice(index, 1);

    saveTasks(tasks);

    renderTasks();
    if (typeof updateStats === "function") {
    updateStats();
}

}

// ==============================
// Button Event
// ==============================

if (addTaskBtn) {

    addTaskBtn.addEventListener("click", addTask);

}

// Allow Enter key to add task
if (taskInput) {

    taskInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            addTask();

        }

    });

}

// Initial render
renderTasks();