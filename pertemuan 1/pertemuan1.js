// Definisi Class
class Smartphone {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    // Membuat method class
    charging() {
        console.log(`Charging ${this.model}`);
    }
}

// Membuat pewarisan
class Android extends Smartphone {
    constructor(color, brand, model, price) {
        super(color, brand, model);  // Mengirimkan parameter ke parent class
        this.price = price;
    }

    splitScreen() {
        console.log('Android can Split Screen');
    }
}

// Membuat pewarisan kedua
class iOS extends Smartphone {
    constructor(color, brand, model, price) {
        super(color, brand, model);  // Mengirimkan parameter ke parent class
        this.price = price;
    }

    airDrop() {
        console.log('iOS have a behavior Air Drop');
    }
}

// Membuat objek
const ios = new iOS('black', 'Apple', '12 Pro Max', 8000000);
const android = new Android('white', 'Samsung', 'Galaxy S21', 20000000);

// Output untuk menguji
console.log(ios);
console.log(android);

ios.charging();
android.charging();

ios.airDrop();
android.splitScreen();
