const db = require("../config/db");

const Customer = {
    getAllUsers: (callback) => {
        db.query("SELECT * FROM Customer", callback);
    },
    getUserById: (id, callback) => {
        db.query("SELECT * FROM users WHERE id = ?", [id], callback);
    }
};

module.exports = Customer;
