import Products from "../models/Products";

export function getAllProducts(request, response, next) {
    // Obtenenmos todos los productos de la base de datos

    Products.find((err, products) => {
        if(err) {
            response.status(500).json({err});
        }
        response.status(200).json({products});
    });
}

export function getProductoById(request, response, next) {
    // Obtenemos el id de la peticion
    const id = response.param.id;

    //Buscamos el producto por ID
    Products.findById(id,(err, product) => {
        if (err) {
            response.status(500).json({err});
        }
        response.status(200).json({product})
    })
}

export function createProduct(request, response, nerxt) {
    // Obtenemos los parametros de la peticion
    // Estos se encuentra en el objeto body

    const nombre = request.body.nombre;
    const precio = request.body.precio;
    const anio = request.body.anio;

    // Validamos que exista la informaci[on antes de guardarla en la base de datos
    if(!nombre) {
        // Mandamos mensaje 422 para indicar que no existe el campo
        response.status(422).json({err: 'Nombre requerido'});
        return;
    }
    if(!precio) {
        // Mandamos mensaje 422 para indicar que no existe el campo
        response.status(422).json({err: 'Precio requerido'});
        return;
    }
    if(!anio) {
        // Mandamos mensaje 422 para indicar que no existe el campo
        response.status(422).json({err: 'Año requerido'});
        return;
    }

    const Product = new Products({
       nombre,
       precio,
       anio
    });

    Product.save((err, product) => {
       if (err) {
           response.status(500).json({err});
       }
       response.status(200).json({product})
    });
}

export function updateProduct(request, response, next) {
    // Obtenemos el id de la peticion
    const id = request.params.id;

    // Actualizamos el producto, buscandolo por el Id y enviandole
    // en el request.body los datos del producto a actualizar
    Products.findByIdAndUpdate(id, request.body, (err, product) => {
        if (err) {
            response.status(500).json({err});
        }
        response.status(200).json({product})
    })
}

export function deleteProducto(request, response, next) {
    // Obtener el id de la peticion
    const id = request.params.id;

    // Eliminamos el producto, buscandolo por el id y enviandole
    // en el request.body, los datos del producto a actualizar
    Products.findByIdAndRemove(id, (err, product) => {
        if (err) {
            response.status(500).json({err});
        }
        response.status(200).json({product})
    })
}