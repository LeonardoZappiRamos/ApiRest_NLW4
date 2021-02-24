import Express, { request, response } from 'express';
import {router} from "./router";
import "reflect-metadata";
import { createConnection } from 'typeorm';
import { User } from './models/User';

const app = Express();

createConnection().then(connection => {
    
    app.use(Express.json());
    app.use(router);

    app.listen(3333, ()=>console.log("Server iniciado com sucesso !!"));

})