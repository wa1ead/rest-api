const express = require("express");
const app = express();
const UserRoutes = require("./routes/UserRoutes");

require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.error("Cannot connect", err);
  });

app.use(express.json());

app.use("/api", UserRoutes);

app.get("/", (req, res) => {
  res.json({
    monMessage: "Hello, World",
  });
});

const port = 5050;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
