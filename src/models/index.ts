// { “client_id”: number, “incident_desc: string, “city”: string, “country”: string }
export interface ReportModel {
  client_id: number;
  incident_desc: string;
  city: string;
  country: string;
}

// { “client_id”: number, “incident_desc: string, “city”: string, “country”: string, “date”: date, “weather_report”: object }
export interface ReportTableModel extends ReportModel {
  date: string;
  weather_report: object;
}
