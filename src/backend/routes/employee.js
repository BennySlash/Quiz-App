const express = require("express");
const router = express.Router();

// Configure Multer to save files with their original name

const {
  getEmployees,
  createEmployee,
} = require("../controllers/employeeController");

router.route("/api/employee").get(getEmployees);

module.exports = router;
