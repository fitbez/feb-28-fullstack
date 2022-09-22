const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const productRoute = require("./routes/product");

mongoose
  .connect(process.env.MOGODB_URI)
  .then(() => {
    console.log("Database connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is up and running on port 5000");
});
