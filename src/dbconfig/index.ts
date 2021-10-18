import { mongodbUri } from './../config/mongoConfig';
import { startRoutes } from './../routes';
import mongoose from "mongoose";
import { logger } from './../helper/logger';
import { commonMessages } from './../helper/commonMessages';

export function setMongooseConnection() {
    mongoose.connect(mongodbUri.uri);
}
//database connection settings
mongoose.connection.on('error', function (err: any) {
    const errorMsg = `Database connection error ${mongodbUri.uri},with error: ${err}`;
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
            console.log(commonMessages[1].text);
            logger.info(commonMessages[1].text);
            // startRoutes(app);
        }
        catch (error) {
            logger.error(error);
            process.exit(1);
        }
    }
});