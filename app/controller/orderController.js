const controller = require("../controller");

class orderController extends controller {

    static index() {

        const orderModel = require("../models/orderModel")

        var loop = 1
        var order = new orderModel

        // menu dibawah ini mengacu dalam file
        // index.js (didalam folder order)
        while (loop > 0) {
            super.view("order/index")

            var menu = super.ask("Pilih menu > ")

            switch (menu) {
                case '1':
                    // Lihat semua order
                    console.log("@ Lihat semua order");
                    super.view("order/lihatSemua", order.all())
                    break;

                case '2':
                    // Tambah data order
                    console.log("@ Tambah data order");
                    break;

                case '3':
                    // Hapus data order
                    console.log("@ Hapus data order");
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