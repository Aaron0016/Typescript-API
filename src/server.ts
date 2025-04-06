import http from "http"
import express from "express"
import logger from "./logger";
import { loggingHandler } from "./Middleware/loggerHandler";

export const app = express();                                   // export makes the variable usable in all files
export let httpServer: ReturnType<typeof http.createServer>         // 

export const Main = () => {
    logger.info("---------------------------------------")
    logger.info("Initialising API")
    logger.info("---------------------------------------")

    app.use(express.json());

    logger.info("---------------------------------------")
    logger.info("Initialising API")
    logger.info("---------------------------------------")

    app.use(loggingHandler);
    

    
    app.get("/", (req, resp) => {
        resp.send("Hello World");
    });

    httpServer = http.createServer(app)

    const tempPort = 3000;
    httpServer.listen(tempPort, () => {
        logger.info(`Server is running on http://localhost:${tempPort}`);
    })

}

Main();



