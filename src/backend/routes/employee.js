const express = require("express");
const router = express.Router();

// Configure Multer to save files with their original name

const {
  getEmployees,
  createEmployee,
} = require("../controllers/employeeController");
const { isAuthenticatedAdminUser } = require("../middlewares/catchAsyncErrors");

router.route("/").get(getEmployees).post(createEmployee);

module.exports = router;
