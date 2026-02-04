function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields 🌸");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("doblossomUser", JSON.stringify(user));

  alert("Account created successfully 🌸");
  window.location.href = "index.html";
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("doblossomUser"));

  if (!storedUser) {
    alert("No account found 🌸");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert(`Welcome back, ${storedUser.name} 🌸`);
    window.location.href = "index.html"; // your main To-Do app
  } else {
    alert("Incorrect email or password 🌸");
  }

  window.onload = function () {
  const user = localStorage.getItem("loggedInUser");

  if (!user) {
    window.location.href = "signin.html";
  } else {
    document.getElementById("welcomeUser").innerText =
      `Hello, ${user} 🌸`;
  }
};






}
