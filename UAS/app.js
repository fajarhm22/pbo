function login() {
  const user = document.getElementById("username").value.toLowerCase();
  const pass = document.getElementById("password").value.toLowerCase();
  const alertBox = document.getElementById("alert-box");

  const correctUser = "fajarhm";
  const correctPass = "fajar2001";

  alertBox.className = "";

  if (user === correctUser && pass === correctPass) {
    alertBox.classList.add("success");
    alertBox.innerText = "login berhasil! selamat datang fajar";
  } else {
    alertBox.classList.add("error");
    alertBox.innerText = "username atau password salah!";
  }
}
