import * as express from 'express';
import { validateUser } from "./../../validators/v1/user";
import * as requestHandler from './../../helper/requestHandler';
import { logger } from './../../helper/logger';
import { commonMessages } from './../../helper/commonMessages';

export const userRouter = express.Router();

userRouter.get("/", async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json({ status: true, message: commonMessages[3].text, code: 200, data: {} });
        logger.info('get called successfully')
    } catch (e: any) {
        logger.error(e.message);
        res.status(500).send(e.message);
    }
});

userRouter.post("/", async (req: express.Request, res: express.Response) => {
    try {
        let input = requestHandler.getBody(req) as User.IUser;
        const { error } = validateUser(input);
        if (error) {
            logger.error(error.details[0].message);
            return res.status(400).send(error.details[0].message);
        }
        const response = {
            status: "Success",
            code: 200,
            data: input
        }
        res.status(200).json(response);
        logger.info(commonMessages[4].text)
    } catch (e: any) {
        logger.error(e.message)
        res.status(500).send(e.message);
    }
});

