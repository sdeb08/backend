const mongoose = require("mongoose");
const { Schema } = mongoose;

var admin = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
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

admin.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model("admin", admin);
