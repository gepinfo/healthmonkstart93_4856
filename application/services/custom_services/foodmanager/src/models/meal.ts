
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const mealSchema = new Schema({
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
   dishes: String,
   notes: String,
   tags: String
})

const mealModel = mongoose.model('meal', mealSchema, 'meal');
export default mealModel;
