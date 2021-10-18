'use strict';
import * as http from 'http';
import { startRoutes } from './routes';
import mongoose from "mongoose";
import { serverConfig } from './config';
import { app } from './app';
import { logger } from './helper/logger';

const PORT: number = serverConfig.port;
const HOST: string = serverConfig.host;


let server: http.Server = app.listen(PORT, HOST);

// handle specific errors with friendly messages
server.on('error', (error: NodeJS.ErrnoException) => {
    switch (error.code) {
        case 'EADDRINUSE':
            console.log(PORT + ' is already in use, exiting the process.');
            process.exit(1);
        default:
            throw error;
    }
})

server.on('listening', () => {
    const msg = `>>> 🌎 Server started on  http://${HOST}:${PORT}/`;
    logger.info(msg);
    console.info(msg);
    setMongooseConnection();
})


function setMongooseConnection() {
    mongoose.connect(serverConfig.database.uri);
}

//database connection settings
mongoose.connection.on('error', function (err: any) {
    const errorMsg = `Database connection error ${serverConfig.database.uri},with error: ${err}`;
    logger.error(errorMsg);
    console.log(errorMsg);
    process.exit(1);
});

mongoose.connection.on('open', async function (err) {
    if (err) {
        logger.error("database error: ", err);
    }
    else {
        try {
            console.log("database connected successfully");
            logger.info("database connected successfully");
            // startRoutes(app);
        }
        catch (error) {
            logger.error(error);
            process.exit(1);
        }
    }
});