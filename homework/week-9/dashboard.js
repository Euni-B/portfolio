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
        // saveTasks();
    };

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        taskDiv.remove();
        updateTaskCount();
        // saveTasks();
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
    // saveTasks();
}

// task track function 
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

// save list after page refresh,not functioning, work on later 

// function saveTasks() {
//     const tasks = [];
//     const taskElements = document.querySelectorAll("#taskContainer .task");

//     taskElements.forEach(task => {
//         const text = task.querySelector("span").textContent;
//         const completed = task.querySelector("span").classList.contains("completed");

//         tasks.push({ text, completed });
//     });

//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


// window.onload = function () {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

//     savedTasks.forEach(task => {
//         createTask(task.text, task.completed);
//     });

//     updateTaskCount();
// };

// logout function 
document.getElementById("logoutBtn").onclick = function () {
    window.location.href = "index.html";
};

// quiz answer checker 
let score = 0;

function checkAnswer(button, isCorrect) {

    // find the question container
    const questionDiv = button.parentElement;

    // get all buttons in this question
    const buttons = questionDiv.querySelectorAll("button");

    // disable all buttons
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    // update score
    if (isCorrect) {
        score++;
    }

    document.getElementById("score").textContent = "Score: " + score;
}

// submit button function 
function resetQuiz() {
    // reset score
    score = 0;
    document.getElementById("score").textContent = "Score: 0";

    // get all questions
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        const buttons = question.querySelectorAll("button");

        buttons.forEach(btn => {
            btn.disabled = false;          // enable buttons again
            btn.style.backgroundColor = ""; // remove color (reset)
        });
    });
}