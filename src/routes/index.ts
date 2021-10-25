import { Router } from 'express';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';
import { routesReceipts } from './receiptRoutes';

import { routeHouses } from './routeHouses';
import { routesLocation } from './routeLocation';
import { routeTenants } from './routeTenants';
import { routesUser } from './userRoutes';

const routes = Router();

routes.use('/tenants', routeTenants);
routes.use('/houses', routeHouses)
routes.use('/locations', routesLocation)
routes.use('/receipts', routesReceipts)
routes.use('/users', routesUser)

routes.get('/kkk', EnsureAuthenticated, (req, res)=>{
    return res.json({
        ok:true
    })
})

export { routes }