import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {type: String, requierd: true},
  description: String,
  price: Number,
  category: String,
  imageUrl: String,
  stock: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
