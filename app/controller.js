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
     * Return to view file
     * @param {String} viewName 
     */
    static view(viewName, data = []) {
        require("../views/" + viewName)(data)
    }
}

module.exports = controller