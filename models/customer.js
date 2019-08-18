const path = require('path');

const customers = [];

module.exports = class Customer {
    constructor(fName, lName, email) {
        this.lName = lName;
        this.fName = fName;
        this.email = email;
    }
    save() {
        customers.push(this);
    }

    static fetchAll() {
        return customers;
    }
};