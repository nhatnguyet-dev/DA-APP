const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/users", CustomerController.getAllUsers);
router.get("/users/:id", CustomerController.getUserById);

module.exports = router;
