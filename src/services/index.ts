import { IncidentReportContext } from "../context";
import { ReportTableModel } from "../models";

interface IDbOperation {
  cmd: string;
  parameters: any[];
}

export function AddIncidentReport(info: ReportTableModel) {
  return new Promise(async function (resolve, reject) {
    try {
      const Info = await IncidentReportContext.create(
        {
          incident_desc: info.incident_desc,
          city: info.city,
          country: info.country,
          date: info.date,
          weather_report: info.weather_report,
        },
        {
          fields: [
            "incident_desc",
            "city",
            "country",
            "date",
            "weather_report",
          ],
        }
      );
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetIncidentsReports() {
  return new Promise(function (resolve, reject) {
    try {
      IncidentReportContext.findAll()
        .then((results) => resolve(results))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
}
