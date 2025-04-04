const Customer = require("../models/customerModels");

exports.getAllUsers = (req, res) => {
    Customer.getAllUsers((err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
};

exports.getUserById = (req, res) => {
    Customer.getUserById(req.params.id, (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results[0]);
    });
};
