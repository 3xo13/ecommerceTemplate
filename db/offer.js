import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const offerSchema = new mongoose.Schema({
    name: String,
    description: String,
    discountType: {
      type: String,
      enum: ['percentage', 'fixedAmount'],
      default: 'percentage'
    },
    discountValue: Number,
    startDate: Date,
    endDate: Date
  });

export const Offer = mongoose.models['Offer'] || mongoose.model('Offer', offerSchema);
