const controller = require("../controller");

class orderController extends controller {

    static index() {

        const orderModel = require("../models/orderModel")
        const product = require('../models/productModel');
        const customerModel = require("../models/customerModel")

        var loop = 1
        var order = new orderModel
        var produk = new product
        var customer = new customerModel

        // menu dibawah ini mengacu dalam file
        // index.js (didalam folder order)
        while (loop > 0) {
            super.view("order/index")

            var menu = super.ask("Pilih menu > ")

            switch (menu) {
                case '1':
                    // Lihat semua order
                    console.log("@ Lihat semua order");

                    // alihkan ke halaman lihatSemua.js 
                    // dengan membawa data produknya
                    // dan membawa data parent controllernya juga
                    // untuk memanggil class formatRupiah
                    super.view("order/lihatSemua", order.all(), controller)
                    break;

                case '2':
                    // Tambah data order
                    console.log("@ Tambah data order");

                    // tampilkan semua produk yang ada
                    console.log("# Data produk");
                    super.view("produk/tampilkanProduk", produk.all(), controller)

                    console.log("\n--- Pembatas ---\n");

                    // tampilkan semua pelanggan yang ada
                    console.log("# Data pelanggan");
                    super.view("customer/tampilkanSemua", customer.all())

                    console.log("");

                    console.log("\nMenambahkan data order baru");
                    var data = {
                        id: super.ask("Masukan id transaksi : "),
                        customerCode: super.ask("Masukan kode pelanggan yang ada : "),
                        productSKU: super.ask("Masukan sku produk yang ada : "),
                        productQty: super.ask("Masukan pembelian barang : ")
                    }

                    order.save(data)
                    console.log("Berhasil menyimpan kedalam database..");
                    break;

                case '3':
                    // Hapus data order
                    console.log("@ Hapus data order");

                    // tampilkan semua data ordernya dulu
                    super.view("order/lihatSemua", order.all(), controller)

                    console.log("");

                    var dataOrderYangAkanDihapus = super.ask("Masukan id order yang akan dihapus : ")
                    var persetujuan = super.ask("Apakah kamu yakin ingin menghapus (y/n) : ")

                    if(persetujuan === "Y" || persetujuan === 'y') {
                        order.delete(dataOrderYangAkanDihapus)
                        console.log("Berhasil menghapus data");
                    } else {
                        console.log("Gagal hapus data");
                    }

                    break;

                case 'x':
                    // keluar
                    console.log("Bye..");
                    loop = 0
                    break;
            
                default:
                    break;
            }
        }

    }
}

module.exports = orderController