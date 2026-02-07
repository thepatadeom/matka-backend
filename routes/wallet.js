const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/deposit", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  user.balance += req.body.amount;
  await user.save();
  res.json({ balance: user.balance });
});

router.get("/balance", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ balance: user.balance });
});

module.exports = router;
