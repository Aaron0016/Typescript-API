"use strict";
//declare our configuration/ load environment variables
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER = exports.SERVER_PORT = exports.SERVER_HOSTNAME = exports.TEST = exports.DEVELOPMENT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // loads any .env files in our root directory
// variables 
exports.DEVELOPMENT = process.env.NODE_ENV === "development"; // checks if we are testing or developing (boolean)
exports.TEST = process.env.NODE_ENV === "test"; // 
exports.SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'local_host'; // checks if there is a hostname, if not call it localhost
exports.SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345; // checks if port exists, if so cast as a number
exports.SERVER = {
    SERVER_HOSTNAME: exports.SERVER_HOSTNAME,
    SERVER_PORT: exports.SERVER_PORT
};
