const express = require("express");
const auth = require("../middleware/auth");
const Round = require("../models/Round");

const router = express.Router();
router.use(auth);

router.post("/set-result", async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ msg: "Forbidden" });

  const round = await Round.findOne({ status: "OPEN" });
  round.result = req.body.color;
  round.status = "CLOSED";
  await round.save();

  res.json({ msg: "Result set" });
});

module.exports = router;
