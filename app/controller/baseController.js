const controller            = require("../controller");
const productController     = require("./productController");

/**
 * Controller utama yang 
 * digunakan untuk menjalankan app 
 * pertama kali
 */

class baseController extends controller {
    
    static index() {

        var looping = 1
        while (looping > 0) {
            
            super.view("index")
        
            var menu = super.ask("Pilih menu > ")
            
            // menu dibawah ini mengacu dalam file
            // index.js (didalam view folder)
            switch (menu) {
                case '1':
                    // @ Produk
                    // return to product controller
                    // and stop main menu loop
                    productController.index()
                    looping = 0
                    break;

                case '2':
                    // @ Customer
                    looping = 0
                    break;

                case '3':
                    // @ Data order

                    looping = 0
                    break;

                case 'x' :
                    // @ Keluar
                    console.log("Bye...");
                    break;
            
                default:
                    console.error("\n# Menu " + menu + " tidak ditemukan");
                    break;
            }    
        }

    }

}

module.exports = baseController