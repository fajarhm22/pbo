function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const alertBox = document.getElementById("alert");

    const correctUser = "admin";
    const correctPass = "12345";

    if (user === correctUser && pass === correctPass) {
        alertBox.className = "alert-success";
        alertBox.innerText = "LOGIN BERHASIL!";
    } else {
        alertBox.className = "alert-error";
        alertBox.innerText = "USERNAME DAN PASSWORD SALAH!";
    }
}
