/**
 * @Controller_Class
 * Implementasi abstrak class pada javascript
 * Karena dalam javascript tidak ada abstrak class
 * seperti dalam java
 * maka alternatifnya menggunakan throw Error seperti ini
 */ 

class controller {

    constructor() {
        
    }

    /**
     * When any controller file extends this controller
     * file, you must implement index() method
     */
    static index() {
        throw new Error ("Method static index() must be implemented")
    }
    
    /**
     * To get input request with prompt sync
     * @param {*} inputName 
     */
    static ask(inputName) {
        const prompt = require('prompt-sync')();
        return prompt(inputName)
    }

    /**
     * to load view file (inside views folder)
     * @param {String} viewName 
     */
    static view(viewName, data = [], data2 = []) {
        require("../views/" + viewName)(data, data2)
    }

    /**
     * To return number as rupiah format
     * @param {Int} number 
     */
    static formatRupiah(bilangan) {
        var	reverse = bilangan.toString().split('').reverse().join(''),
	    ribuan 	= reverse.match(/\d{1,3}/g);
        ribuan	= ribuan.join('.').split('').reverse().join('');
        return "Rp. " + ribuan
    }
}

module.exports = controller