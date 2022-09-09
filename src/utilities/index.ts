import { ReportModel } from "./../models/index";

export function ValidateReportInfo(info: ReportModel) {
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
