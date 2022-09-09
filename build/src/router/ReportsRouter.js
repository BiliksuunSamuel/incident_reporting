"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../routes/index");
const index_2 = require("../routes/index");
const express_1 = __importDefault(require("express"));
const ReportsController_1 = require("../controllers/ReportsController");
const Router = express_1.default.Router();
//Post Routes
Router.post(index_2.PostRoutes.report_add, ReportsController_1.HandleNewReport);
//Get Request
Router.get(index_1.GetRoutes.reports_get, ReportsController_1.HandleGetReports);
exports.default = Router;
