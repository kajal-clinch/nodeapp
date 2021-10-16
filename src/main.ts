'use strict';
import * as http from 'http';
import { startRoutes } from './routes';
import mongoose from "mongoose";
import { serverConfig } from './config';
import { app } from './app';

const PORT: number = serverConfig.port;
const HOST: string = serverConfig.host;


let server: http.Server = app.listen(PORT, HOST);

// handle specific errors with friendly messages
server.on('error', (error: NodeJS.ErrnoException) => {
    switch (error.code) {
        case 'EADDRINUSE':
            console.error(PORT + ' is already in use, exiting the process.');
            process.exit(1);
        default:
            throw error;
    }
})

server.on('listening', () => {
    console.info(`>>> 🌎 Server started on  http://${HOST}:${PORT}/`);
    setMongooseConnection();
})


function setMongooseConnection() {
    mongoose.connect(serverConfig.database.uri);
}

//database connection settings
mongoose.connection.on('error', function (err: any) {
    console.log('database connection error', serverConfig.database.uri);
    console.log(err);
    process.exit(1);
});

mongoose.connection.on('open', async function (err) {
    if (err) {
        console.log("database error");
        console.log(err);
    }
    else {
        try {
            console.log("database connected successfully");
            // startRoutes(app);
        }
        catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
});