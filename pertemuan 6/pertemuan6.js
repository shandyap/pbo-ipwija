// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Senjata {
    constructor(jenis) {
        if (this.constructor === Senjata) {
            throw new Error("Kelas Senjata adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    menembak() {
        throw new Error("Metode 'menembak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Sniper extends Senjata {
    constructor() {
        super('Sniper');
    }

    menembak() {
        console.log(`${this.jenis} Mampu menembak dari jarak jauh.`);
    }
}

class AssaultRifle extends Senjata {
    constructor() {
        super('Assault Rifle');
    }

    menembak() {
        console.log(`${this.jenis} Mampu menembak dari jarak menengah.`);
    }
}

// Penggunaan
const sniper = new Sniper();
sniper.menembak(); 

const assault = new AssaultRifle();
assault.menembak();
