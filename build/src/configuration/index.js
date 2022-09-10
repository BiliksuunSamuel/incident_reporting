"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT || process.env.port,
    dbName: process.env.dbName || "",
    dbPort: 5432,
    dbHost: process.env.dbHost || "",
    dbUser: process.env.dbUser || "",
    dbPassword: process.env.dbPassword || "",
    apiKey: process.env.apiKey || "afabb9625f429f674a168384a39b19b2",
};
