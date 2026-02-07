const mongoose = require("mongoose");

module.exports = mongoose.model("Round",
  new mongoose.Schema({
    roundId: Number,
    result: String,
    status: { type: String, default: "OPEN" }
  })
);
