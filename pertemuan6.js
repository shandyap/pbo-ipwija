// Definisi antarmuka melalui pola objek
const SenjataInterface = {
    menembak: function() {
        throw new Error("Metode 'menembak()' harus diimplementasikan.");
    }
};

// Kelas yang mengimplementasikan antarmuka
class PesawatTempur {
    constructor() {
        Object.assign(this, SenjataInterfaceInterface); // Menerapkan antarmuka ke kelas
    }

    menembak() {
        console.log("Pesawat Tempur menembak dari udara.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class TankBaja {
    constructor() {
        Object.assign(this, SenjataInterface); // Menerapkan antarmuka ke kelas
    }

    menembak() {
        console.log("Tank Baja menembak dengan Meriam.");
    }
}

// Penggunaan
const pesawatTempur = new PesawatTempur();
pesawatTempur.menembak(); // Output: Pesawat terbang di udara.

const tankBaja = new TankBaja();
tankBaja.menembak(); // Output: Sepeda bergerak dengan pedal.
