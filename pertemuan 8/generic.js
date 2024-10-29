function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

// Function untuk menambahkan elemen (Create)
function addElement(array, element) {
    array.push(element);
    return array;
}

// Function untuk mengupdate elemen (Update)
function updateElementAtIndex(array, index, newValue) {
    if (index >= 0 && index < array.length) {
        array[index] = newValue;
        return array;
    }
    throw new Error("Indeks di luar jangkauan");
}

// Function untuk menghapus elemen (Delete)
function deleteElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
        return array;
    }
    throw new Error("Indeks di luar jangkauan");
}

// Contoh penggunaan
let angka = [10, 20, 30];
let kata = ["satu", "dua", "tiga"];

console.log(getElementAtIndex(angka, 1)); // Output: 20
console.log(addElement(angka, 40));       // Output: [10, 20, 30, 40]
console.log(updateElementAtIndex(angka, 0, 15)); // Output: [15, 20, 30, 40]
console.log(deleteElementAtIndex(angka, 2));     // Output: [15, 20, 40]

console.log(getElementAtIndex(kata, 0));         // Output: "satu"
console.log(addElement(kata, "empat"));          // Output: ["satu", "dua", "tiga", "empat"]
console.log(updateElementAtIndex(kata, 1, "dua belas")); // Output: ["satu", "dua belas", "tiga", "empat"]
console.log(deleteElementAtIndex(kata, 3));      // Output: ["satu", "dua belas", "tiga"]
