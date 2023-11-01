const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  user_id: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
