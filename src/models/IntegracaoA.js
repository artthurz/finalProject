const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const IntegracaoASchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

IntegracaoASchema.plugin(mongoosePaginate);

module.exports = mongoose.model("IntegracaoA", IntegracaoASchema);
