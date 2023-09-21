import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const category = new Schema({
    category: {type: String, required: true, unique: true},
    subCategories: [{type:String}],
    image: {type: String},
    created: { type: Date, default: Date.now }
});

export const Category = mongoose.models['Category'] || mongoose.model('Category', category);
