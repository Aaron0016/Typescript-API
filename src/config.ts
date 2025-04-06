//declare our configuration/ load environment variables

import dotenv from "dotenv"

dotenv.config()     // loads any .env files in our root directory

// variables 

export const DEVELOPMENT = process.env.NODE_ENV === "development";  // checks if we are testing or developing (boolean)
export const TEST = process.env.NODE_ENV === "test";                // 

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'local_host';  // checks if there is a hostname, if not call it localhost
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345  // checks if port exists, if so cast as a number

export const SERVER = {        
    SERVER_HOSTNAME,
    SERVER_PORT
}