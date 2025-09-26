const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  ExShowRoomPrice: {
    type: Number,
    required: true,
  },
  RTO: {
    type: Number,
    required: true,
  },
  Insurance: {
    type: Number,
    required: true,
  },
  ExtendedWarrantyCharges: {
    type: Number,
    default: 0,
  },
  HypothecationCharges: {
    type: Number,
    default: 0,
  },
  AccessoriesCharges: {
    type: Number,
    default: 0,
  },
  TCSCharges: {
    type: Number,
    required: true,
    default: 0,
  },
  FASTag: {
    type: Number,
    required: true,
    default: 0,
  },
  PriceRange: {
    type: String,
    required: true,
  },
});

const carSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    minlength: 3
  },
  Category: {
    type: String,
    required: true,
    enum: ["car"],
  },
  SubCategory: {
    type: String,
    trim: true
  },
  Brand: {
    type: String,
    required: true
  },
  Model: {
    type: String,
    required: true
  },
  BestOfferMonth: Number,
  BestOfferYear: Number,
  TopDeal: {
    type: Boolean,
    default: false,
  },
  Color: {
    type: String,
    required: true
  },
  VehicleType: {
    type: String,
    required: true
  },
  Price: priceSchema   // 👈 FIX: use sub-schema here
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
