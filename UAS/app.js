// ===== Class User =====
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

// ===== Class LoginApp =====
class LoginApp {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.initData();
        this.renderLogin();
    }

    // Simpan data user ke localStorage (JSON)
    initData() {
        const users = [
            new User("fajarhm", "fajar2001")
        ];
        localStorage.setItem("users", JSON.stringify(users));
    }

    // Tampilkan halaman login
    renderLogin() {
        this.container.innerHTML = `
        <div class="login-box">
            <img src="avatar.png" alt="Avatar Login">
            <h2>Login</h2>

            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">

            <button id="loginBtn">Login</button>

            <div id="alertBox" class="alert"></div>
        </div>
        `;

        document.getElementById("loginBtn")
            .addEventListener("click", () => this.login());
    }

    // Proses login
    login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const alertBox = document.getElementById("alertBox");

        const users = JSON.parse(localStorage.getItem("users"));
        const found = users.find(
            u => u.username === username && u.password === password
        );

        alertBox.style.display = "block";

        if (!found) {
            alertBox.className = "alert error";
            alertBox.textContent = "Username dan password salah!";
        } else {
            alertBox.className = "alert success";
            alertBox.textContent = "Login berhasil!";

            setTimeout(() => {
                this.renderUserPage(found.username);
            }, 1200);
        }
    }

    // Halaman setelah login sukses
    renderUserPage(username) {
        this.container.innerHTML = `
        <div class="login-box user-info">
            <h2>Login Berhasil</h2>
            <p>Selamat datang, <b>${username}</b></p>
            <button id="logoutBtn">Logout</button>
        </div>
        `;

        document.getElementById("logoutBtn")
            .addEventListener("click", () => this.renderLogin());
    }
}

// ===== Jalankan Aplikasi =====
new LoginApp("app");
