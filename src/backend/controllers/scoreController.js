const Score = require("../models/score");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create an employee score => /api/employees
exports.createScore = catchAsyncErrors(async (req, res, next) => {
  const score = await Score.create({
    name: req.body.fullName,
    score: req.body.scorePercentage,
    date: new Date(),
  });

  res.status(201).json({
    success: true,
    score,
  });
});
// Get all employee scores => /
exports.getEmployeeScores = catchAsyncErrors(async (req, res, next) => {
  const employeeScore = await Score.find();

  res.status(200).json({
    success: true,
    data: employeeScore,
    count: employeeScore.length,
  });
});
