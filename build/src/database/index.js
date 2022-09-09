"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __importDefault(require("../configuration"));
const winston_1 = __importDefault(require("winston"));
const sequelize_1 = require("sequelize");
const devOptions = {
    database: configuration_1.default.dbName,
    user: configuration_1.default.dbUser,
    port: configuration_1.default.dbPort,
    password: configuration_1.default.dbPassword,
    host: configuration_1.default.dbHost,
};
const DbContext = new sequelize_1.Sequelize("postgres://xikwadwy:yHtw68Xs5hPi7eoTrgEaqV7LEAsLPRkm@heffalump.db.elephantsql.com/xikwadwy", {
    host: devOptions.host,
    port: devOptions.port,
    dialect: "postgres",
    ssl: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: false,
});
DbContext.authenticate()
    .then(() => {
    DbContext.authenticate()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Database Connected Successfully");
        const cmd = `CREATE TABLE IF NOT EXISTS incidents(
      client_id SERIAL PRIMARY KEY,
      incident_desc VARCHAR(255) NOT NULL,
      city VARCHAR(20) NOT NULL,
      country VARCHAR(50) NOT NULL,
      date DATE NOT NULL,
      weather_report JSON NOT NULL
     )`;
        yield DbContext.query(cmd);
    }))
        .catch((error) => {
        winston_1.default.log("error", error);
    });
})
    .catch((error) => winston_1.default.log("error", error));
exports.default = DbContext;
