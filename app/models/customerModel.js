class customerModel {

    constructor() {
        this.fs = require('fs')
        this.fileLocation = "./database/customer.json";
    }

    /**
     * Get all customer data from database
     */
    all() {
        var read = this.fs.readFileSync(this.fileLocation);
        var result = JSON.parse(read)
        return result
    }

    /**
     * Get customer by code
     */
    byCode(code) {
        var read = this.fs.readFileSync(this.fileLocation);
        var result = JSON.parse(read)
        
        for (let i = 0; i < result.length; i++) {
            if(result[i].code === code) {
                return result[i]
            }
        }
    }
    
    /**
     * Save object data to database as new data
     */
    save(data) {
        // baca data sebelumnya
        var read = this.fs.readFileSync(this.fileLocation);
        var result = JSON.parse(read)

        // jika data sudah ada, maka push data
        // kedalam data yang sudah ada
        if(result.length > 0) {
            result.push(data)
            var json = JSON.stringify(result)
            this.fs.writeFileSync(this.fileLocation, json, 'utf8', err => {
                if (err) {
                    console.log("Gagal menyimpan kedalam database");
                } else {
                    console.log("Berhasil menyimpan kedalam database");
                }
            })
        } else {
            // jika data belum ada
            // buat data baru
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
     * Delete user by code
     * @param {String} code 
     */
    delete(code) {
        var read = this.fs.readFileSync(this.fileLocation);
        var result = JSON.parse(read)
        var temp = [];

        for (let i = 0; i < result.length; i++) {
            if (result[i].code !== code) {
                temp.push(result[i])
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
// var app = new customerModel;
// console.log(app.delete("C4"));
// console.log(app.all());
// console.log(app.save({code: 'C4', name: "User", phone: '12345678'}));

module.exports = customerModel