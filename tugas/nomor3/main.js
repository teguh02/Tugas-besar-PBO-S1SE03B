/**
 * Buatlah sebuah program javascript yang mengaplikasikan fungsi apply untuk
 * menentukan nilai max dan nilai min dari beberapa nilai yang ditentukan!
 * 
 * Program ketika dijalankan
 * > https://freeimage.host/i/FAtzb9
 * > https://freeimage.host/i/FAtcJV
 */

 var nilai = {
     minMax: function() {
        console.log("Program ini dibuat oleh " + this.firstName + " " + this.lastName);
        
        // ambil nilai dari argumen parameter saat ini
        var nilai = arguments

        console.log("Nilai tertinggi : " + Math.max.apply(Math, nilai));
        console.log("Nilai terendah : " + Math.min.apply(Math, nilai));
     }
 }

//  creator for this program
 var creator = {
    firstName: "Teguh",
    lastName: "Rijanandi"
 }

 var hasil = nilai.minMax.apply(creator, [5, 6, 2, 3, 7])
