module.exports = (data, controller) => {
    console.log("\nMenampilkan " + data.length + " produk");

    for (let i = 0; i < data.length; i++) {
        console.log("SKU \t \t :" + data[i].sku);
        console.log("Name \t \t :" + data[i].name);
        console.log("Quantity \t :" + data[i].qty);
        console.log("Price \t \t :" + controller.formatRupiah(data[i].price));
        console.log("");
    }
}