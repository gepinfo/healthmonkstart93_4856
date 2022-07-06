import * as mongoose from 'mongoose';
import nutritionfoodModel from '../models/nutritionfood';
import { CustomLogger } from '../config/Logger'


export class nutritionfoodDao {
    private nutritionfood = nutritionfoodModel;
    constructor() { }
    
    public async GpDelete(nutritionfoodId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodDao.ts: GpDelete');

    

    
    
    
    this.nutritionfood.findByIdAndRemove(nutritionfoodId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionfoodDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(nutritionfoodData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(nutritionfoodData).forEach(
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
    this.nutritionfood.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionfoodDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(nutritionfoodData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodDao.ts: GpSearchForUpdate');

    

    
    
    
    this.nutritionfood.findOneAndUpdate({ _id: nutritionfoodData._id }, nutritionfoodData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionfoodDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(nutritionfoodData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodDao.ts: GpUpdate');

    

    
    
    
    this.nutritionfood.findOneAndUpdate({ _id: nutritionfoodData._id }, nutritionfoodData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionfoodDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodDao.ts: GpGetAllValues');

    

    
    
    
    this.nutritionfood.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionfoodDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(nutritionfoodData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodDao.ts: GpCreate');

    let temp = new nutritionfoodModel(nutritionfoodData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionfoodDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}