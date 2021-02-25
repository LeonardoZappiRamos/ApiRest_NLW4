import Express from 'express';
import {router} from "./router";
import "reflect-metadata";
import "./database";

const app = Express();

    
    app.use(Express.json());
    app.use(router);

    app.listen(3333, ()=>console.log("Server iniciado com sucesso !!"));
