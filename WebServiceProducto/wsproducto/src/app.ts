import express, { response } from "express";
import path from "path";
import { request } from "http";

const app = express();
const router = express.Router();

const port = process.env.SERVER_PORT || 4000;

app.use(express.static(__dirname));

app.use('/', router);

router.get("/", (request, response) => {
    response.send('okidoki');
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
});