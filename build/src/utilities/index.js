"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateReportInfo = void 0;
function ValidateReportInfo(info) {
    if (info.incident_desc.length <= 0) {
        throw "Incident Description Required";
    }
    if (info.city.length <= 0) {
        throw "City Name Required";
    }
    if (info.country.length <= 0) {
        throw "Country Name Required";
    }
}
exports.ValidateReportInfo = ValidateReportInfo;
