import * as express from 'express';
import { userRouter } from './user';
let apiRoutes = express.Router();

apiRoutes.use('/user', userRouter);

export { apiRoutes };





