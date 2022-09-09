import moment from "moment";
import { ReportTableModel, ReportModel } from "./../models/index";
import { Request, Response } from "express";
import { AddIncidentReport, GetIncidentsReports } from "../services";
import { GetWeatherInfo } from "../services/EndpointServices";
import { ValidateReportInfo } from "../utilities";

export async function HandleNewReport(req: Request, res: Response) {
  try {
    const data: ReportModel = req.body;
    ValidateReportInfo(data);
    const weatherInfo: any = await GetWeatherInfo({ city: data.city });
    const reportInfo: ReportTableModel = {
      weather_report: weatherInfo,
      ...data,
      date: moment().format("DD/MM/YYYY"),
    };

    const response = await AddIncidentReport(reportInfo);

    res.send({ data: response, message: "Report Added Successfully" });
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function HandleGetReports(req: Request, res: Response) {
  try {
    const data = await GetIncidentsReports();
    res.send(data);
  } catch (error) {
    res.status(404).send(error);
  }
}
