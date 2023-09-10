const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String,
  postalCode: String
});

const profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  avatarUrl: String,
  profileImage: {
    type: String,
    default: '/assets/icons/header/user.svg'
  },
  bio: String,
  socialLinks: {
    facebook: String,
    twitter: String,
    linkedin: String,
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  addresses: [addressSchema],
  profile: profileSchema,
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
  cart: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
