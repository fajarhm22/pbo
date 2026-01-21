function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const alertBox = document.getElementById("alert");

    // akun contoh
    const userBenar = "fajarhm";
    const passBenar = "fajar2001";

    if (username === userBenar && password === passBenar) {
        alertBox.innerHTML = `
            <div class="alert-success">
                Login berhasil!
            </div>
        `;
    } else {
        alertBox.innerHTML = `
            <div class="alert-error">
                Username dan password salah!
            </div>
        `;
    }
}
