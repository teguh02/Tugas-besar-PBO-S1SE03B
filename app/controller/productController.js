const controller = require("../controller");

class productController extends controller {
    
    static index() {
        
        const product = require('../models/productModel');

        var loop = 1
        var produk = new product

        while (loop > 0) {
            super.view('produk/produk')

            var menu = super.ask("Pilih menu > ")

            // menu dibawah ini mengacu dalam file
            // produk.js (didalam folder produk)
            switch (menu) {
                case '1':
                    // @ Lihat semua produk
                    console.log("@ Lihat semua produk");

                    var allProduct = produk.all()
                    
                    // alihkan ke halaman tampilkanProduk.js 
                    // dengan membawa data produknya
                    // dan membawa data parent controllernya juga
                    // untuk memanggil class formatRupiah
                    super.view("produk/tampilkanProduk", allProduct, controller)
                    break

                case '2':
                    // @ Tambah produk
                    console.log("@ Tambah produk");

                    var data = {
                        'name': super.ask("Masukan nama produk : "),
                        'sku': super.ask("Masukan SKU Produk : "),
                        'qty': super.ask("Masukan stok barang : "),
                        'price': super.ask("Masukan harga barang : ")
                    }

                    produk.save(data)

                    console.log("Berhasil menyimpan kedalam database..");

                    break;

                case '3':
                    // @ Hapus Produk
                    console.log("@ Hapus Produk");
                    
                    var allProduct = produk.all()

                    super.view("produk/tampilkanProduk", allProduct)

                    var produkYangAkanDihapus = super.ask("Masukan sku produk yang akan dihapus : ")
                    var persetujuan = super.ask("Apakah kamu yakin ingin menghapus (y/n) : ")

                    if(persetujuan === 'y' || persetujuan === "Y") {
                        produk.delete(produkYangAkanDihapus)
                        console.log("Produk berhasil dihapus");
                    } else {
                        console.log("Produk gagal dihapus");
                    }

                    break;

                case 'x':
                    // @ Kembali
                    loop = 0
                    const baseController = require("./baseController")
                    baseController.mainMenu()
                    break
            
                default:
                    console.error("\n# Menu " + menu + " tidak ditemukan");
                    break;
            }
        }
    }
}

module.exports = productController