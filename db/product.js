import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {type: String, requierd: true, unique: true},
  description: {type: String},
  price: {type: Number, requierd: true},
  category: {type: String, requierd: true},
  subCategory: {type: String, default: null},
  images: [{type:String, requierd: true}],
  tags: [{type: String}],
  stock: {type: Number},
  options: [String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

