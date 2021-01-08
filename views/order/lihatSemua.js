module.exports = (data, controller) => {

    const customerModel = require("../../app/models/customerModel")
    const productModel = require("../../app/models/productModel")

    var customer = new customerModel
    var product = new productModel

    for (let i = 0; i < data.length; i++) {
        console.log("");
        console.log("Transaction Id \t : " + data[i].id);
        console.log("Customer code \t : " + data[i].customerCode);

        // antisipasi data pelanggan yang dimaksud tidak ada
        // maka kita gunakan try and catch
        try {
            customer.byCode(data[i].customerCode).name
            console.log("Customer name \t : " + customer.byCode(data[i].customerCode).name);
        } catch (error) {
            console.log("Customer name \t : pelanggan tidak ditemukan!")
        }

        console.log("Product SKU \t : " + data[i].productSKU);

        // antisipasi data pelanggan yang dimaksud tidak ada
        // maka kita gunakan try and catch
        try {
            product.getBySku(data[i].productSKU).name
            console.log("Product Name \t : " + product.getBySku(data[i].productSKU).name);
        } catch (error) {
            console.log("Product Name \t : produk tidak ditemukan!" )
        }

        console.log("Product Qty \t : " + data[i].productQty);

        try {
            var hargaProduk = product.getBySku(data[i].productSKU).price
            var jumlahBeliBarang = data[i].productQty

            console.log("Total price \t : " + controller.formatRupiah(hargaProduk * jumlahBeliBarang));
        } catch (error) {
            console.log("Total price \t : produk tidak ditemukan!" )
        }
    }
}