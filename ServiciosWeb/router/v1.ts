import * as express from 'express';

import {getAllProducts,
    getProductoById,
    createProduct,
    updateProduct,
    deleteProducto
} from "../controllers/ProductsController";

export default (app) => {
    // Rutas para nuestra api
    const apiRoutes = express.Router();

    // Rutas para el producto
    const productosRoutes = express.Router();

    /*
    PRODUCTO ROUTES
     */

    apiRoutes.use('/products', productosRoutes);

    // Obterner todos los post
    productosRoutes.get('/', getAllProducts);
}