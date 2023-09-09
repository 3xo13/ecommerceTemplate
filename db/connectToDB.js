import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let isConnected = false; // track the connection

export async function connectToDB () {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return true;
  } 

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "e-commerce_examples",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
    return error;
  }
}