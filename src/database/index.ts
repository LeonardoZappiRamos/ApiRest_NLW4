import {createConnection, Connection} from "typeorm";

import {User} from "../models/User"
const connection = createConnection({
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "consys",
    database: "test",
    entities: [
        User
    ],
    synchronize: true,
    logging: false
});