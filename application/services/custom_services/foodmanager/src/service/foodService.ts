import { Request, Response } from 'express';
import {foodDao} from '../dao/foodDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let food = new foodDao();

export class foodService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into foodService.ts: GpDelete')
     let  foodId = req.params.id;
     food.GpDelete(foodId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from foodService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into foodService.ts: GpSearch')
     let  foodData = req.query;
     food.GpSearch(foodData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from foodService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into foodService.ts: GpSearchForUpdate')
     let  foodData = req.body;
     food.GpSearchForUpdate(foodData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from foodService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into foodService.ts: GpUpdate')
     let  foodData = req.body;
     food.GpUpdate(foodData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from foodService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into foodService.ts: GpGetAllValues')
     
     food.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from foodService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into foodService.ts: GpCreate')
     let  foodData = req.body;
     food.GpCreate(foodData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from foodService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}