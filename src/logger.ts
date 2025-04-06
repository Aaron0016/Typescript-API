import winston from "winston";

const logger = winston.createLogger(
    {   
        // configuring the logger
        level: "info",
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.simple()
        ),
        
        transports: [new winston.transports.Console()],    // sets where the logs go, in this case to console

    }
);

export default logger