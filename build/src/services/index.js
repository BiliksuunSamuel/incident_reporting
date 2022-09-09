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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIncidentsReports = exports.AddIncidentReport = void 0;
const context_1 = require("../context");
function AddIncidentReport(info) {
    return new Promise(function (resolve, reject) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Info = yield context_1.IncidentReportContext.create({
                    incident_desc: info.incident_desc,
                    city: info.city,
                    country: info.country,
                    date: info.date,
                    weather_report: info.weather_report,
                }, {
                    fields: [
                        "incident_desc",
                        "city",
                        "country",
                        "date",
                        "weather_report",
                    ],
                });
                Info.save();
                resolve(Info);
            }
            catch (error) {
                reject(error);
            }
        });
    });
}
exports.AddIncidentReport = AddIncidentReport;
function GetIncidentsReports() {
    return new Promise(function (resolve, reject) {
        try {
            context_1.IncidentReportContext.findAll()
                .then((results) => resolve(results))
                .catch((error) => reject(error));
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetIncidentsReports = GetIncidentsReports;
