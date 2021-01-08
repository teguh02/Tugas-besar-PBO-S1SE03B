const controller = require("../controller");

class customerController extends controller {
    
    static index() {
        const customerModel = require("../models/customerModel")

        var loop = 1
        var customer = new customerModel

        while (loop > 0) {
            
            super.view("customer/index")

            var menu = super.ask("Pilih menu > ")

            // menu dibawah ini mengacu dalam file
            // index.js (didalam folder customer)
            switch (menu) {
                case '1':
                    // Lihat semua customer
                    console.log("@ Lihat semua customer")
                    super.view("customer/tampilkanSemua", customer.all())
                    break;

                case '2':
                    // Tambah customer
                    console.log("@ Tambah Customer");

                    var data = {
                        code: super.ask("Masukan code pelanggan : "),
                        name: super.ask("Masukan nama pelanggan : "),
                        phone: super.ask("Masukan nomor telepon : ")
                    }

                    customer.save(data)
                    console.log("Berhasil menyimpan kedalam database");
                    break;

                case '3':
                    // Hapus customer
                    console.log("@ Hapus Customer");
                    super.view("customer/tampilkanSemua", customer.all())
                
                    console.log("");

                    var pelangganYangAkanDihapus = super.ask("Masukan id pelanggan yang akan dihapus : ")
                    var persetujuan = super.ask("Apakah kamu yakin ingin menghapus (y/n) : ")

                    if(persetujuan === "Y" || persetujuan === 'y') {
                        customer.delete(pelangganYangAkanDihapus)
                        console.log("Berhasil menghapus data");
                    } else {
                        console.log("Gagal menghapus data");
                    }

                    break;

                case 'x':
                    // Kembali
                    loop = 0
                    const baseController = require("./baseController")
                    baseController.mainMenu()
                    break;
            
                default:
                    console.error("\n# Menu " + menu + " tidak ditemukan");
                    break;
            }

        }
    }

}

module.exports = customerController