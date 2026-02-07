const express = require("express");
const User = require("../models/User");
const Bet = require("../models/Bet");
const Round = require("../models/Round");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/bet", auth, async (req, res) => {
  const round = await Round.findOne({ status: "OPEN" });
  if (!round) return res.json({ msg: "No round" });

  const user = await User.findById(req.user.id);
  if (user.balance < req.body.amount)
    return res.status(400).json({ msg: "Low balance" });

  user.balance -= req.body.amount;
  await user.save();

  await Bet.create({
    userId: user._id,
    color: req.body.color,
    amount: req.body.amount,
    roundId: round.roundId
  });

  res.json({ msg: "Bet placed" });
});

module.exports = router;
