import { Request, Response, NextFunction } from "express";
import { foodController } from '../controller/foodController';


export class Routes {
    private food: foodController = new foodController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/food/:id').delete(this.food.GpDelete);
app.route('/food/get/search').get(this.food.GpSearch);
app.route('/food/get/update').put(this.food.GpSearchForUpdate);
app.route('/food').put(this.food.GpUpdate);
app.route('/food').get(this.food.GpGetAllValues);
app.route('/food').post(this.food.GpCreate);
     }

}