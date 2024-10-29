// Menggunakan List (Array)
let listMahasiswa = ["Budi", "Siti", "Agus"];

// 1. Method push() untuk menambahkan elemen baru (Create)
listMahasiswa.push("Ani"); 

// 2. Menampilkan elemen array (Read)
console.log(listMahasiswa);
// Bisa juga menggunakan perulangan
listMahasiswa.forEach(item => console.log(item)); //

// 3. Method splice() untuk meng-update elemen array (Update)
listMahasiswa.splice(1, 2, "Munaroh");
// Bisa juga secara langsung dengan cara
listMahasiswa[2] = "Munaroh";

// 4. Method pop() untuk menghapus elemen array (Delete)
listMahasiswa.pop("Ani");





// Menggunakan Set
let setMahasiswa = new Set(["Budi", "Siti", "Agus"]);

// 1. Method add() untuk menambahkan elemen Set (Create)
setMahasiswa.add("Ani");
setMahasiswa.add("Budi"); // Tidak akan menambahkan karena Budi sudah ada

// 2. Menampilkan elemen Set (Read)
console.log(setMahasiswa); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}
//Bisa juga dengan perulangan forEach
setMahasiswa.forEach(value => {
    console.log(value);
});
 
// 3. Set pada javascript tidak memiliki method khusus untuk mengupdate elemen.
// Jika ingin mengupdate elemen, bisa gunakan cara ini
if (setMahasiswa.has(2)) {
    setMahasiswa.delete(2); // Hapus elemen lama
    setMahasiswa.add(4);    // Tambahkan elemen baru
  }

//4. Method delete() untuk menghapus elemen Set (Delete)
setMahasiswa.delete(2);




// Menggunakan Map
let mapNilai = new Map();

// 1. Menambahkan elemen Map menggunakan method set() (Create)
mapNilai.set("Budi", 90);
mapNilai.set("Siti", 85);

// 2. Menampilkan elemen Map  menggunakan method get() (Read)
console.log(mapNilai.get("Budi")); // Output: 90

// 3. Mengupdate elemen Map bisa menggunakan method set() (Update)
mapNilai.set("Budi", 100);

// 4. Menghapus elemen Map menggunakan method delete() (Delete)
mapNilai.delete("Budi");


