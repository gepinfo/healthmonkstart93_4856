import { Request, Response, NextFunction } from "express";
import { nutritionfoodController } from '../controller/nutritionfoodController';


export class Routes {
    private nutritionfood: nutritionfoodController = new nutritionfoodController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/nutritionfood/:id').delete(this.nutritionfood.GpDelete);
app.route('/nutritionfood/get/search').get(this.nutritionfood.GpSearch);
app.route('/nutritionfood/get/update').put(this.nutritionfood.GpSearchForUpdate);
app.route('/nutritionfood').put(this.nutritionfood.GpUpdate);
app.route('/nutritionfood').get(this.nutritionfood.GpGetAllValues);
app.route('/nutritionfood').post(this.nutritionfood.GpCreate);
     }

}