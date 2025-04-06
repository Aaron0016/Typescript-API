"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = exports.httpServer = exports.app = void 0;
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger"));
const loggerHandler_1 = require("./Middleware/loggerHandler");
exports.app = (0, express_1.default)(); // export makes the variable usable in all files
const Main = () => {
    logger_1.default.info("---------------------------------------");
    logger_1.default.info("Initialising API");
    logger_1.default.info("---------------------------------------");
    exports.app.use(express_1.default.json());
    logger_1.default.info("---------------------------------------");
    logger_1.default.info("Initialising API");
    logger_1.default.info("---------------------------------------");
    exports.app.use(loggerHandler_1.loggingHandler);
    exports.app.get("/", (req, resp) => {
        resp.send("Hello World");
    });
    exports.httpServer = http_1.default.createServer(exports.app);
    const tempPort = 3000;
    exports.httpServer.listen(tempPort, () => {
        logger_1.default.info(`Server is running on http://localhost:${tempPort}`);
    });
};
exports.Main = Main;
(0, exports.Main)();
