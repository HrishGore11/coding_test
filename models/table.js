const Mongoose = require("mongoose");
const tableSchema = new Mongoose.Schema({
  Name: String,
  Price: Number,
  Quantity: Number,
  Brand: String,
});

const tablemodel = Mongoose.model("tabledata", tableSchema);
module.exports = tablemodel;
