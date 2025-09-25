// Class Induk
class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;       // attribute 1
    this.nim = nim;         // attribute 2
    this.jurusan = jurusan; // attribute 3
  }

  belajar() { // method 1
    console.log('${this.nama} sedang belajar.');
  }

  tampilkanData() { // method 2
    console.log('Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}');
  }
}

// Class Anak 1
class MahasiswaAktif extends Mahasiswa {
  constructor(nama, nim, jurusan, angkatan) {
    super(nama, nim, jurusan);
    this.angkatan = angkatan; // attribute 4
  }

  ikutOrganisasi() { // method 3
    console.log('${this.nama} ikut organisasi kampus.');
  }
}

// Class Anak 2
class MahasiswaAlumni extends Mahasiswa {
  constructor(nama, nim, jurusan, tahunLulus) {
    super(nama, nim, jurusan);
    this.tahunLulus = tahunLulus; // attribute 5
  }

  kerja() { // method 4
    console.log('${this.nama} sudah bekerja setelah lulus.');
  }
}

// Buat 3 Object
const mhs1 = new Mahasiswa("Ahmad Sopandi", "202401110074", "Informatika");
const mhs2 = new MahasiswaAktif("Dimas", "202401110085", "Sistem Informasi", 2023);
const mhs3 = new MahasiswaAlumni("Agung", "202401110023", "Informatika", 2022);
mhs1.belajar();         // method 1
mhs1.tampilkanData();   // method 2
mhs2.ikutOrganisasi();  // method 3
mhs3.kerja();           // method 4
