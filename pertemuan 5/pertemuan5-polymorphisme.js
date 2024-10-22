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

class kapalTempur extends Alutsista {
    //Overwrite
    tampilkanAlutsista(){
        console.log("Alutsista Kapal Tempur bertipe Fregrat");
    }
    
    //Kompilasi
    tampilkanJumlah(jumlah){
        console.log("Kapal tempur bertipe fregrat berjumlah ",  jumlah)
    }
}

// Menggunakan polimorfisme
const alutsista = new Alutsista();
const jetTempur1 = new jetTempur();
const kapaltempur1 = new kapalTempur();
const tank1 = new Tank();

alutsista.tampilkanAlutsista();    
jetTempur1.tampilkanAlutsista();
tank1.tampilkanAlutsista();
kapaltempur1.tampilkanAlutsista();
kapaltempur1.tampilkanJumlah(350);