/**
 * Buatlah sebuah program javascript yang berisi fungsi untuk menghitung
 * rata-rata nilai. Ket : boleh menggunakan inputan (nilai +), boleh tidak.
 * 
 * Contoh program ketika dijalankan
 * > https://freeimage.host/i/FAQhQa
 * > https://freeimage.host/i/FAQwCJ
 * > https://freeimage.host/i/FAQO4R
 * > https://freeimage.host/i/FAQk2p
 */

class mean {
    constructor(nama = null, nilaiAsArray = []) {
        this.nama = nama
        this.nilai = nilaiAsArray
    }

    getMean() {
        // menambahkan semua nilai pada array
        var tambahSemua = this.sum(this.nilai)

        // dan bagi dengan jumlah data
        var hasil = Number(tambahSemua / this.nilai.length)

        console.log(this.nama + " rata rata nilai kamu adalah " + hasil);
    }
    
    // untuk menjumlahkan semua value pada array
    sum(input){
             
        if (toString.call(input) !== "[object Array]")
        return false;
      
        var total =  0;
        for(var i = 0; i < input.length; i++)
        {                  
            if(isNaN(input[i])){
            continue;
             }
              total += Number(input[i]);
        }
        return total;
    }
}

/**
 * Method untuk menanyakan inputan
 */

function askFor(name) {
    return prompt("Masukan " + name)
}

var tanyaJumlahNilai = askFor("Jumlah nilai");

// masukan kedalam array
var nilai = []
for (let i = 0; i < tanyaJumlahNilai; i++) {
    nilai[i] = askFor("Nilai ke-" + (i + 1) )
}

// masukan kedalam class tadi
// untuk di proses
var app = new mean("Teguh Rijanandi", nilai)

// cetak rata ratanya
app.getMean()