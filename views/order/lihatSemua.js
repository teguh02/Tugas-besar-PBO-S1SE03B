module.exports = (data) => {

    const customerModel = require("../../app/models/customerModel")
    const productModel = require("../../app/models/productModel")

    var customer = new customerModel
    var product = new productModel

    for (let i = 0; i < data.length; i++) {
        console.log("");
        console.log("Transaction Id : " + data[i].id);
        console.log("Customer code : " + data[i].customerCode);

        // antisipasi data pelanggan yang dimaksud tidak ada
        // maka kita gunakan try and catch
        try {
            customer.byCode(data[i].customerCode).name
            console.log("Customer name : " + customer.byCode(data[i].customerCode).name);
        } catch (error) {
            console.log("Customer name : pelanggan tidak ditemukan!")
        }

        console.log("Product SKU : " + data[i].productSKU);

        // antisipasi data pelanggan yang dimaksud tidak ada
        // maka kita gunakan try and catch
        try {
            product.getBySku(data[i].productSKU).name
            console.log("Product Name : " + product.getBySku(data[i].productSKU).name);
        } catch (error) {
            console.log("Product Name : produk tidak ditemukan!" )
        }

        console.log("Product quantity " + data[i].productQty);
    }
}