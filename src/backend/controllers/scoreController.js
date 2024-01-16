const Score = require("../models/score");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create an employee => /api/employees
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
