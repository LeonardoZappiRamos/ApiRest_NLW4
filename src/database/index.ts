import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test'
          ? 'pro'
          : defaultOptions.database,
    }),
  );
};


// import {createConnection} from "typeorm";

// import {User} from "../models/User";
// import {Survey} from "../models/Survey";

// const connection = createConnection({
//     name: "default",
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "consys",
//     database: "test",
//     entities: [
//         User,
//         Survey
//     ],
//     synchronize: true,
//     logging: false
// });