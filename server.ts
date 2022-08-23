
import 'reflect-metadata'
import dotenv from 'dotenv';
import {InversifyExpressServer,getRouteInfo} from 'inversify-express-utils'
import { container } from './config/dependency/inversify.config';
import bodyParser from 'body-parser';

import './Routes/Routes'
import connection from "./config/db/Connect";
import { NextFunction, Request, Response } from 'express';

import { errorHandle } from './middleware/Error/CustomErrorHandler';


async function test() {
  try{
    await connection.sync();
  }
  catch(err ) {
    console.log(err);
  }
}

dotenv.config({
    path: './config/env/config.env'
})




const PORT = process.env.PORT;

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
  });


server.setErrorConfig((app) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({
      statusCode: 404,
      error: 'Url bulunamadı'
    });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => errorHandle(err, req, res, next));
});
let app = server.build();


const routeInfo = getRouteInfo(container);

app.listen(PORT,() => {
    console.log(`Sunucunu< ${PORT} 'de başlatıldı`);
})
