import * as express from 'express';

export default (app) => {
    // Rutas para nuestra api
    const apiRoutes = express.Router();

    // Rutas para el producto
    const productosRoutes = express.Router();

    /*
    PRODUCTO ROUTES
     */

    apiRoutes.use('/products', productosRoutes);
}