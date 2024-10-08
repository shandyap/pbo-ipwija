// Definisi kelas induk
class Alutsista {
    tampilkanAlutsista() {
        console.log("Alutsista : Alat alat Persenjataan TNI");
    }
}

// Definisi kelas turunan
class Tank extends Alutsista {
    tampilkanAlutsista() {
        console.log("Alutsista Tank bertipe Leopard");
    }
}

class jetTempur extends Alutsista {
    tampilkanAlutsista() {
        console.log("Alutsista Jet Tempur bertipe F-35");
    }
}

// Menggunakan polimorfisme
const alutsista = new Alutsista();
const jetTempur1 = new jetTempur();
const tank1 = new Tank();

alutsista.tampilkanAlutsista();    
jetTempur1.tampilkanAlutsista();
tank1.tampilkanAlutsista();