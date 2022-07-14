const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  module_id: {
    type: String,
    required: true,
  },
  active_status: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("status", StatusSchema);