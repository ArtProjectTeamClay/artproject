const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  venuename: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  website: { type: String },
  facebook: { type: String },
  phone: { type: String },
  description: String,
  date: { type: Date, default: Date.now }
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
