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
exports.HandleGetReports = exports.HandleNewReport = void 0;
const moment_1 = __importDefault(require("moment"));
const services_1 = require("../services");
const EndpointServices_1 = require("../services/EndpointServices");
const utilities_1 = require("../utilities");
function HandleNewReport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            (0, utilities_1.ValidateReportInfo)(data);
            const weatherInfo = yield (0, EndpointServices_1.GetWeatherInfo)({ city: data.city });
            const reportInfo = Object.assign(Object.assign({ weather_report: weatherInfo }, data), { date: (0, moment_1.default)().format("DD/MM/YYYY") });
            if ((weatherInfo === null || weatherInfo === void 0 ? void 0 : weatherInfo.cod) === 200) {
                const response = yield (0, services_1.AddIncidentReport)(reportInfo);
                res.send({ data: response, message: "Report Added Successfully" });
            }
            else {
                res.status(404).send(`Error,${weatherInfo === null || weatherInfo === void 0 ? void 0 : weatherInfo.message}`);
            }
        }
        catch (error) {
            res.status(404).send(error);
        }
    });
}
exports.HandleNewReport = HandleNewReport;
function HandleGetReports(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, services_1.GetIncidentsReports)();
            res.send(data);
        }
        catch (error) {
            res.status(404).send(error);
        }
    });
}
exports.HandleGetReports = HandleGetReports;
