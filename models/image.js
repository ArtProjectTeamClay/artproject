const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageUrl: { type: String },
  imageTitle: { type: String },
  description: { type: String },
  price: { type: Number }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
