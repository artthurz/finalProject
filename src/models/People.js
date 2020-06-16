const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PeopleSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("People", PeopleSchema);
