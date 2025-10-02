class Mahasiswa {
    constructor(nama, nim, nilai) {
        this.nama = nama;   // Atribut publik
        this.nilai = nilai; // Atribut publik
        let _nim = nim;     // Atribut private menggunakan closure

        // Getter untuk mengakses NIM
        this.getNim = function() {
            return _nim;
        };

        // Setter untuk mengubah NIM dengan validasi
        this.setNim = function(nimBaru) {
            if (typeof nimBaru === "string" && nimBaru.length >= 8) {
                _nim = nimBaru;
            } else {
                console.log('NIM harus berupa string minimal 8 karakter');
            }
        };

        // Method untuk menampilkan informasi mahasiswa
        this.tampilkanInfo = function() {
            console.log(`Nama  : ${this.nama}`);
            console.log(`NIM   : ${_nim}`);
            console.log(`Nilai : ${this.nilai}`);
            console.log("-----------------------");
        };
    }
}


let prod1 = new Mahasiswa("Fajar Hidayahtullah", "202401110010", 80);
let prod2 = new Mahasiswa("Shaula", "202401110040", 75);


console.log("=== Data Mahasiswa ===");
prod1.tampilkanInfo();
prod2.tampilkanInfo();

prod1.setNim("87654321");

console.log("=== Data Setelah Update ===");
prod1.tampilkanInfo();

