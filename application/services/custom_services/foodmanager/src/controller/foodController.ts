import { Request, Response } from 'express';
import { foodService } from '../service/foodService';
import { CustomLogger } from '../config/Logger'
let food = new foodService();

export class foodController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
food.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into foodController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from foodController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
food.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into foodController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from foodController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
food.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into foodController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from foodController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
food.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into foodController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from foodController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
food.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into foodController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from foodController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
food.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into foodController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from foodController.ts: GpCreate');
    })}


}