
/* =========================
   GLOBAL STORAGE
========================= */
let tasks = JSON.parse(localStorage.getItem("doBlossomTasks")) || [];

/* =========================
   SAVE TO LOCAL STORAGE
========================= */
function saveTasks() {
  localStorage.setItem("doBlossomTasks", JSON.stringify(tasks));
}

/* =========================
   ADD TASK
========================= */
function addTask() {
  const name = document.getElementById("taskName").value;
  const date = document.getElementById("taskDate").value;
  const priority = document.getElementById("taskPriority").value;

  if (!name || !date) {
    alert("Please fill in all fields 🌸");
    return;
  }

  const task = {
    id: Date.now(),
    name: name,
    date: date,
    priority: priority,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderTasks();

  document.getElementById("taskName").value = "";
  document.getElementById("taskDate").value = "";
}

/* =========================
   RENDER TASKS
========================= */
function renderTasks() {
  document.getElementById("urgentTasks").innerHTML = "";
  document.getElementById("normalTasks").innerHTML = "";

  tasks.forEach(task => {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";

    if (task.completed) {
      taskCard.style.opacity = "0.6";
      taskCard.style.textDecoration = "line-through";
    }

    taskCard.innerHTML = `
      <h6>${task.name}</h6>
      <p>Due: ${new Date(task.date).toLocaleString()}</p>
      <div class="task-actions">
        <button class="btn btn-blossom-complete btn-sm" onclick="completeTask(${task.id})">
          ✔ Complete
        </button>
        <button class="btn btn-blossom-delete btn-sm" onclick="deleteTask(${task.id})">
          🗑 Delete
        </button>
      </div>
    `;

    if (task.priority === "urgent") {
      document.getElementById("urgentTasks").appendChild(taskCard);
    } else {
      document.getElementById("normalTasks").appendChild(taskCard);
    }
  });
}

/* =========================
   DELETE TASK
========================= */
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

/* =========================
   COMPLETE TASK
========================= */
function completeTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: true } : task
  );
  saveTasks();
  renderTasks();
}




/* =========================
   LOAD TASKS ON PAGE LOAD
========================= */
renderTasks();


function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "signin.html";
}
