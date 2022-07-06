
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const foodSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String,
   kcal: Number,
   carbohydrates: Number,
   fats: Number,
   protein: Number,
   portion: String,
   portion_type: String,
   nutrients: String,
   tags: String
})

const foodModel = mongoose.model('food', foodSchema, 'food');
export default foodModel;
