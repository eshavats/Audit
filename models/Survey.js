const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveySchema = new Schema({
  subject: String,
  title: String,
  body: String,
  recipients: [String],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
});

mongoose.model("surveys", surveySchema);
