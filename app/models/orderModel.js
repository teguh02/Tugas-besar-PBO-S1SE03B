class orderModel {
    
    constructor() {
        this.fs = require('fs')
        this.fileLocation = "./database/orders.json";
        this.result = JSON.parse(this.fs.readFileSync(this.fileLocation))
    }

    /**
     * Get All order list
     */
    all() {
        return this.result
    }

    /**
     * Get order By id order
     * @param {String} id
     */
    getById(id) {
        for (let i = 0; i < this.result.length; i++) {
            if(this.result[i].id === id) {
                return this.result[i]
            }
        }
    }

    /**
     * To create new order data
     * @param {*} data 
     */
    save(data) {
        if(this.result.length > 0) {
            this.result.push(data)
            var json = JSON.stringify(this.result)
            this.fs.writeFileSync(this.fileLocation, json, 'utf8', err => {})
        } else {
            var json = JSON.stringify(data)
            this.fs.writeFileSync(this.fileLocation, json, 'utf8', err => {})
        }

        return true
    }

    /**
     * Delete order data by id
     * @param {integer} id 
     */
    delete(id) {
        var temp = [];
        for (let i = 0; i < this.result.length; i++) {
            if (this.result[i].id !== id) {
                temp.push(this.result[i])
            }
        }

        var json = JSON.stringify(temp)

        this.fs.truncateSync(this.fileLocation, 0, () => {})
        this.fs.writeFileSync(this.fileLocation, json, 'utf8', () => {})
        return true
    }
}

/**
 * For testing purpose
 */
// var app = new orderModel
// console.log(app.delete('Order3'));
// console.log(app.all());
// console.log(app.getById('Order2'));

// app.save({
    // id: 'Order3',
    // customerCode: "C1",
    // productSKU: "LP",
    // productQty: 1
// })

module.exports = orderModel