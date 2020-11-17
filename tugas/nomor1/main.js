/**
 * Buatlah sebuah program javascript yang berisi fungsi untuk menentukan
 * predikat dari nilai yang diinputkan! 
 * Ketentuan, nilai 85-100 => A, 75-84 => B,
 * 65-75 => BC, 55-64 => C, 45-54 => D, 0-44 => E
 * 
 * Coded By Teguh Rijanandi
 * Saya mencontohkan program nomor 1 dengan 
 * menggunakan class
 * 
 * Contoh program ketika dijalankan (lihat screenshoot dibawah ini)
 * > https://freeimage.host/i/FAiumg
 * > https://freeimage.host/i/FAiGkX
 * > https://freeimage.host/i/FAiXhG
 * > https://freeimage.host/i/FAiNEl
 */

class predikatNilai {

    constructor(nama, nilai) {
        this.nama = nama
        this.nilai = nilai
    }

    getPredikat() {
        var predikat = null

        if(this.nilai <= 100 && this.nilai >= 85) {
            predikat = "A";
        } else if(this.nilai <= 84 && this.nilai >= 75) {
            predikat = "B"
        } else if(this.nilai <= 75 && this.nilai >= 65) {
            predikat = "BC"
        } else if(this.nilai <= 64 && this.nilai >= 55) {
            predikat = "C"
        } else if(this.nilai <= 54 && this.nilai >= 45) {
            predikat = "D"
        } else if(this.nilai <= 44 && this.nilai >= 0) {
            predikat = "E"
        } else {
            predikat = null;
        }

        console.log(this.nama + " mendapatkan predikat " + predikat);
    }
}

/**
 * Method untuk menanyakan inputan
 */

 function askFor(name) {
     return prompt("Masukan " + name)
 }

// pemanggilan program 
var app = new predikatNilai(askFor("nama"), askFor("nilai"))

// cetak hasil
app.getPredikat()

