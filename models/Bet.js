const mongoose = require("mongoose");

module.exports = mongoose.model("Bet",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    color: String,
    amount: Number,
    roundId: Number,
    win: Boolean
  })
);
