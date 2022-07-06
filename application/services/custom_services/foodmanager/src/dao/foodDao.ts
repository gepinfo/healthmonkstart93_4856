import * as mongoose from 'mongoose';
import foodModel from '../models/food';
import { CustomLogger } from '../config/Logger'


export class foodDao {
    private food = foodModel;
    constructor() { }
    
    public async GpDelete(foodId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into foodDao.ts: GpDelete');

    

    
    
    
    this.food.findByIdAndRemove(foodId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from foodDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(foodData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into foodDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(foodData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.food.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from foodDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(foodData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into foodDao.ts: GpSearchForUpdate');

    

    
    
    
    this.food.findOneAndUpdate({ _id: foodData._id }, foodData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from foodDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(foodData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into foodDao.ts: GpUpdate');

    

    
    
    
    this.food.findOneAndUpdate({ _id: foodData._id }, foodData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from foodDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into foodDao.ts: GpGetAllValues');

    

    
    
    
    this.food.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from foodDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(foodData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into foodDao.ts: GpCreate');

    let temp = new foodModel(foodData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from foodDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}