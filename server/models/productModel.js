const mongoose = require("mongoose");

const ReadingSchema = mongoose.Schema({
  Author: {
    type: String,
    require: [true, "Please enter the product name"],
  },
  DateCreated: {
    type: Date,
    require: true,
  },
  Description: {
    type: String,
    require: true,
  },
  Title: {
    type: String,
    require: true,
  },
  Text: {
    type: String,
    require: true,
  },
});

const Reading = mongoose.model("Reading", ReadingSchema);

module.exports = Reading;
