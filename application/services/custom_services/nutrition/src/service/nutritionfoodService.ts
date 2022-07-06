import { Request, Response } from 'express';
import {nutritionfoodDao} from '../dao/nutritionfoodDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let nutritionfood = new nutritionfoodDao();

export class nutritionfoodService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodService.ts: GpDelete')
     let  nutritionfoodId = req.params.id;
     nutritionfood.GpDelete(nutritionfoodId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionfoodService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodService.ts: GpSearch')
     let  nutritionfoodData = req.query;
     nutritionfood.GpSearch(nutritionfoodData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionfoodService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodService.ts: GpSearchForUpdate')
     let  nutritionfoodData = req.body;
     nutritionfood.GpSearchForUpdate(nutritionfoodData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionfoodService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodService.ts: GpUpdate')
     let  nutritionfoodData = req.body;
     nutritionfood.GpUpdate(nutritionfoodData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionfoodService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodService.ts: GpGetAllValues')
     
     nutritionfood.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionfoodService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionfoodService.ts: GpCreate')
     let  nutritionfoodData = req.body;
     nutritionfood.GpCreate(nutritionfoodData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionfoodService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}