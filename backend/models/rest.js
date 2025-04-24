const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  price: String,
  rating: Number,
  cuisine: String,
  deliveryTime: String
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
