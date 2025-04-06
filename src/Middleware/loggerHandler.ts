import {Request, Response, NextFunction} from "express";
import logger from "../logger";


export function loggingHandler(req: Request, resp: Response, next: NextFunction) {
    logger.info(`Method : [${req.method}] - URL : [${req.url}] - IP : [${req.socket.remoteAddress}]`)

    resp.on('finish', () => {
        logger.info(`STATUS : [${resp.statusCode}]`)
    })

next();

}
