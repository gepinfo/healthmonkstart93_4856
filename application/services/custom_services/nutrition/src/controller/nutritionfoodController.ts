import { Request, Response } from 'express';
import { nutritionfoodService } from '../service/nutritionfoodService';
import { CustomLogger } from '../config/Logger'
let nutritionfood = new nutritionfoodService();

export class nutritionfoodController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
nutritionfood.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionfoodController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionfoodController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
nutritionfood.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionfoodController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionfoodController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
nutritionfood.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionfoodController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionfoodController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
nutritionfood.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionfoodController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionfoodController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
nutritionfood.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionfoodController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionfoodController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
nutritionfood.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionfoodController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionfoodController.ts: GpCreate');
    })}


}