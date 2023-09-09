import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const category = new Schema({
    category: {type: String, required: true, unique: true},
    image: {type: String}
});

export const Category = mongoose.models['Category'] || mongoose.model('Category', category);
