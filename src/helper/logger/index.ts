import { configure, getLogger } from 'log4js';

configure({
    appenders: {
        app: { type: "file", filename: "app.log" }
    },
    categories: {
        default: {
            appenders: ["app"],
            level: "info"
        }
    }
});

export const logger = getLogger();