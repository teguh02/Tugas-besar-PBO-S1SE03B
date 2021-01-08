const controller            = require("../controller");
const productController     = require("./productController");
const customerController    = require("./customerController")
const orderController       = require("./orderController")

/**
 * Controller utama yang 
 * digunakan untuk menjalankan app 
 * pertama kali
 */

class baseController extends controller {
    
    static index() {

        var kesempatanLogin = 3

        while (kesempatanLogin > 0) {
            super.view('loginPage')

            var username = super.ask("Masukan username : ")
            var password = super.ask("Masukan password : ")

            // Mencocokan apakah detail login yang diinputkan
            // sama dengan detail login yang ada di sistem
            if (
                username === super.getKasirUsername() &&
                super.passwordVerify(password, super.getKasirHashedPassword())
            ) {
                // var baseController = new this
                kesempatanLogin = 0
                return this.mainMenu()
            
            } else {
                kesempatanLogin--
                console.log("\nUsername atau password salah, kamu punya " + kesempatanLogin + " lagi\n");    
            }   
        }

        // jika kesempatan login sudah habis
        console.log("\nPeringatan : Apakah kamu ingin meretas aplikasi ini?");
        console.log("Sistem berhenti!");
    }

    static mainMenu() {
        var looping = 1
        while (looping > 0) {
            
            console.log("");
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
                    customerController.index()
                    looping = 0
                    break;

                case '3':
                    // @ Data order
                    orderController.index()
                    looping = 0
                    break;

                case 'x' :
                    // @ Keluar
                    console.log("Bye...");
                    looping = 0
                    break;
            
                default:
                    console.error("\n# Menu " + menu + " tidak ditemukan");
                    break;
            }    
        }
    }
}

module.exports = baseController