function login() {
  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value.toLowerCase();
  const alertBox = document.getElementById("alert-box");

  const correctUser = "fajarhm";
  const correctPass = "fajar2001";

  alertBox.classList.remove("hidden", "error", "success");

  if (username === correctUser && password === correctPass) {
    alertBox.classList.add("success");
    alertBox.innerText = "login berhasil! selamat datang fajar";
  } else {
    alertBox.classList.add("error");
    alertBox.innerText = "username atau password salah!";
  }
}
