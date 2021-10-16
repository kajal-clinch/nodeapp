import * as express from 'express';
import { apiRoutes } from './v1';

export function startRoutes(app: express.Application) {
    app.use('/api/v1', apiRoutes);
};