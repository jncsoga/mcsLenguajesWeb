import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductsScrhema = new Schema({
   nombre: {
       type: String,
       default: '',
       required: true
   },
    precio: {
       type: Number,
        default: 0.0,
        required: true
    },
    anio: {
       type: Number,
        default: 2019,
        required: true
    }
});

export default mongoose.model('Products', ProductsScrhema);