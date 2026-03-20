function addTask() {
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("taskList");

  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // cleaner version
  deleteBtn.addEventListener("click", function () {
    newTask.remove();
  });
newTask.classList.add("fade-in");
  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);

  taskInput.value = "";
}

