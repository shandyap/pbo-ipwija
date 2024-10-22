// Model Class
class DaftarNilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

// View Class
class DaftarNilaiView {
    tampilkanRataRata(rataRata) {
        return `
            <div class="nilai-card">
                <p>Rata-rata nilai: ${rataRata}</p>
            </div>
        `;
    }

    tampilkanError(error) {
        return `
            <div class="nilai-card error">
                <p>Error: ${error}</p>
            </div>
        `;
    }
}

// Controller Class
class DaftarNilaiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanNilai(nilai) {
        try {
            const modelNilai = new this.model(nilai);
            const rataRata = modelNilai.hitungRata();
            document.getElementById("output").innerHTML = this.view.tampilkanRataRata(rataRata);
        } catch (error) {
            document.getElementById("output").innerHTML = this.view.tampilkanError(error.message);
        }
    }
}

// Inisialisasi dan Penggunaan
const daftarNilaiView = new DaftarNilaiView(); // Buat instance dari DaftarNilaiView
const daftarNilaiController = new DaftarNilaiController(DaftarNilai, daftarNilaiView); // Masukkan instance DaftarNilaiView
daftarNilaiController.tampilkanNilai([80, 90, 100]); // Menampilkan rata-rata
daftarNilaiController.tampilkanNilai([]);            // Menampilkan error: Data nilai tidak valid atau kosong.

// Fungsi Pembagian dengan Error Handling
function pembagian(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

// Penggunaan fungsi pembagian
console.log(pembagian(10, 2)); // Output: 5
console.log(pembagian(10, 0)); // Output: Terjadi error: Pembagian dengan nol tidak diperbolehkan.
                               //         Operasi pembagian selesai.
