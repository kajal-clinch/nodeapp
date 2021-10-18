'use strict';
import * as http from 'http';
import { serverConfig } from './config';
import { app } from './app';
import { logger } from './helper/logger';
import { setMongooseConnection } from './dbconfig';

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



