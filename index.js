const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Foodie Zone server side is running on...");
});

app.listen(port, () => {
  console.log(`Foodie is running on http://localhost:${5000}`);
});
