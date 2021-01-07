class productModel {

    constructor() {
        this.fs = require('fs')
        this.fileLocation = "./database/products.json";
        this.result = JSON.parse(this.fs.readFileSync(this.fileLocation))
    }

    /**
     * Get All Product
     */
    all() {
        return this.result
    }

    /**
     * Get Product By SKU
     * @param {String} sku 
     */
    getBySku(sku) {
        for (let i = 0; i < this.result.length; i++) {
            if(this.result[i].sku === sku) {
                return this.result[i]
            }
        }
    }

    /**
     * Subtract product quantity
     * @param {String} sku 
     * @param {Integer} qty 
     */
    subtractQty(sku, qty) {
        for (let i = 0; i < this.result.length; i++) {
            if(this.result[i].sku === sku) {

                if(this.result[i].qty <= 0) {
                    console.error("Quantity sudah mencapai 0");
                    break;
                }

                this.result[i].qty = this.result[i].qty - qty
                break
            } 
        }

        this.fs.writeFileSync(this.fileLocation, JSON.stringify(this.result), 'utf8', err => {})
        return true
    }
    
    /**
     * Create new product
     * @param {Object} data 
     */
    save(data) {
        if(this.result.length > 0) {
            this.result.push(data)
            var json = JSON.stringify(this.result)
            this.fs.writeFileSync(this.fileLocation, json, 'utf8', err => {
                if (err) {
                    console.log("Gagal menyimpan kedalam database");
                } else {
                    console.log("Berhasil menyimpan kedalam database");
                }
            })
        } else {
            var json = JSON.stringify(data)
            this.fs.writeFileSync(this.fileLocation, json, 'utf8', err => {
                if (err) {
                    console.log("Gagal menyimpan kedalam database");
                } else {
                    console.log("Berhasil menyimpan kedalam database");
                }
            })
        }
    }

    /**
     * Delete product by sku
     * @param {String} sku 
     */
    delete(sku) {
        var temp = [];
        for (let i = 0; i < this.result.length; i++) {
            if (this.result[i].sku !== sku) {
                temp.push(this.result[i])
            }
        }

        var json = JSON.stringify(temp)
        this.fs.truncateSync(this.fileLocation, 0, () => {})
        this.fs.writeFileSync(this.fileLocation, json, 'utf8', err => {
            if (err) {
                console.log("Gagal menyimpan kedalam database");
            } else {
                console.log("Berhasil menyimpan kedalam database");
            }
        })
    }
}

/**
 * For testing purpose
 */
// var app = new productModel;
// console.log(app.delete('x'));
// console.log(app.all());
// app.subtractQty("MS", 1)
// app.save({'sku': "KB", 'name': "Keyboard Komputer", "qty": 10, "price": 50000})

module.exports = productModel