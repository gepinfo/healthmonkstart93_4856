
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const nutrientSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String,
   portion: Number,
   portion_type: String,
   tags: String
})

const nutrientModel = mongoose.model('nutrient', nutrientSchema, 'nutrient');
export default nutrientModel;
