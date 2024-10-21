const mongoose = require("mongoose");
const { Schema } = mongoose;

var users = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone_num: {
    type: String,
    require: true,
  },

  updated_at: {
    type: Date,
    default: () => Date.now(),
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
});

users.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model("users", users);
