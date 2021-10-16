import * as express from 'express';
import { validateUser } from "./../../validators/v1/user";
import * as requestHandler from '../../common/requestHandler';

export const userRouter = express.Router();

userRouter.get("/", async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json({ data: 'get called successfully' });
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

userRouter.post("/", async (req: express.Request, res: express.Response) => {
    try {
        let input = requestHandler.getBody(req) as User.IUser;
        const { error } = validateUser(input);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const response = {
            status: "Success",
            code: '200',
            data: input
        }
        res.status(200).json(response);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

