const mongoose = require("mongoose");

const housingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [1000, "Description cannot be more than 1000 characters"],
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    bedrooms: {
      type: Number,
      required: [true, "Please add number of bedrooms"],
    },
    bathrooms: {
      type: Number,
      required: [true, "Please add number of bathrooms"],
    },
    squareFeet: Number,
    photos: [String],
    amenities: [String],
    available: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Housing", housingSchema);
