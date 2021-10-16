import * as express from 'express';

export function getBody(req: express.Request) {
    return req.body;
}

export function getParams(req: express.Request): any {
    return req.params;
}

export function getQuery(req: express.Request): any {
    return req.query;
}
export function getCookies(req: express.Request) {
    return req.cookies;
}
