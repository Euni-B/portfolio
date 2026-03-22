// track email , navigate to new screen, display welcome message 
const params = new URLSearchParams(window.location.search);
const username = params.get("username");

const message = document.getElementById("welcomeMessage");

if (username) {
    message.textContent = "Welcome, " + username;
} else {
    message.textContent = "Welcome!";
}

// task list 

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const container = document.getElementById("taskContainer");

    // create task row
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = function () {
        span.classList.toggle("completed");
        updateTaskCount();
    };

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        taskDiv.remove();
        updateTaskCount();
    };

    // assemble task
    taskDiv.appendChild(span);
    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(deleteBtn);

    // add to page
    container.appendChild(taskDiv);

    // clear input
    input.value = "";

    // add task count 
    container.appendChild(taskDiv);
    updateTaskCount();
}

function updateTaskCount() {
    const tasks = document.querySelectorAll("#taskContainer .task");
    let count = 0;

    tasks.forEach(task => {
        const text = task.querySelector("span");

        if (!text.classList.contains("completed")) {
            count++;
        }
    });

    document.getElementById("taskTitle").textContent = "Tasks: " + count;


}