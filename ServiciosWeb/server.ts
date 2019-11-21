import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from "cookie-parser";
import * as logger from 'morgan';
import * as helmet from "helmet";
import * as cors from 'cors';

// Importamos las rutas desde rudas del la versión 1.0 del Api
import router from './router/v1';

// Importamos la confguracion que se que est[a en el archivo
import config from './config/main';

// iniciamos express
const app = express();

// init mongoose
mongoose.connect(config.db, config.dbparams);

// Configuracion de middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());

// Configuraos las rutas
router(app);

// Iniciamos el servidor
// Dependiendo de nuestro archivo de configuracion
let server;

if (process.env.NODE_ENV != config.test_env) {
    server = app.listen(config.port, () => {
       console.log(`Servidor escuchando en el puerto ${config.port}`);
    });
} else {
    server = app.listen(config.test_port, ()=> {
        console.log(`Servidor escuchando en el puerto ${config.test_port}`);
    });
}