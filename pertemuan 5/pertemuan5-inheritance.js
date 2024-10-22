class Restaurant {
    constructor(makanan, minuman) {
        this.makanan = makanan;
        this.minuman = minuman;
    }

    tampilkanMenu() {
        console.log(`Restaurant ini menyediakan ${this.makanan} dan ${this.minuman}`);
    }
}


class SushiTei extends Restaurant {
    constructor(makanan, minuman, dessert) {
        super(makanan, minuman); // Memanggil konstruktor kelas induk
        this.dessert = dessert;
    }

    tampilkanMenu() {
        super.tampilkanMenu(); // Memanggil metode dari kelas induk
        console.log(`Menyediakan dessert ${this.dessert}`);
    }
}
class MarugameUdon extends Restaurant {
    constructor(makanan, minuman, dessert) {
        super(makanan, minuman); // Memanggil konstruktor kelas induk
        this.dessert = dessert;
    }

    tampilkanMenu() {
        super.tampilkanMenu(); // Memanggil metode dari kelas induk
        console.log(`Menyediakan dessert ${this.dessert}`);
    }
}

// Penggunaan kelas turunan
const sushiTei = new SushiTei("Sushi", "Ocha", "Es krim");
const marugameUdon = new MarugameUdon("Udon", "Matcha", "Puding");
sushiTei.tampilkanMenu();
marugameUdon.tampilkanMenu();
