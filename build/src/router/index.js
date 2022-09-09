"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsRouter = void 0;
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const Router = express_1.default.Router();
Router.get("/", (request, response) => {
    response.send({
        developer: "Biliksuun Samuel",
        email: "biliksuunsamuel@gmail.com",
        git: "BiliksuunSamuel",
        currentTime: (0, moment_1.default)().format("dd, DD/MM/YYYY h:m a"),
        about: "Incident Weather Reporting API",
        routes: {
            get: "api/reports/get",
            post: "api/report/add",
        },
    });
});
var ReportsRouter_1 = require("./ReportsRouter");
Object.defineProperty(exports, "ReportsRouter", { enumerable: true, get: function () { return __importDefault(ReportsRouter_1).default; } });
exports.default = Router;
