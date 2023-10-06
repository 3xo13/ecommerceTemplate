import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now
  },
  accessLevel: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  }
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin

