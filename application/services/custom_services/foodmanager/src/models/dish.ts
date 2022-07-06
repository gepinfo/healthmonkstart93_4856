
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const dishSchema = new Schema({
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
   recepie: String,
   food_picture: String,
   foods: String,
   tags: String
})

const dishModel = mongoose.model('dish', dishSchema, 'dish');
export default dishModel;
