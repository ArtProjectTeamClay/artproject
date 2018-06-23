const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  facebook: { type: String },
  instagram: { type: String },
  phone: { type: String },
  biography: String,
  image: [
    {
      type: Schema.Types.Mixed
    }
  ],
  date: { type: Date, default: Date.now }
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
