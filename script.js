function addTask() {
  const name = document.getElementById("taskName").value;
  const date = document.getElementById("taskDate").value;
  const priority = document.getElementById("taskPriority").value;

  if (!name || !date) {
    alert("Please fill in all fields 🌸");
    return;
  }

  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  taskCard.innerHTML = `
    <h6>${name}</h6>
    <p>Due: ${new Date(date).toLocaleString()}</p>
    <div class="task-actions">
      <button class="btn btn-success btn-sm" onclick="completeTask(this)">✔ Complete</button>
      <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">🗑 Delete</button>
    </div>
  `;

  if (priority === "urgent") {
    document.getElementById("urgentTasks").appendChild(taskCard);
  } else {
    document.getElementById("normalTasks").appendChild(taskCard);
  }

  document.getElementById("taskName").value = "";
  document.getElementById("taskDate").value = "";
}

function deleteTask(btn) {
  btn.closest(".task-card").remove();
}

function completeTask(btn) {
  const task = btn.closest(".task-card");
  task.style.opacity = "0.6";
  task.style.textDecoration = "line-through";
}
