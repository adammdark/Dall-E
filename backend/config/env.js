import {config} from "dotenv";

config({path: "./.env"});

export const { 
    PORT, 
    SERVER_URL,
    NODE_ENV,
    DB_URI,
    PIXAZO_API_KEY,
} = process.env;


