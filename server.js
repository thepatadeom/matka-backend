const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGO_URI } = require("./config");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

app.use("/auth", require("./routes/auth"));
app.use("/wallet", require("./routes/wallet"));
app.use("/game", require("./routes/game"));
app.use("/admin", require("./routes/admin"));

app.listen(5000, () => console.log("Server running"));
