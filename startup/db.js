const winston = require("winston");
const mongoose = require("mongoose");

const DB =
  "mongodb+srv://RanjanDutta:Myfirstdatabase@cluster0.uo4jpy1.mongodb.net/?retryWrites=true&w=majority";

module.exports = function () {
  mongoose
    // .connect("mongodb://localhost/vidly")
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => winston.info("Connected to MongoDB..."));
};
