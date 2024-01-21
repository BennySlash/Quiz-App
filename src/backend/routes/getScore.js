const express = require("express");
const router = express.Router();
const users = require("../utils/users");
const { getEmployeeScores } = require("../controllers/scoreController");

router.route("/employee-Score").get(getEmployeeScores);

module.exports = router;
